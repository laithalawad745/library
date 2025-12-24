// app/(docs)/builder/page.tsx
'use client';

import React, { useEffect } from 'react';
import { ComponentRenderer } from './ComponentRenderer';
import { useBuilderStore } from './store/builderStore';
import { 
  DndContext, 
  DragEndEvent, 
  DragOverlay, 
  DragStartEvent,
  useDraggable,
  useDroppable,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Types
interface ComponentItem {
  id: string;
  type: 'button' | 'card' | 'container' | 'navbar' | 'footer';
  name: string;
  icon: string;
  category: string;
  allowedZones: ('navbar' | 'content' | 'footer')[];
}

// Available components
const AVAILABLE_COMPONENTS: ComponentItem[] = [
  // Buttons
  { id: 'solid-blue', type: 'button', name: 'Solid Blue', icon: '🔵', category: 'Buttons', allowedZones: ['content'] },
  { id: 'solid-red', type: 'button', name: 'Solid Red', icon: '🔴', category: 'Buttons', allowedZones: ['content'] },
  { id: 'solid-green', type: 'button', name: 'Solid Green', icon: '🟢', category: 'Buttons', allowedZones: ['content'] },
  { id: 'gradient-purple-pink', type: 'button', name: 'Gradient Purple Pink', icon: '🌈', category: 'Buttons', allowedZones: ['content'] },
  { id: 'glass-blue', type: 'button', name: 'Glass Blue', icon: '🔷', category: 'Buttons', allowedZones: ['content'] },
  { id: 'neon-blue', type: 'button', name: 'Neon Blue', icon: '💠', category: 'Buttons', allowedZones: ['content'] },
  
  // Cards
  { id: 'feature-card', type: 'card', name: 'Feature Card', icon: '🃏', category: 'Cards', allowedZones: ['content'] },
  { id: 'product-card', type: 'card', name: 'Product Card', icon: '🛍️', category: 'Cards', allowedZones: ['content'] },
  { id: 'stat-card', type: 'card', name: 'Stat Card', icon: '📊', category: 'Cards', allowedZones: ['content'] },
  
  // Layout
  { id: 'navbar', type: 'navbar', name: 'Navbar', icon: '🔝', category: 'Layout', allowedZones: ['navbar'] },
  { id: 'footer', type: 'footer', name: 'Footer', icon: '🔽', category: 'Layout', allowedZones: ['footer'] },
];

export default function BuilderPage() {
  // 🎯 Zustand Store بدلاً من useState
  const {
    activeId,
    setActiveId,
    addComponent,
    replaceZoneComponent,
    removeComponent,
    reorderComponents,
    selectComponent,
    selectedComponentId,
    getComponentsByZone,
    clearAll,
    undo,
    redo,
    canUndo,
    canRedo,
    saveProject,
    exportCode,
    commitToHistory, // ✅ جديد
  } = useBuilderStore();

  // ⚡ Sensors للأداء
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // يبدأ الـ drag بعد 8px - يمنع clicks غير مقصودة
      },
    })
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
    };
    
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [undo, redo]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveId(null);
      return;
    }

    // إعادة ترتيب داخل Content
    if (active.id !== over.id) {
      const contentComps = getComponentsByZone('content');
      const activeComp = contentComps.find(c => c.id === active.id);
      const overComp = contentComps.find(c => c.id === over.id);

      if (activeComp && overComp) {
        const oldIndex = contentComps.indexOf(activeComp);
        const newIndex = contentComps.indexOf(overComp);
        reorderComponents(oldIndex, newIndex);
        
        // ✅ حفظ في الـ history بعد انتهاء الـ drag
        setTimeout(() => commitToHistory(), 100);
        
        setActiveId(null);
        return;
      }
    }

    // إضافة component جديد
    const zone = over.id as 'navbar' | 'content' | 'footer';
    const component = AVAILABLE_COMPONENTS.find(c => c.id === active.id);
    
    if (component && component.allowedZones.includes(zone)) {
      if (zone === 'navbar' || zone === 'footer') {
        replaceZoneComponent(zone, {
          type: component.type,
          name: component.name,
          zone: zone,
          props: {}
        });
      } else {
        addComponent({
          type: component.type,
          name: component.name,
          zone: zone,
          props: {}
        });
      }
    }
    
    setActiveId(null);
  };

  const handleExport = () => {
    const code = exportCode();
    navigator.clipboard.writeText(code);
    alert('✅ Code copied to clipboard!');
  };

  const handleSave = () => {
    const json = saveProject();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `telecop-builder-${Date.now()}.json`;
    a.click();
  };

  const navbarComponents = getComponentsByZone('navbar');
  const contentComponents = getComponentsByZone('content');
  const footerComponents = getComponentsByZone('footer');

  // ⚡ Memoize للمكونات - يمنع re-render غير ضروري
  const memoizedNavbar = React.useMemo(() => navbarComponents, [navbarComponents.length]);
  const memoizedContent = React.useMemo(() => contentComponents, [contentComponents.length]);
  const memoizedFooter = React.useMemo(() => footerComponents, [footerComponents.length]);

  // Debug مؤقت
  useEffect(() => {
    console.log('🔍 Components updated:', {
      navbar: navbarComponents.length,
      content: contentComponents.length,
      footer: footerComponents.length,
      contentItems: contentComponents
    });
  }, [navbarComponents, contentComponents, footerComponents]);

  const groupedComponents = AVAILABLE_COMPONENTS.reduce((acc, component) => {
    if (!acc[component.category]) acc[component.category] = [];
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, ComponentItem[]>);

  const activeComponent = AVAILABLE_COMPONENTS.find(c => c.id === activeId);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      
      {/* Top Bar */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Page Builder</h1>
            <p className="text-gray-400 mt-1 text-sm">Drag & Drop • Zustand • Live Preview</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={undo}
              disabled={!canUndo()}
              className="px-3 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm"
              title="Undo (Ctrl+Z)"
            >
              ↶ Undo
            </button>
            <button 
              onClick={redo}
              disabled={!canRedo()}
              className="px-3 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors text-sm"
              title="Redo (Ctrl+Y)"
            >
              ↷ Redo
            </button>
            <button 
              onClick={clearAll}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
            >
              🗑️ Clear
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
            >
              💾 Save
            </button>
            <button 
              onClick={handleExport}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
            >
              📤 Export
            </button>
          </div>
        </div>
      </header>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Sidebar */}
          <aside className="w-80 border-r border-gray-800 bg-gray-900/50 overflow-y-auto">
            <div className="p-4">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>🎨</span> Components
              </h2>
              
              {Object.entries(groupedComponents).map(([category, components]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {components.map((component) => (
                      <DraggableComponent key={component.id} component={component} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Center Canvas */}
          <main className="flex-1 overflow-auto bg-gradient-to-b from-gray-900 to-gray-950 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
              
              {/* Builder Canvas */}
              <div className="bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                
                {/* Navbar Zone */}
                <DroppableZone 
                  id="navbar"
                  title="Navbar"
                  subtitle="Drop navbar (max 1)"
                  isEmpty={navbarComponents.length === 0}
                  className="bg-gray-900/40 border-b border-gray-800/50 min-h-[80px]"
                >
                  {navbarComponents.map((component) => (
                    <ComponentPreview
                      key={component.id}
                      component={component}
                      onRemove={removeComponent}
                      onClick={() => selectComponent(component.id)}
                      isSelected={selectedComponentId === component.id}
                    />
                  ))}
                </DroppableZone>

                {/* Content Zone - Sortable */}
                <SortableContentZone
                  components={contentComponents}
                  onRemove={removeComponent}
                  selectComponent={selectComponent}
                  selectedComponentId={selectedComponentId}
                  reorderComponents={reorderComponents}
                />

                {/* Footer Zone */}
                <DroppableZone 
                  id="footer"
                  title="Footer"
                  subtitle="Drop footer (max 1)"
                  isEmpty={footerComponents.length === 0}
                  className="bg-gray-900/40 border-t border-gray-800/50 min-h-[100px]"
                >
                  {footerComponents.map((component) => (
                    <ComponentPreview
                      key={component.id}
                      component={component}
                      onRemove={removeComponent}
                      onClick={() => selectComponent(component.id)}
                      isSelected={selectedComponentId === component.id}
                    />
                  ))}
                </DroppableZone>
              </div>

              {/* Live Preview */}
              <div className="bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>👁️</span> Live Preview
                    <span className="text-xs text-gray-400">
                      ({contentComponents.length} items)
                    </span>
                  </h3>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 min-h-[600px]">
                  {/* Navbar Preview */}
                  {memoizedNavbar.map((component) => (
                    <div key={component.id} className="mb-4">
                      <ComponentRenderer component={component} />
                    </div>
                  ))}
                  
                  {/* Content Preview */}
                  <div className="flex flex-wrap gap-6 justify-center items-start p-8">
                    {memoizedContent.length > 0 ? (
                      memoizedContent.map((component) => (
                        <div key={component.id}>
                          <ComponentRenderer component={component} />
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-20 text-white">
                        <div className="text-6xl mb-4">👆</div>
                        <p className="text-2xl font-bold mb-2">Drop components here</p>
                        <p className="text-sm opacity-70">Drag from the left sidebar</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Footer Preview */}
                  {memoizedFooter.map((component) => (
                    <div key={component.id} className="mt-4">
                      <ComponentRenderer component={component} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Right Panel */}
          <aside className="w-80 border-l border-gray-800 bg-gray-900/50 overflow-y-auto">
            <div className="p-4">
              <h2 className="text-lg font-bold text-white mb-4">⚙️ Properties</h2>
              {selectedComponentId ? (
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <p className="text-white text-sm font-semibold">Selected Component</p>
                  <div className="mt-4 text-gray-400 text-xs">Properties panel...</div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">👆</div>
                  <p className="text-gray-500 text-sm">Select component to edit</p>
                </div>
              )}
            </div>
          </aside>
        </div>

        <DragOverlay dropAnimation={null}>
          {activeId && activeComponent && (
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl font-semibold flex items-center gap-2 opacity-90 cursor-grabbing">
              <span className="text-2xl">{activeComponent.icon}</span>
              <span>{activeComponent.name}</span>
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

// ========== Sub Components (Memoized للأداء) ==========

const DraggableComponent = React.memo(({ component }: { component: ComponentItem }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: component.id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`
        bg-gray-800/80 hover:bg-gray-700 border border-gray-700 
        rounded-xl p-4 cursor-grab active:cursor-grabbing 
        transition-colors duration-200
        hover:border-blue-500/50
        ${isDragging ? 'opacity-40' : 'opacity-100'}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{component.icon}</span>
        <div>
          <p className="text-white text-sm font-semibold">{component.name}</p>
          <p className="text-gray-400 text-xs capitalize">{component.type}</p>
        </div>
      </div>
    </div>
  );
});

function DroppableZone({ id, title, subtitle, isEmpty, children, className = '' }: any) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`
        relative p-6 transition-all duration-200
        ${isOver ? 'ring-2 ring-blue-500 bg-blue-500/5' : ''}
        ${className}
      `}
    >
      {isEmpty ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-3xl mb-2 opacity-30">📦</div>
            <p className="text-gray-600 text-sm font-semibold">{title}</p>
            <p className="text-gray-700 text-xs mt-1">{subtitle}</p>
          </div>
        </div>
      ) : children}
    </div>
  );
}

function SortableContentZone({ components, onRemove, selectComponent, selectedComponentId, reorderComponents }: any) {
  const { setNodeRef, isOver } = useDroppable({ id: 'content' });

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-gray-950/50 min-h-[600px] p-6 transition-all duration-200
        ${isOver ? 'ring-2 ring-blue-500 bg-blue-500/5' : ''}
      `}
    >
      {components.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-3xl mb-2 opacity-30">📦</div>
            <p className="text-gray-600 text-sm font-semibold">Content Area</p>
            <p className="text-gray-700 text-xs mt-1">Drop • Drag to reorder</p>
          </div>
        </div>
      ) : (
        <SortableContext items={components.map((c: any) => c.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component: any) => (
              <SortableComponent
                key={component.id}
                component={component}
                onRemove={onRemove}
                onClick={() => selectComponent(component.id)}
                isSelected={selectedComponentId === component.id}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  );
}

const SortableComponent = React.memo(({ component, onRemove, onClick, isSelected }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ 
    id: component.id,
    transition: {
      duration: 150,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: isDragging ? 'none' : transition,
    touchAction: 'none',
  };

  // ✅ عند الـ drag - نعرض placeholder بسيط
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="relative bg-gray-800/30 border-2 border-dashed border-gray-600 rounded-xl p-6 h-full"
      >
        <div className="flex items-center justify-center h-full opacity-50">
          <p className="text-gray-500 text-sm">{component.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={`
        relative bg-gray-800/50 border-2 rounded-xl p-6 cursor-move group 
        hover:border-blue-500/50 transition-colors duration-150
        ${isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700'}
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-white font-semibold">{component.name}</p>
          <p className="text-gray-400 text-xs uppercase">{component.type}</p>
        </div>
        
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(component.id); }}
          className="opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1 rounded-lg text-xs transition-all"
        >
          ✕
        </button>
      </div>
      
      {/* Preview box */}
      <div className="mt-4 bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
        <div className="h-16 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded" />
      </div>
    </div>
  );
});

const ComponentPreview = React.memo(({ component, onRemove, onClick, isSelected }: any) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative bg-gray-800/50 border-2 rounded-xl p-6 cursor-pointer group 
        hover:border-blue-500/50 transition-colors duration-150
        ${isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-700'}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-semibold">{component.name}</p>
          <p className="text-gray-400 text-xs uppercase">{component.type}</p>
        </div>
        
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(component.id); }}
          className="opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1 rounded-lg text-xs transition-all"
        >
          ✕
        </button>
      </div>
      
      <div className="mt-4 h-12 bg-gray-900/50 rounded border border-gray-700/50" />
    </div>
  );
});