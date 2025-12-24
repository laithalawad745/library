// app/(docs)/builder/ComponentRenderer.tsx
'use client';

import React from 'react';

// 🎯 استيراد الأزرار من المكتبة Telecop
import {
  SolidBlue,
  SolidRed,
  SolidGreen,
  SolidPurple,
  SolidPill,
  GradientPurplePink,
  GradientBlueGreen,
  GlassBlue,
  NeonBlue,
  Button3DBlue,
} from 'telecop';

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
  
  // ========== BUTTONS (من المكتبة) ==========
  if (component.type === 'button') {
    
    if (component.name === 'Solid Blue') {
      return <SolidBlue>Click Me</SolidBlue>;
    }
    
    if (component.name === 'Solid Red') {
      return <SolidRed>Click Me</SolidRed>;
    }
    
    if (component.name === 'Solid Green') {
      return <SolidGreen>Click Me</SolidGreen>;
    }
    
    if (component.name === 'Solid Purple') {
      return <SolidPurple>Click Me</SolidPurple>;
    }
    
    if (component.name === 'Pill Button') {
      return <SolidPill>Pill Button</SolidPill>;
    }
    
    if (component.name === 'Gradient Purple Pink') {
      return <GradientPurplePink>Beautiful</GradientPurplePink>;
    }
    
    if (component.name === 'Gradient Blue Green') {
      return <GradientBlueGreen>Amazing</GradientBlueGreen>;
    }
    
    if (component.name === 'Glass Blue') {
      return <GlassBlue>Glass Effect</GlassBlue>;
    }
    
    if (component.name === 'Neon Blue') {
      return <NeonBlue>Neon Blue</NeonBlue>;
    }
    
    if (component.name === '3D Blue') {
      return <Button3DBlue>3D Button</Button3DBlue>;
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
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-4xl">
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
  
  // Default fallback
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700">
      <p className="font-semibold">{component.name}</p>
      <p className="text-sm text-gray-400 mt-1">{component.type}</p>
    </div>
  );
}