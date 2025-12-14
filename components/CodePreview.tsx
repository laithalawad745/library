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
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple & Powerful
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Import, use, and ship. No complex configuration needed.
          </p>
        </div>

        {/* Preview Container */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Code Block */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <button
                  onClick={handleCopy}
                  className="text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {copySuccess ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-gray-300 leading-relaxed">
                  {exampleCode}
                </code>
              </pre>
            </div>
          </div>

          {/* Live Preview */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-12 flex items-center justify-center min-h-[400px]">
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Live Preview</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <SolidBlue>Click Me</SolidBlue>
                  <GradientPurplePink>Beautiful</GradientPurplePink>
                  <NeonBlue >Neon Blue</NeonBlue >
                </div>
                <p className="text-gray-400 text-sm mt-8">
                  ↑ Try clicking the buttons above
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-2">Zero Config</h4>
            <p className="text-gray-400 text-sm">Install and start using immediately</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="text-white font-semibold mb-2">Fully Customizable</h4>
            <p className="text-gray-400 text-sm">Tailwind CSS for easy styling</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">📦</div>
            <h4 className="text-white font-semibold mb-2">Tree Shakeable</h4>
            <p className="text-gray-400 text-sm">Only import what you need</p>
          </div>
        </div>
      </div>
    </section>
  );
}