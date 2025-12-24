'use client';

import { useState } from 'react';
import { 
  DndContext, 
  DragEndEvent, 
  DragOverlay, 
  DragStartEvent,
  useDraggable,
  useDroppable,
  closestCenter,
  DragOverEvent,
  UniqueIdentifier
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove
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

interface DroppedComponent {
  id: string;
  type: string;
  name: string;
  zone: 'navbar' | 'content' | 'footer';
  props: any;
}

// Available components to drag
const AVAILABLE_COMPONENTS: ComponentItem[] = [
  // Buttons
  { 
    id: 'solid-blue', 
    type: 'button', 
    name: 'Solid Blue', 
    icon: '🔵', 
    category: 'Buttons',
    allowedZones: ['content']
  },
  { 
    id: 'gradient-purple', 
    type: 'button', 
    name: 'Gradient Purple', 
    icon: '🟣', 
    category: 'Buttons',
    allowedZones: ['content']
  },
  { 
    id: 'neon-blue', 
    type: 'button', 
    name: 'Neon Blue', 
    icon: '💠', 
    category: 'Buttons',
    allowedZones: ['content']
  },
  { 
    id: 'glass-blue', 
    type: 'button', 
    name: 'Glass Blue', 
    icon: '🔷', 
    category: 'Buttons',
    allowedZones: ['content']
  },
  
  // Cards
  { 
    id: 'feature-card', 
    type: 'card', 
    name: 'Feature Card', 
    icon: '🃏', 
    category: 'Cards',
    allowedZones: ['content']
  },
  { 
    id: 'product-card', 
    type: 'card', 
    name: 'Product Card', 
    icon: '🛍️', 
    category: 'Cards',
    allowedZones: ['content']
  },
  { 
    id: 'stat-card', 
    type: 'card', 
    name: 'Stat Card', 
    icon: '📊', 
    category: 'Cards',
    allowedZones: ['content']
  },
  
  // Layout
  { 
    id: 'container', 
    type: 'container', 
    name: 'Container', 
    icon: '📦', 
    category: 'Layout',
    allowedZones: ['content']
  },
  { 
    id: 'navbar', 
    type: 'navbar', 
    name: 'Navbar', 
    icon: '🔝', 
    category: 'Layout',
    allowedZones: ['navbar']
  },
  { 
    id: 'footer', 
    type: 'footer', 
    name: 'Footer', 
    icon: '🔽', 
    category: 'Layout',
    allowedZones: ['footer']
  },
];

export default function BuilderPage() {
  const [droppedComponents, setDroppedComponents] = useState<DroppedComponent[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveId(null);
      return;
    }

    // إعادة ترتيب المكونات داخل Content
    if (active.id !== over.id) {
      const activeComponent = droppedComponents.find(c => c.id === active.id);
      const overComponent = droppedComponents.find(c => c.id === over.id);

      // إذا كان السحب بين مكونات موجودة (Sortable)
      if (activeComponent && overComponent && activeComponent.zone === 'content' && overComponent.zone === 'content') {
        setDroppedComponents((items) => {
          const oldIndex = items.findIndex(i => i.id === active.id);
          const newIndex = items.findIndex(i => i.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
        setActiveId(null);
        return;
      }
    }

    // إضافة مكون جديد
    const component = AVAILABLE_COMPONENTS.find(c => c.id === active.id);
    const zone = over.id as 'navbar' | 'content' | 'footer';
    
    if (component && component.allowedZones.includes(zone)) {
      setDroppedComponents(prev => {
        // Navbar/Footer: استبدال
        if (zone === 'navbar' || zone === 'footer') {
          const filtered = prev.filter(c => c.zone !== zone);
          return [...filtered, {
            id: `${component.id}-${Date.now()}`,
            type: component.type,
            name: component.name,
            zone: zone,
            props: {}
          }];
        }
        
        // Content: إضافة
        return [...prev, {
          id: `${component.id}-${Date.now()}`,
          type: component.type,
          name: component.name,
          zone: zone,
          props: {}
        }];
      });
    }
    
    setActiveId(null);
  };

  const removeComponent = (id: string) => {
    setDroppedComponents(prev => prev.filter(c => c.id !== id));
  };

  const getComponentsByZone = (zone: 'navbar' | 'content' | 'footer') => {
    return droppedComponents.filter(c => c.zone === zone);
  };

  const groupedComponents = AVAILABLE_COMPONENTS.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, ComponentItem[]>);

  // البحث عن المكون النشط
  const activeComponentFromPalette = AVAILABLE_COMPONENTS.find(c => c.id === activeId);
  const activeComponentFromCanvas = droppedComponents.find(c => c.id === activeId);
  
  // نحدد أي واحد نستخدم
  const activeComponent = activeComponentFromPalette || activeComponentFromCanvas;

  const contentComponents = getComponentsByZone('content');

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      
      {/* Top Bar */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50 flex-shrink-0">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Page Builder</h1>
            <p className="text-gray-400 mt-1 text-sm">Drag & Drop components • Reorder in content area</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm">
              💾 Save
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
              👁️ Preview
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm">
              📤 Export
            </button>
          </div>
        </div>
      </header>

      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Sidebar - Components Palette */}
          <aside className="w-80 border-r border-gray-800 bg-gray-900/50 overflow-y-auto flex-shrink-0">
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
            <div className="max-w-7xl mx-auto">
              
              <div className="bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                
                {/* Navbar Zone */}
                <DroppableZone 
                  id="navbar"
                  title="Navbar"
                  subtitle="Drop navbar component (max 1)"
                  isEmpty={getComponentsByZone('navbar').length === 0}
                  className="bg-gray-900/40 border-b border-gray-800/50 min-h-[80px]"
                >
                  {getComponentsByZone('navbar').map((component) => (
                    <StaticComponentPreview
                      key={component.id}
                      component={component}
                      onRemove={removeComponent}
                      onClick={() => setSelectedComponent(component.id)}
                      isSelected={selectedComponent === component.id}
                    />
                  ))}
                </DroppableZone>

                {/* Content Zone - Sortable */}
                <SortableContentZone
                  components={contentComponents}
                  onRemove={removeComponent}
                  selectedComponent={selectedComponent}
                  setSelectedComponent={setSelectedComponent}
                />

                {/* Footer Zone */}
                <DroppableZone 
                  id="footer"
                  title="Footer"
                  subtitle="Drop footer component (max 1)"
                  isEmpty={getComponentsByZone('footer').length === 0}
                  className="bg-gray-900/40 border-t border-gray-800/50 min-h-[100px]"
                >
                  {getComponentsByZone('footer').map((component) => (
                    <StaticComponentPreview
                      key={component.id}
                      component={component}
                      onRemove={removeComponent}
                      onClick={() => setSelectedComponent(component.id)}
                      isSelected={selectedComponent === component.id}
                    />
                  ))}
                </DroppableZone>
              </div>
            </div>
          </main>

          {/* Right Panel */}
          <aside className="w-80 border-l border-gray-800 bg-gray-900/50 overflow-y-auto flex-shrink-0">
            <div className="p-4">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>⚙️</span> Properties
              </h2>
              {selectedComponent ? (
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-white text-sm">Component selected</p>
                  <p className="text-gray-400 text-xs mt-2">Properties panel coming soon...</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">👆</div>
                  <p className="text-gray-500 text-sm">Select a component</p>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeId && activeComponentFromPalette ? (
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl font-semibold">
              {activeComponentFromPalette.icon} {activeComponentFromPalette.name}
            </div>
          ) : activeId && activeComponentFromCanvas ? (
            <div className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-2xl font-semibold">
              🔄 {activeComponentFromCanvas.name}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

// Draggable Component (Sidebar)
function DraggableComponent({ component }: { component: ComponentItem }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: component.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`
        bg-gray-800/80 hover:bg-gray-700 border border-gray-700 
        rounded-xl p-4 cursor-grab active:cursor-grabbing
        transition-all hover:scale-105 hover:shadow-lg
        ${isDragging ? 'opacity-50' : 'opacity-100'}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{component.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">{component.name}</p>
          <p className="text-gray-400 text-xs capitalize">{component.type}</p>
        </div>
      </div>
    </div>
  );
}

// Droppable Zone
function DroppableZone({ 
  id, 
  title,
  subtitle,
  isEmpty,
  children,
  className = ''
}: { 
  id: string;
  title: string;
  subtitle: string;
  isEmpty: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`
        relative p-6 transition-all
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
      ) : (
        children
      )}
    </div>
  );
}

// Sortable Content Zone
function SortableContentZone({
  components,
  onRemove,
  selectedComponent,
  setSelectedComponent
}: {
  components: DroppedComponent[];
  onRemove: (id: string) => void;
  selectedComponent: string | null;
  setSelectedComponent: (id: string | null) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: 'content' });

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-gray-950/50 min-h-[600px] p-6 transition-all
        ${isOver ? 'ring-2 ring-blue-500 bg-blue-500/5' : ''}
      `}
    >
      {components.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="text-3xl mb-2 opacity-30">📦</div>
            <p className="text-gray-600 text-sm font-semibold">Content Area</p>
            <p className="text-gray-700 text-xs mt-1">Drop components • Drag to reorder</p>
          </div>
        </div>
      ) : (
        <SortableContext items={components.map(c => c.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <SortableComponent
                key={component.id}
                component={component}
                onRemove={onRemove}
                onClick={() => setSelectedComponent(component.id)}
                isSelected={selectedComponent === component.id}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  );
}

// Sortable Component (Content Area)
function SortableComponent({
  component,
  onRemove,
  onClick,
  isSelected
}: {
  component: DroppedComponent;
  onRemove: (id: string) => void;
  onClick: () => void;
  isSelected: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={`
        relative bg-gray-800/50 border-2 rounded-xl p-6 
        cursor-move transition-all group
        hover:border-blue-500/50 hover:shadow-lg
        ${isSelected ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-700'}
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <p className="text-white font-semibold text-lg">{component.name}</p>
          <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{component.type}</p>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(component.id);
          }}
          className="opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1 rounded-lg text-xs transition-all"
        >
          ✕
        </button>
      </div>

      <div className="mt-4 bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
        <div className="h-16 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded animate-pulse" />
      </div>
    </div>
  );
}

// Static Component (Navbar/Footer)
function StaticComponentPreview({
  component,
  onRemove,
  onClick,
  isSelected
}: {
  component: DroppedComponent;
  onRemove: (id: string) => void;
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        relative bg-gray-800/50 border-2 rounded-xl p-6 
        cursor-pointer transition-all group
        hover:border-blue-500/50 hover:shadow-lg
        ${isSelected ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-700'}
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <p className="text-white font-semibold text-lg">{component.name}</p>
          <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{component.type}</p>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(component.id);
          }}
          className="opacity-0 group-hover:opacity-100 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1 rounded-lg text-xs transition-all"
        >
          ✕
        </button>
      </div>

      <div className="mt-4 bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
        <div className="h-16 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded animate-pulse" />
      </div>
    </div>
  );
}