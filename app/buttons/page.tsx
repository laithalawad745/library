'use client';

import { useState } from 'react';

// Button Types Interface
interface ButtonVariant {
  id: string;
  name: string;
  category: 'solid' | 'gradient' | 'glass' | 'animated' | 'outlined' | 'ghost';
  component: React.ComponentType;
  code: string;
}

// ==================== BUTTON COMPONENTS ====================

// SOLID BUTTONS
const SolidBlue = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    Click Me
  </button>
);

const SolidRed = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    Click Me
  </button>
);

const SolidGreen = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    Click Me
  </button>
);

const SolidPurple = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    Click Me
  </button>
);

const SolidPill = () => (
  <button className="px-8 py-3 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
    Pill Button
  </button>
);

// GRADIENT BUTTONS
const GradientPurplePink = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
    Click Me
  </button>
);

const GradientBlueGreen = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
    Click Me
  </button>
);

const GradientOrangeRed = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
    Click Me
  </button>
);

const GradientCyan = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
    Click Me
  </button>
);

const GradientSunset = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:via-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
    Click Me
  </button>
);

// GLASS BUTTONS
const GlassBlue = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
    Click Me
  </button>
);

const GlassPurple = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-500/20 backdrop-blur-xl border border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
    Click Me
  </button>
);

const GlassWhite = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
    Click Me
  </button>
);

const GlassPink = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-pink-500/20 backdrop-blur-xl border border-pink-400/30 hover:bg-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
    Click Me
  </button>
);

// ANIMATED BUTTONS
const AnimatedShimmer = () => (
  <button className="relative px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden group transition-all duration-300 hover:scale-105">
    <span className="relative z-10">Shimmer Effect</span>
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
  </button>
);

const AnimatedPulse = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105">
    Pulse Button
  </button>
);

const AnimatedBounce = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:animate-bounce">
    Bounce Button
  </button>
);

const AnimatedGlow = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105">
    Glow Effect
  </button>
);

// OUTLINED BUTTONS
const OutlinedBlue = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
    Click Me
  </button>
);

const OutlinedPurple = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105">
    Click Me
  </button>
);

const OutlinedGradient = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-transparent bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:bg-clip-border transition-all duration-300 hover:scale-105" style={{borderImage: 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153)) 1'}}>
    Gradient Border
  </button>
);

// GHOST BUTTONS
const GhostBlue = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
    Click Me
  </button>
);

const GhostRed = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-105">
    Click Me
  </button>
);

const GhostPurple = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
    Click Me
  </button>
);

// 3D EFFECT BUTTONS
const Button3DBlue = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 shadow-[0_6px_0_rgb(37,99,235)] hover:shadow-[0_4px_0_rgb(37,99,235)] hover:translate-y-[2px] transition-all duration-150">
    3D Button
  </button>
);

const Button3DPink = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-pink-600 shadow-[0_6px_0_rgb(219,39,119)] hover:shadow-[0_4px_0_rgb(219,39,119)] hover:translate-y-[2px] transition-all duration-150">
    3D Button
  </button>
);

const Button3DGreen = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 shadow-[0_6px_0_rgb(22,163,74)] hover:shadow-[0_4px_0_rgb(22,163,74)] hover:translate-y-[2px] transition-all duration-150">
    3D Button
  </button>
);

// NEON BUTTONS
const NeonBlue = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105">
    Neon Blue
  </button>
);

const NeonPink = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-pink-400 border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:scale-105">
    Neon Pink
  </button>
);

const NeonGreen = () => (
  <button className="px-6 py-3 rounded-lg font-semibold text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:scale-105">
    Neon Green
  </button>
);

// ==================== BUTTONS DATA ====================
const buttons: ButtonVariant[] = [
  // SOLID
  { id: 'solid-blue', name: 'Solid Blue', category: 'solid', component: SolidBlue, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">Click Me</button>' },
  { id: 'solid-red', name: 'Solid Red', category: 'solid', component: SolidRed, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">Click Me</button>' },
  { id: 'solid-green', name: 'Solid Green', category: 'solid', component: SolidGreen, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">Click Me</button>' },
  { id: 'solid-purple', name: 'Solid Purple', category: 'solid', component: SolidPurple, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">Click Me</button>' },
  { id: 'solid-pill', name: 'Pill Button', category: 'solid', component: SolidPill, code: '<button className="px-8 py-3 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">Pill Button</button>' },
  
  // GRADIENT
  { id: 'gradient-purple-pink', name: 'Purple Pink', category: 'gradient', component: GradientPurplePink, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">Click Me</button>' },
  { id: 'gradient-blue-green', name: 'Blue Green', category: 'gradient', component: GradientBlueGreen, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">Click Me</button>' },
  { id: 'gradient-orange-red', name: 'Orange Red', category: 'gradient', component: GradientOrangeRed, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">Click Me</button>' },
  { id: 'gradient-cyan', name: 'Cyan Blue', category: 'gradient', component: GradientCyan, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">Click Me</button>' },
  { id: 'gradient-sunset', name: 'Sunset', category: 'gradient', component: GradientSunset, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:via-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">Click Me</button>' },
  
  // GLASS
  { id: 'glass-blue', name: 'Glass Blue', category: 'glass', component: GlassBlue, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">Click Me</button>' },
  { id: 'glass-purple', name: 'Glass Purple', category: 'glass', component: GlassPurple, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-500/20 backdrop-blur-xl border border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">Click Me</button>' },
  { id: 'glass-white', name: 'Glass White', category: 'glass', component: GlassWhite, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">Click Me</button>' },
  { id: 'glass-pink', name: 'Glass Pink', category: 'glass', component: GlassPink, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-pink-500/20 backdrop-blur-xl border border-pink-400/30 hover:bg-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">Click Me</button>' },
  
  // ANIMATED
  { id: 'animated-shimmer', name: 'Shimmer', category: 'animated', component: AnimatedShimmer, code: '<button className="relative px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden group transition-all duration-300 hover:scale-105"><span className="relative z-10">Shimmer Effect</span><span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span></button>' },
  { id: 'animated-pulse', name: 'Pulse', category: 'animated', component: AnimatedPulse, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105">Pulse Button</button>' },
  { id: 'animated-bounce', name: 'Bounce', category: 'animated', component: AnimatedBounce, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:animate-bounce">Bounce Button</button>' },
  { id: 'animated-glow', name: 'Glow', category: 'animated', component: AnimatedGlow, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105">Glow Effect</button>' },
  
  // OUTLINED
  { id: 'outlined-blue', name: 'Outlined Blue', category: 'outlined', component: OutlinedBlue, code: '<button className="px-6 py-3 rounded-lg font-semibold text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">Click Me</button>' },
  { id: 'outlined-purple', name: 'Outlined Purple', category: 'outlined', component: OutlinedPurple, code: '<button className="px-6 py-3 rounded-lg font-semibold text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105">Click Me</button>' },
  { id: 'outlined-gradient', name: 'Gradient Border', category: 'outlined', component: OutlinedGradient, code: '<button className="px-6 py-3 rounded-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 border-2 hover:text-white transition-all duration-300 hover:scale-105">Gradient Border</button>' },
  
  // GHOST
  { id: 'ghost-blue', name: 'Ghost Blue', category: 'ghost', component: GhostBlue, code: '<button className="px-6 py-3 rounded-lg font-semibold text-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">Click Me</button>' },
  { id: 'ghost-red', name: 'Ghost Red', category: 'ghost', component: GhostRed, code: '<button className="px-6 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-105">Click Me</button>' },
  { id: 'ghost-purple', name: 'Ghost Purple', category: 'ghost', component: GhostPurple, code: '<button className="px-6 py-3 rounded-lg font-semibold text-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">Click Me</button>' },
  
  // 3D BUTTONS
  { id: '3d-blue', name: '3D Blue', category: 'solid', component: Button3DBlue, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 shadow-[0_6px_0_rgb(37,99,235)] hover:shadow-[0_4px_0_rgb(37,99,235)] hover:translate-y-[2px] transition-all duration-150">3D Button</button>' },
  { id: '3d-pink', name: '3D Pink', category: 'solid', component: Button3DPink, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-pink-600 shadow-[0_6px_0_rgb(219,39,119)] hover:shadow-[0_4px_0_rgb(219,39,119)] hover:translate-y-[2px] transition-all duration-150">3D Button</button>' },
  { id: '3d-green', name: '3D Green', category: 'solid', component: Button3DGreen, code: '<button className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 shadow-[0_6px_0_rgb(22,163,74)] hover:shadow-[0_4px_0_rgb(22,163,74)] hover:translate-y-[2px] transition-all duration-150">3D Button</button>' },
  
  // NEON BUTTONS
  { id: 'neon-blue', name: 'Neon Blue', category: 'animated', component: NeonBlue, code: '<button className="px-6 py-3 rounded-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105">Neon Blue</button>' },
  { id: 'neon-pink', name: 'Neon Pink', category: 'animated', component: NeonPink, code: '<button className="px-6 py-3 rounded-lg font-semibold text-pink-400 border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:scale-105">Neon Pink</button>' },
  { id: 'neon-green', name: 'Neon Green', category: 'animated', component: NeonGreen, code: '<button className="px-6 py-3 rounded-lg font-semibold text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:scale-105">Neon Green</button>' },
];

// ==================== PAGE COMPONENT ====================
export default function ButtonsPage() {
  const [selectedButton, setSelectedButton] = useState(buttons[0]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [filter, setFilter] = useState<'all' | 'solid' | 'gradient' | 'glass' | 'animated' | 'outlined' | 'ghost'>('all');

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedButton.code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const filteredButtons = buttons.filter((btn) => {
    if (filter === 'all') return true;
    return btn.category === filter;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Telecop Buttons</h1>
          <p className="text-gray-400 mt-1">Choose your perfect button style</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Live Preview - Sticky */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Live Preview</h2>
              <div className="text-sm text-gray-400 capitalize">
                {selectedButton.name}
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-20 flex items-center justify-center min-h-[300px]">
              <selectedButton.component />
            </div>

            {/* Code Block */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-sm text-gray-400 font-mono">Code</span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  {copySuccess ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-gray-300 break-all whitespace-pre-wrap">
                  {selectedButton.code}
                </code>
              </pre>
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Available Buttons</h2>
              <span className="text-sm text-gray-500">
                {filteredButtons.length} buttons
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
              {(['all', 'solid', 'gradient', 'glass', 'animated', 'outlined', 'ghost'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`
                    px-2 py-2 rounded-md text-xs font-medium transition-all capitalize
                    ${filter === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
            
     {/* Scrollable Buttons Grid */}
            <div className="h-[calc(100vh-16rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <div className="grid grid-cols-2 gap-4">
                {filteredButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setSelectedButton(btn)}
                    className={`
                      relative rounded-xl overflow-hidden p-8
                      bg-gradient-to-br from-gray-900 to-gray-800
                      transition-all duration-300 cursor-pointer
                      border-2
                      ${selectedButton.id === btn.id
                        ? 'border-blue-500 scale-105 shadow-xl shadow-blue-500/20'
                        : 'border-gray-700 hover:border-gray-600 hover:scale-102'
                      }
                    `}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <btn.component />
                      <p className="text-white text-sm font-semibold mt-2">
                        {btn.name}
                      </p>
                      <p className="text-gray-400 text-xs capitalize">
                        {btn.category}
                      </p>
                    </div>

                    {selectedButton.id === btn.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #111827;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>
    </div>
  );
}