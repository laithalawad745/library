// app/(docs)/builder/store/builderStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { arrayMove } from '@dnd-kit/sortable';

// Types
export interface DroppedComponent {
  id: string;
  type: 'button' | 'card' | 'container' | 'navbar' | 'footer';
  name: string;
  zone: 'navbar' | 'content' | 'footer';
  props: Record<string, any>;
}

interface BuilderState {
  // ========== State ==========
  droppedComponents: DroppedComponent[];
  selectedComponentId: string | null;
  activeId: string | null;
  
  // History للـ Undo/Redo
  history: DroppedComponent[][];
  historyIndex: number;
  
  // ========== Getters ==========
  getComponentsByZone: (zone: 'navbar' | 'content' | 'footer') => DroppedComponent[];
  getSelectedComponent: () => DroppedComponent | null;
  canUndo: () => boolean;
  canRedo: () => boolean;
  
  // ========== Actions ==========
  // Component Management
  addComponent: (component: Omit<DroppedComponent, 'id'>) => void;
  removeComponent: (id: string) => void;
  updateComponent: (id: string, updates: Partial<DroppedComponent>) => void;
  reorderComponents: (oldIndex: number, newIndex: number) => void;
  replaceZoneComponent: (zone: 'navbar' | 'footer', component: Omit<DroppedComponent, 'id'>) => void;
  
  // Selection
  selectComponent: (id: string | null) => void;
  
  // Drag & Drop
  setActiveId: (id: string | null) => void;
  
  // Bulk Operations
  clearAll: () => void;
  clearZone: (zone: 'navbar' | 'content' | 'footer') => void;
  
  // History (Undo/Redo)
  commitToHistory: () => void; // ✅ جديد
  undo: () => void;
  redo: () => void;
  
  // Project Management
  saveProject: () => string;
  loadProject: (json: string) => void;
  exportCode: () => string;
}

export const useBuilderStore = create<BuilderState>()(
  devtools(
    persist(
      (set, get) => ({
        // ========== Initial State ==========
        droppedComponents: [],
        selectedComponentId: null,
        activeId: null,
        history: [[]],
        historyIndex: 0,
        
        // ========== Getters ==========
        getComponentsByZone: (zone) => {
          return get().droppedComponents.filter(c => c.zone === zone);
        },
        
        getSelectedComponent: () => {
          const { droppedComponents, selectedComponentId } = get();
          return droppedComponents.find(c => c.id === selectedComponentId) || null;
        },
        
        canUndo: () => get().historyIndex > 0,
        canRedo: () => get().historyIndex < get().history.length - 1,
        
        // ========== Actions ==========
        
        // إضافة component (للـ Content)
        addComponent: (component) => {
          set((state) => {
            const newComponent: DroppedComponent = {
              ...component,
              id: `${component.type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            };
            
            const newComponents = [...state.droppedComponents, newComponent];
            
            // حفظ في الـ history
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push(newComponents);
            
            return {
              droppedComponents: newComponents,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // استبدال component في Navbar/Footer
        replaceZoneComponent: (zone, component) => {
          set((state) => {
            const newComponent: DroppedComponent = {
              ...component,
              id: `${component.type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              zone,
            };
            
            // حذف الـ component القديم من نفس الـ zone
            const filtered = state.droppedComponents.filter(c => c.zone !== zone);
            const newComponents = [...filtered, newComponent];
            
            // حفظ في الـ history
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push(newComponents);
            
            return {
              droppedComponents: newComponents,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // حذف component
        removeComponent: (id) => {
          set((state) => {
            const newComponents = state.droppedComponents.filter(c => c.id !== id);
            
            // حفظ في الـ history
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push(newComponents);
            
            return {
              droppedComponents: newComponents,
              selectedComponentId: state.selectedComponentId === id ? null : state.selectedComponentId,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // تحديث component props
        updateComponent: (id, updates) => {
          set((state) => {
            const newComponents = state.droppedComponents.map(c =>
              c.id === id ? { ...c, ...updates } : c
            );
            
            // حفظ في الـ history
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push(newComponents);
            
            return {
              droppedComponents: newComponents,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // إعادة ترتيب في Content (محسّن للأداء - بدون history فوري)
        reorderComponents: (oldIndex, newIndex) => {
          set((state) => {
            const contentComponents = state.droppedComponents.filter(c => c.zone === 'content');
            const otherComponents = state.droppedComponents.filter(c => c.zone !== 'content');
            
            const reordered = arrayMove(contentComponents, oldIndex, newIndex);
            const newComponents = [...otherComponents, ...reordered];
            
            // ✅ بدون history - سريع جداً
            return {
              droppedComponents: newComponents,
            };
          });
        },
        
        // حفظ snapshot في الـ history (يُستدعى بعد انتهاء الـ drag)
        commitToHistory: () => {
          set((state) => {
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push([...state.droppedComponents]);
            
            return {
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // اختيار component
        selectComponent: (id) => {
          set({ selectedComponentId: id });
        },
        
        // تفعيل الـ drag
        setActiveId: (id) => {
          set({ activeId: id });
        },
        
        // مسح كل شي
        clearAll: () => {
          set((state) => {
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push([]);
            
            return {
              droppedComponents: [],
              selectedComponentId: null,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // مسح zone معين
        clearZone: (zone) => {
          set((state) => {
            const newComponents = state.droppedComponents.filter(c => c.zone !== zone);
            
            const newHistory = state.history.slice(0, state.historyIndex + 1);
            newHistory.push(newComponents);
            
            return {
              droppedComponents: newComponents,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          });
        },
        
        // ========== Undo/Redo ==========
        undo: () => {
          set((state) => {
            if (state.historyIndex > 0) {
              const newIndex = state.historyIndex - 1;
              return {
                droppedComponents: state.history[newIndex],
                historyIndex: newIndex,
                selectedComponentId: null,
              };
            }
            return state;
          });
        },
        
        redo: () => {
          set((state) => {
            if (state.historyIndex < state.history.length - 1) {
              const newIndex = state.historyIndex + 1;
              return {
                droppedComponents: state.history[newIndex],
                historyIndex: newIndex,
                selectedComponentId: null,
              };
            }
            return state;
          });
        },
        
        // ========== Save/Load/Export ==========
        saveProject: () => {
          const state = get();
          return JSON.stringify({
            components: state.droppedComponents,
            version: '1.0',
            timestamp: new Date().toISOString(),
          }, null, 2);
        },
        
        loadProject: (json) => {
          try {
            const data = JSON.parse(json);
            set({
              droppedComponents: data.components || [],
              selectedComponentId: null,
              history: [data.components || []],
              historyIndex: 0,
            });
          } catch (error) {
            console.error('Failed to load project:', error);
          }
        },
        
        exportCode: () => {
          const { droppedComponents } = get();
          
          // جمع الـ imports
          const imports = new Set<string>();
          droppedComponents.forEach(comp => {
            if (comp.type === 'button') imports.add(comp.name.replace(/\s+/g, ''));
            if (comp.type === 'card') {
              if (comp.name.includes('Feature')) imports.add('FeatureCard');
              if (comp.name.includes('Product')) imports.add('ProductCard');
              if (comp.name.includes('Stat')) imports.add('StatCard');
            }
          });
          
          const importLine = imports.size > 0 
            ? `import { ${Array.from(imports).join(', ')} } from 'telecop';\n\n`
            : '';
          
          // تجميع الـ components حسب الـ zones
          const navbar = droppedComponents.filter(c => c.zone === 'navbar');
          const content = droppedComponents.filter(c => c.zone === 'content');
          const footer = droppedComponents.filter(c => c.zone === 'footer');
          
          const code = `${importLine}export default function MyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      ${navbar.length > 0 ? `{/* Navbar */}\n      <nav>Navbar Component</nav>\n\n      ` : ''}${content.length > 0 ? `{/* Content */}\n      <div className="container mx-auto px-4 py-12 space-y-8">\n        ${content.map(c => `<${c.name.replace(/\s+/g, '')} />`).join('\n        ')}\n      </div>` : ''}${footer.length > 0 ? `\n\n      {/* Footer */}\n      <footer>Footer Component</footer>` : ''}
    </div>
  );
}`;
          
          return code;
        },
      }),
      {
        name: 'telecop-builder-storage',
        partialize: (state) => ({
          droppedComponents: state.droppedComponents,
          history: state.history,
          historyIndex: state.historyIndex,
        }),
      }
    ),
    { name: 'Telecop Builder' }
  )
);