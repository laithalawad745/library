'use client';

import { useState } from 'react';
import { gradients } from 'telecop';

export default function ThemesPage() {
  const [selectedGradient, setSelectedGradient] = useState(gradients[0]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [filter, setFilter] = useState<'all' | 'static' | 'animated' | 'premium'>('all');

  const handleCopy = () => {
    const codeText = `import { Home } from 'telecop';

<Home
  name="Your Name"
  title="Your Title"
  description="Your amazing description"
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  backgroundGradient={\`${selectedGradient.gradient}\`}${selectedGradient.animation ? `
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
        <div className="w-full px-4 sm:px-6 py-4 pl-16 lg:pl-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Cards</h1>
          <p className="text-gray-400 mt-1 text-sm">Beautiful card components - No 'use client' needed</p>
        </div>
      </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto">
        {/* Mobile: Preview -> Themes -> Code */}
        {/* Desktop: (Preview + Code left column) | (Themes right column) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          
          {/* Live Preview - Order 1 on mobile, column 1 on desktop */}
          <div className="space-y-3 sm:space-y-4 w-full min-w-0 order-1 lg:col-start-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
              <h2 className="text-lg sm:text-xl font-bold text-white">Live Preview</h2>
              <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2 flex-wrap max-w-full">
                {selectedGradient.category === 'premium' && (
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-semibold">
                     PREMIUM
                  </span>
                )}
                <span className="truncate">{selectedGradient.name}</span>
              </div>
            </div>
            
            {/* Preview Container */}
            <div 
              className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full ${
                selectedGradient.animation ? `animate-gradient-${selectedGradient.animation}` : ''
              }`}
              style={{ 
                background: selectedGradient.gradient,
                maxWidth: '100%'
              }}
            >
              <div className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-6 lg:p-8 w-full">
                <div className="w-full text-center space-y-4 sm:space-y-6 lg:space-y-8 px-2">
                  {/* Name */}
                  <h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4"
                    style={{
                      textShadow: '0 0 40px rgba(0,0,0,0.3)',
                    }}
                  >
                    Your Name
                  </h1>

                  {/* Title */}
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90"
                    style={{
                      textShadow: '0 0 30px rgba(0,0,0,0.2)',
                    }}
                  >
                    Your Title
                  </h2>

                  {/* Description */}
                  <p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mx-auto"
                    style={{
                      textShadow: '0 0 20px rgba(0,0,0,0.2)',
                    }}
                  >
                    Your amazing description goes here
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center mt-6 sm:mt-8 lg:mt-12 w-full max-w-md mx-auto">
                    <button className="w-full sm:w-auto relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/30 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 cursor-pointer shadow-xl group px-4 sm:px-6 lg:px-7 py-2 sm:py-3 lg:py-3.5 text-xs sm:text-sm lg:text-base text-white hover:bg-white/15 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95">
                      <span className="relative z-10 drop-shadow-lg">Get Started</span>
                    </button>
                    <button className="w-full sm:w-auto relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/30 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 cursor-pointer shadow-xl group px-4 sm:px-6 lg:px-7 py-2 sm:py-3 lg:py-3.5 text-xs sm:text-sm lg:text-base text-white hover:bg-white/15 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95">
                      <span className="relative z-10 drop-shadow-lg">Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Grid - Order 2 on mobile (after preview), column 2 on desktop */}
          <div className="space-y-3 sm:space-y-4 w-full min-w-0 order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">Available Themes</h2>
             
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800 w-full">
              <button
                onClick={() => setFilter('all')}
                className={`
                  px-1.5 sm:px-2 lg:px-3 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs lg:text-sm font-medium transition-all truncate
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
                  px-1 sm:px-1.5 lg:px-2 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs lg:text-sm font-medium transition-all truncate
                  ${filter === 'premium' 
                    ? 'bg-yellow-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <span className="hidden sm:inline"> Premium</span>
                <span className="sm:hidden">Pro</span>
              </button>
              <button
                onClick={() => setFilter('static')}
                className={`
                  px-1.5 sm:px-2 lg:px-3 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs lg:text-sm font-medium transition-all truncate
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
                  px-1 sm:px-1.5 lg:px-3 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs lg:text-sm font-medium transition-all truncate
                  ${filter === 'animated' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <span className="hidden sm:inline">Animated</span>
                <span className="sm:hidden">Anim</span>
              </button>
            </div>
            
            {/* Fixed Height with Scroll */}
            <div className="h-[calc(100vh-20rem)] sm:h-[calc(100vh-18rem)] lg:h-[calc(100vh-16rem)] overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 w-full">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 w-full">
                {filteredGradients.map((grad) => (
                  <button
                    key={grad.id}
                    onClick={() => setSelectedGradient(grad)}
                    className={`
                      relative rounded-lg sm:rounded-xl overflow-hidden h-24 sm:h-28 lg:h-32 
                      transition-all duration-300 cursor-pointer
                      ${selectedGradient.id === grad.id 
                        ? 'ring-2 sm:ring-4 ring-blue-500 scale-105' 
                        : 'hover:scale-105 ring-1 sm:ring-2 ring-gray-700 hover:ring-gray-600'
                      }
                    `}
                    style={{ background: grad.gradient }}
                  >
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 lg:p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-[10px] sm:text-xs lg:text-sm font-semibold flex items-center gap-1 truncate">
                        {grad.category === 'premium' && ' '}
                        {grad.name}
                      </p>
                      <p className="text-gray-300 text-[8px] sm:text-[10px] lg:text-xs capitalize">
                        {grad.category}
                      </p>
                    </div>

                    {selectedGradient.id === grad.id && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Code Block - Order 3 on mobile (after themes), stays with preview column on desktop */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden w-full order-3 lg:order-2 lg:col-start-1">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-800">
              <span className="text-xs sm:text-sm text-gray-400 font-mono">Code</span>
              <button
                onClick={handleCopy}
                className="px-2 sm:px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex-shrink-0"
              >
                {copySuccess ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <div className="overflow-x-auto w-full">
            <pre className="p-3 sm:p-4">
              <code className="text-[10px] sm:text-xs lg:text-sm text-gray-300 block leading-relaxed break-all whitespace-pre-wrap">
{`import { Home } from 'telecop';

<Home
  name="Your Name"
  title="Your Title"
  description="Your amazing description"
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  backgroundGradient={\`${selectedGradient.gradient}\`}${selectedGradient.animation ? `
  animationType="${selectedGradient.animation}"` : ''}
/>`}
              </code>
            </pre>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Scrollbar Styles */
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

        /* Gradient Animations */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-wave {
          0%, 100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        @keyframes gradient-pulse {
          0%, 100% {
            background-size: 100% 100%;
            opacity: 1;
          }
          50% {
            background-size: 150% 150%;
            opacity: 0.8;
          }
        }

        @keyframes gradient-rotate {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-zoom {
          0%, 100% {
            background-size: 100% 100%;
          }
          50% {
            background-size: 200% 200%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200% !important;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-gradient-wave {
          background-size: 200% 200% !important;
          animation: gradient-wave 12s ease infinite;
        }

        .animate-gradient-pulse {
          background-position: center !important;
          animation: gradient-pulse 6s ease infinite;
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 10s linear infinite;
        }

        .animate-gradient-flow {
          background-size: 300% 300% !important;
          animation: gradient-flow 15s ease infinite;
        }

        .animate-gradient-zoom {
          background-position: center !important;
          animation: gradient-zoom 8s ease infinite;
        }
      `}} />
    </div>
  );
}