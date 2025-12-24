// app/(docs)/builder/ComponentRenderer.tsx
'use client';

import React from 'react';

interface DroppedComponent {
  id: string;
  type: string;
  name: string;
  zone: 'navbar' | 'content' | 'footer';
  props: any;
}

interface ComponentRendererProps {
  component: DroppedComponent;
}

export function ComponentRenderer({ component }: ComponentRendererProps) {
  
  // ========== BUTTONS ==========
  if (component.type === 'button') {
    
    if (component.name === 'Solid Blue') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Click Me
        </button>
      );
    }
    
    if (component.name === 'Solid Red') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Click Me
        </button>
      );
    }
    
    if (component.name === 'Solid Green') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Click Me
        </button>
      );
    }
    
    if (component.name === 'Solid Purple') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Click Me
        </button>
      );
    }
    
    if (component.name === 'Pill Button') {
      return (
        <button className="px-8 py-3 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Pill Button
        </button>
      );
    }
    
    if (component.name === 'Gradient Purple Pink') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
          Beautiful
        </button>
      );
    }
    
    if (component.name === 'Gradient Blue Green') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
          Amazing
        </button>
      );
    }
    
    if (component.name === 'Glass Blue') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          Glass Effect
        </button>
      );
    }
    
    if (component.name === 'Neon Blue') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105">
          Neon Blue
        </button>
      );
    }
    
    if (component.name === '3D Blue') {
      return (
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 shadow-[0_6px_0_rgb(37,99,235)] hover:shadow-[0_4px_0_rgb(37,99,235)] hover:translate-y-[2px] transition-all duration-150">
          3D Button
        </button>
      );
    }
  }
  
  // ========== CARDS ==========
  if (component.type === 'card') {
    
    if (component.name === 'Feature Card') {
      return (
        <div className="bg-blue-600 text-white rounded-2xl p-6 max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
          <p className="text-sm opacity-90">Lightning fast load times and optimized performance</p>
        </div>
      );
    }
    
    if (component.name === 'Product Card') {
      return (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-6xl">🎧</span>
          </div>
          <div className="p-5 space-y-3">
            <h3 className="text-xl font-bold text-white">Premium Headphones</h3>
            <p className="text-gray-400 text-sm">High-quality sound with noise cancellation</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">$99</span>
              <span className="text-sm text-gray-500 line-through">$149</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      );
    }
    
    if (component.name === 'Stat Card') {
      return (
        <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl">👥</div>
            <span className="text-sm font-semibold text-green-400">↑ +12%</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Users</p>
          <p className="text-3xl font-bold text-white">12,345</p>
        </div>
      );
    }
  }
  
  // ========== NAVBAR ==========
  if (component.type === 'navbar') {
    return (
      <nav className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white font-bold text-xl">Telecop</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">Home</button>
            <button className="text-gray-300 hover:text-white transition-colors">About</button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  // ========== FOOTER ==========
  if (component.type === 'footer') {
    return (
      <footer className="bg-gray-900/50 border-t border-gray-800 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white font-bold text-xl">Telecop</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Modern React UI component library for building beautiful interfaces.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors">Privacy</button>
            <button className="text-gray-400 hover:text-white transition-colors">Terms</button>
            <button className="text-gray-400 hover:text-white transition-colors">License</button>
          </div>
          <p className="text-gray-500 text-xs mt-6">© 2025 Telecop. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  // ========== CONTAINER ==========
  if (component.type === 'container') {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Container Layout</h2>
            <p className="text-gray-300 mb-6">
              Flexible container component with responsive grid layout. Perfect for showcasing content.
            </p>
            <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all">
              Learn More
            </button>
          </div>
          <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-6xl">📦</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Default fallback (للـ debugging)
  return (
    <div className="bg-yellow-600 text-white p-4 rounded-lg border-2 border-yellow-400">
      <p className="font-bold">⚠️ Unknown Component</p>
      <p className="text-sm mt-1">Type: {component.type}</p>
      <p className="text-sm">Name: {component.name}</p>
    </div>
  );
}