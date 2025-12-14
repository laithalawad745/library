'use client';

import { useState } from 'react';
import { Home } from 'telecop';
import 'telecop/style.css';
import { gradients } from '@/data/gradients';

export default function ThemesPage() {
  const [selectedGradient, setSelectedGradient] = useState(gradients[0]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [filter, setFilter] = useState<'all' | 'static' | 'animated' | 'premium'>('all');

  const handleCopy = () => {
    const codeText = `<Home
  name="Your Name"
  title="Your Title"
  backgroundGradient="${selectedGradient.gradient}"${selectedGradient.animation ? `
  animationType="${selectedGradient.animation}"` : ''}
/>`;
    navigator.clipboard.writeText(codeText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Filter gradients
  const filteredGradients = gradients.filter((grad) => {
    if (filter === 'all') return true;
    if (filter === 'static') return grad.category !== 'animated' && grad.category !== 'premium';
    if (filter === 'animated') return grad.category === 'animated';
    if (filter === 'premium') return grad.category === 'premium';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 pl-16 lg:pl-6">
          <h1 className="text-2xl font-bold text-white">Telecop Themes</h1>
          <p className="text-gray-400 mt-1">Choose your perfect gradient</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Live Preview - Sticky on Desktop */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Live Preview</h2>
              <div className="text-sm text-gray-400 flex items-center gap-2">
                {selectedGradient.category === 'premium' && (
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-semibold">
                    ✨ PREMIUM
                  </span>
                )}
                {selectedGradient.name}
              </div>
            </div>
            
            <div 
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                selectedGradient.animation ? `animated-${selectedGradient.animation}` : ''
              }`}
            >
              <Home
                key={selectedGradient.id}
                name="Your Name"
                title="Your Title"
                description="Your amazing description goes here"
                primaryButtonText="Get Started"
                primaryButtonLink="#"
                secondaryButtonText="Learn More"
                secondaryButtonLink="#"
                backgroundGradient={selectedGradient.gradient}
                animationType={selectedGradient.animation}
              />
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
                <code className="text-sm text-gray-300">
{`<Home
  name="Laith Alawad"
  title="Full Stack Developer"
  description="Building beautiful and modern web applications"
  primaryButtonText="View Projects"
  primaryButtonLink="/projects"
  secondaryButtonText="Contact Me"
  secondaryButtonLink="/contact"
  backgroundGradient="${selectedGradient.gradient}"${selectedGradient.animation ? `
  animationType="${selectedGradient.animation}"` : ''}
/>`}
                </code>
              </pre>
            </div>
          </div>

          {/* Theme Grid - Scrollable Container */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Available Themes</h2>
              <span className="text-sm text-gray-500">
                {filteredGradients.length} themes
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-4 gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
              <button
                onClick={() => setFilter('all')}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-all
                  ${filter === 'all' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                All 
              </button>
              <button
                onClick={() => setFilter('premium')}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-all
                  ${filter === 'premium' 
                    ? 'bg-yellow-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                ✨ Premium
              </button>
              <button
                onClick={() => setFilter('static')}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-all
                  ${filter === 'static' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                Static 
              </button>
              <button
                onClick={() => setFilter('animated')}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-all
                  ${filter === 'animated' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                Animated
              </button>
            </div>
            
            {/* Fixed Height with Scroll */}
            <div className="h-[calc(100vh-16rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <div className="grid grid-cols-2 gap-4">
                {filteredGradients.map((grad) => (
                  <button
                    key={grad.id}
                    onClick={() => setSelectedGradient(grad)}
                    className={`
                      relative rounded-xl overflow-hidden h-32 
                      transition-all duration-300 cursor-pointer
                      ${selectedGradient.id === grad.id 
                        ? 'ring-4 ring-blue-500 scale-105' 
                        : 'hover:scale-105 ring-2 ring-gray-700 hover:ring-gray-600'
                      }
                    `}
                    style={{ background: grad.gradient }}
                  >
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-semibold flex items-center gap-2">
                        {grad.category === 'premium' && '✨ '}
                        {grad.name}
                      </p>
                      <p className="text-gray-300 text-xs capitalize">
                        {grad.category}
                      </p>
                    </div>

                    {selectedGradient.id === grad.id && (
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

