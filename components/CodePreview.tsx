'use client';

import { useState } from 'react';
import { SolidBlue, GradientPurplePink, NeonBlue  } from 'telecop';

export default function CodePreview() {
  const [copySuccess, setCopySuccess] = useState(false);

  const exampleCode = `import { SolidBlue, GradientPurplePink } from 'telecop';

export default function MyComponent() {
  return (
    <div>
      <SolidBlue>Click Me</SolidBlue>
      <GradientPurplePink>Beautiful</GradientPurplePink>
    </div>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Simple & Powerful
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Import, use, and ship. No complex configuration needed.
          </p>
        </div>

        {/* Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          
          {/* Live Preview - First on Mobile */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 p-6 sm:p-8 lg:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
              <div className="space-y-4 sm:space-y-6 text-center w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Live Preview</h3>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center">
                  <SolidBlue>Click Me</SolidBlue>
                  <GradientPurplePink>Beautiful</GradientPurplePink>
                  <NeonBlue>Neon Blue</NeonBlue>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6 lg:mt-8">
                  ↑ Try clicking the buttons above
                </p>
              </div>
            </div>
          </div>

          {/* Code Block - Second on Mobile */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-950 rounded-xl sm:rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-gray-900/50">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <button
                  onClick={handleCopy}
                  className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md sm:rounded-lg transition-colors"
                >
                  {copySuccess ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre className="p-4 sm:p-6">
                  <code className="text-xs sm:text-sm text-gray-300 leading-relaxed block">
                    {exampleCode}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
          <div className="text-center bg-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-800/50">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Zero Config</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Install and start using immediately</p>
          </div>
          <div className="text-center bg-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-800/50">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎨</div>
            <h4 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Fully Customizable</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Tailwind CSS for easy styling</p>
          </div>
          <div className="text-center bg-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-800/50">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📦</div>
            <h4 className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Tree Shakeable</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Only import what you need</p>
          </div>
        </div>
      </div>
    </section>
  );
}