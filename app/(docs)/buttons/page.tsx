'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Button Types Interface
interface ButtonVariant {
  id: string;
  name: string;
  category: 'solid' | 'gradient' | 'glass' | 'animated' | 'outlined' | 'ghost';
  component: React.ComponentType;
  importName: string;
  code: string;
}

// ==================== BUTTON COMPONENTS ====================
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
  <button className="px-6 py-3 rounded-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-transparent hover:text-white transition-all duration-300 hover:scale-105" style={{borderImage: 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153)) 1'}}>
    Gradient Border
  </button>
);

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
  { id: 'solid-blue', name: 'Solid Blue', category: 'solid', component: SolidBlue, importName: 'SolidBlue', code: `import { SolidBlue } from 'telecop';\n\n<SolidBlue>Click Me</SolidBlue>` },
  { id: 'solid-red', name: 'Solid Red', category: 'solid', component: SolidRed, importName: 'SolidRed', code: `import { SolidRed } from 'telecop';\n\n<SolidRed>Click Me</SolidRed>` },
  { id: 'solid-green', name: 'Solid Green', category: 'solid', component: SolidGreen, importName: 'SolidGreen', code: `import { SolidGreen } from 'telecop';\n\n<SolidGreen>Click Me</SolidGreen>` },
  { id: 'solid-purple', name: 'Solid Purple', category: 'solid', component: SolidPurple, importName: 'SolidPurple', code: `import { SolidPurple } from 'telecop';\n\n<SolidPurple>Click Me</SolidPurple>` },
  { id: 'solid-pill', name: 'Pill Button', category: 'solid', component: SolidPill, importName: 'SolidPill', code: `import { SolidPill } from 'telecop';\n\n<SolidPill>Pill Button</SolidPill>` },
  { id: 'gradient-purple-pink', name: 'Purple Pink', category: 'gradient', component: GradientPurplePink, importName: 'GradientPurplePink', code: `import { GradientPurplePink } from 'telecop';\n\n<GradientPurplePink>Click Me</GradientPurplePink>` },
  { id: 'gradient-blue-green', name: 'Blue Green', category: 'gradient', component: GradientBlueGreen, importName: 'GradientBlueGreen', code: `import { GradientBlueGreen } from 'telecop';\n\n<GradientBlueGreen>Click Me</GradientBlueGreen>` },
  { id: 'gradient-orange-red', name: 'Orange Red', category: 'gradient', component: GradientOrangeRed, importName: 'GradientOrangeRed', code: `import { GradientOrangeRed } from 'telecop';\n\n<GradientOrangeRed>Click Me</GradientOrangeRed>` },
  { id: 'gradient-cyan', name: 'Cyan Blue', category: 'gradient', component: GradientCyan, importName: 'GradientCyan', code: `import { GradientCyan } from 'telecop';\n\n<GradientCyan>Click Me</GradientCyan>` },
  { id: 'gradient-sunset', name: 'Sunset', category: 'gradient', component: GradientSunset, importName: 'GradientSunset', code: `import { GradientSunset } from 'telecop';\n\n<GradientSunset>Click Me</GradientSunset>` },
  { id: 'glass-blue', name: 'Glass Blue', category: 'glass', component: GlassBlue, importName: 'GlassBlue', code: `import { GlassBlue } from 'telecop';\n\n<GlassBlue>Click Me</GlassBlue>` },
  { id: 'glass-purple', name: 'Glass Purple', category: 'glass', component: GlassPurple, importName: 'GlassPurple', code: `import { GlassPurple } from 'telecop';\n\n<GlassPurple>Click Me</GlassPurple>` },
  { id: 'glass-white', name: 'Glass White', category: 'glass', component: GlassWhite, importName: 'GlassWhite', code: `import { GlassWhite } from 'telecop';\n\n<GlassWhite>Click Me</GlassWhite>` },
  { id: 'glass-pink', name: 'Glass Pink', category: 'glass', component: GlassPink, importName: 'GlassPink', code: `import { GlassPink } from 'telecop';\n\n<GlassPink>Click Me</GlassPink>` },
  { id: 'animated-shimmer', name: 'Shimmer', category: 'animated', component: AnimatedShimmer, importName: 'AnimatedShimmer', code: `import { AnimatedShimmer } from 'telecop';\n\n<AnimatedShimmer>Shimmer Effect</AnimatedShimmer>` },
  { id: 'animated-pulse', name: 'Pulse', category: 'animated', component: AnimatedPulse, importName: 'AnimatedPulse', code: `import { AnimatedPulse } from 'telecop';\n\n<AnimatedPulse>Pulse Button</AnimatedPulse>` },
  { id: 'animated-bounce', name: 'Bounce', category: 'animated', component: AnimatedBounce, importName: 'AnimatedBounce', code: `import { AnimatedBounce } from 'telecop';\n\n<AnimatedBounce>Bounce Button</AnimatedBounce>` },
  { id: 'animated-glow', name: 'Glow', category: 'animated', component: AnimatedGlow, importName: 'AnimatedGlow', code: `import { AnimatedGlow } from 'telecop';\n\n<AnimatedGlow>Glow Effect</AnimatedGlow>` },
  { id: 'outlined-blue', name: 'Outlined Blue', category: 'outlined', component: OutlinedBlue, importName: 'OutlinedBlue', code: `import { OutlinedBlue } from 'telecop';\n\n<OutlinedBlue>Click Me</OutlinedBlue>` },
  { id: 'outlined-purple', name: 'Outlined Purple', category: 'outlined', component: OutlinedPurple, importName: 'OutlinedPurple', code: `import { OutlinedPurple } from 'telecop';\n\n<OutlinedPurple>Click Me</OutlinedPurple>` },
  { id: 'outlined-gradient', name: 'Gradient Border', category: 'outlined', component: OutlinedGradient, importName: 'OutlinedGradient', code: `import { OutlinedGradient } from 'telecop';\n\n<OutlinedGradient>Gradient Border</OutlinedGradient>` },
  { id: 'ghost-blue', name: 'Ghost Blue', category: 'ghost', component: GhostBlue, importName: 'GhostBlue', code: `import { GhostBlue } from 'telecop';\n\n<GhostBlue>Click Me</GhostBlue>` },
  { id: 'ghost-red', name: 'Ghost Red', category: 'ghost', component: GhostRed, importName: 'GhostRed', code: `import { GhostRed } from 'telecop';\n\n<GhostRed>Click Me</GhostRed>` },
  { id: 'ghost-purple', name: 'Ghost Purple', category: 'ghost', component: GhostPurple, importName: 'GhostPurple', code: `import { GhostPurple } from 'telecop';\n\n<GhostPurple>Click Me</GhostPurple>` },
  { id: '3d-blue', name: '3D Blue', category: 'solid', component: Button3DBlue, importName: 'Button3DBlue', code: `import { Button3DBlue } from 'telecop';\n\n<Button3DBlue>3D Button</Button3DBlue>` },
  { id: '3d-pink', name: '3D Pink', category: 'solid', component: Button3DPink, importName: 'Button3DPink', code: `import { Button3DPink } from 'telecop';\n\n<Button3DPink>3D Button</Button3DPink>` },
  { id: '3d-green', name: '3D Green', category: 'solid', component: Button3DGreen, importName: 'Button3DGreen', code: `import { Button3DGreen } from 'telecop';\n\n<Button3DGreen>3D Button</Button3DGreen>` },
  { id: 'neon-blue', name: 'Neon Blue', category: 'animated', component: NeonBlue, importName: 'NeonBlue', code: `import { NeonBlue } from 'telecop';\n\n<NeonBlue>Neon Blue</NeonBlue>` },
  { id: 'neon-pink', name: 'Neon Pink', category: 'animated', component: NeonPink, importName: 'NeonPink', code: `import { NeonPink } from 'telecop';\n\n<NeonPink>Neon Pink</NeonPink>` },
  { id: 'neon-green', name: 'Neon Green', category: 'animated', component: NeonGreen, importName: 'NeonGreen', code: `import { NeonGreen } from 'telecop';\n\n<NeonGreen>Neon Green</NeonGreen>` },
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
    <div className="bg-gray-950 w-full overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30 w-full">
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-16 lg:pl-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Buttons</h1>
          <p className="text-gray-400 mt-1 text-sm">Choose your perfect button style</p>
        </div>
      </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          
          {/* Live Preview - Sticky */}
          <div className="space-y-3 sm:space-y-4 lg:sticky lg:top-28 lg:self-start w-full min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">Live Preview</h2>
              <div className="text-xs sm:text-sm text-gray-400 capitalize truncate">
                {selectedButton.name}
              </div>
            </div>
            
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 sm:p-16 lg:p-20 flex items-center justify-center min-h-[250px] sm:min-h-[300px] w-full">
              <selectedButton.component />
            </div>

            {/* Code Block with Syntax Highlighting */}
            <div className="bg-[#282c34] rounded-xl border border-gray-800 overflow-hidden shadow-2xl w-full">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#21252b]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">MyComponent.tsx</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  {copySuccess ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem',
                    background: '#282c34',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: '"Fira Code", "Cascadia Code", Consolas, Monaco, "Courier New", monospace',
                    }
                  }}
                >
                  {selectedButton.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="space-y-3 sm:space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">Available Buttons</h2>
              <span className="text-xs sm:text-sm text-gray-500">
                {filteredButtons.length} buttons
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800 w-full">
              {(['all', 'solid', 'gradient', 'glass', 'animated', 'outlined', 'ghost'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`
                    px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-medium transition-all capitalize truncate
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
            <div className="h-[calc(100vh-20rem)] sm:h-[calc(100vh-18rem)] lg:h-[calc(100vh-16rem)] overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                {filteredButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setSelectedButton(btn)}
                    className={`
                      relative rounded-xl overflow-hidden p-6 sm:p-8
                      bg-gradient-to-br from-gray-900 to-gray-800
                      transition-all duration-300 cursor-pointer
                      border-2 w-full
                      ${selectedButton.id === btn.id
                        ? 'border-blue-500 shadow-xl shadow-blue-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                      }
                    `}
                  >
                    <div className="flex flex-col items-center gap-3 w-full">
                      <div className="scale-90 sm:scale-100">
                        <btn.component />
                      </div>
                      <p className="text-white text-xs sm:text-sm font-semibold mt-2 truncate w-full text-center">
                        {btn.name}
                      </p>
                      <p className="text-gray-400 text-[10px] sm:text-xs capitalize">
                        {btn.category}
                      </p>
                    </div>

                    {selectedButton.id === btn.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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