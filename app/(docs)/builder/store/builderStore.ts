// app/(docs)/builder/store/builderStore.ts
import { create } from 'zustand';

interface DroppedComponent {
  id: string;
  type: string;
  name: string;
  zone: 'navbar' | 'content' | 'footer';
  props: any;
}

interface BuilderState {
  // State
  droppedComponents: DroppedComponent[];
  selectedComponentId: string | null;
  activeId: string | null;
  
  // Actions
  addComponent: (component: DroppedComponent) => void;
  removeComponent: (id: string) => void;
  updateComponent: (id: string, updates: Partial<DroppedComponent>) => void;
  reorderComponents: (oldIndex: number, newIndex: number) => void;
  selectComponent: (id: string | null) => void;
  setActiveId: (id: string | null) => void;
  clearAll: () => void;
  
  // Future: Undo/Redo
  history: DroppedComponent[][];
  historyIndex: number;
  undo: () => void;
  redo: () => void;
  
  // Future: Save/Load
  saveProject: () => string; // يرجع JSON
  loadProject: (json: string) => void;
}

export const useBuilderStore = create<BuilderState>((set, get) => ({
  // ========== Initial State ==========
  droppedComponents: [],
  selectedComponentId: null,
  activeId: null,
  history: [[]],
  historyIndex: 0,
  
  // ========== Actions ==========
  
  // إضافة component
  addComponent: (component) => {
    set((state) => {
      const newComponents = [...state.droppedComponents, component];
      
      // حفظ في الـ history للـ undo/redo
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
  
  // تحديث component (للـ Properties Panel لاحقاً)
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
  
  // إعادة ترتيب (للـ Sortable)
  reorderComponents: (oldIndex, newIndex) => {
    set((state) => {
      const newComponents = [...state.droppedComponents];
      const [movedItem] = newComponents.splice(oldIndex, 1);
      newComponents.splice(newIndex, 0, movedItem);
      
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
  
  // ========== Undo/Redo ==========
  
  undo: () => {
    set((state) => {
      if (state.historyIndex > 0) {
        const newIndex = state.historyIndex - 1;
        return {
          droppedComponents: state.history[newIndex],
          historyIndex: newIndex,
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
        };
      }
      return state;
    });
  },
  
  // ========== Save/Load Project ==========
  
  saveProject: () => {
    const state = get();
    return JSON.stringify({
      components: state.droppedComponents,
      version: '1.0',
      timestamp: new Date().toISOString(),
    });
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
}));