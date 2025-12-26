'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Motion Component Preview
function FadeInPreview() {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 rounded-2xl flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white animate-fade-in-up">
          Hello GSAP Motion!
        </h1>
        <p className="text-gray-300 animate-fade-in-up animation-delay-200">
          Smooth animations powered by GSAP
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors animate-fade-in-up animation-delay-400">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default function MotionPage() {
  const [copySuccess, setCopySuccess] = useState(false);

  const codeExample = `'use client';

import { FadeIn } from 'telecop/motion';
import { SolidBlue } from 'telecop';

export default function App() {
  return (
    <div className="p-8">
      <FadeIn duration={1} delay={0.2} y={50}>
        <h1>Hello GSAP Animation!</h1>
      </FadeIn>

      <FadeIn duration={0.8} delay={0.5}>
        <SolidBlue>Click Me</SolidBlue>
      </FadeIn>
    </div>
  );
}`;

  const installCode = `# Install telecop
npm install telecop

# Install GSAP (required for motion)
npm install gsap`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30">
        <div className="w-full px-4 sm:px-6 py-4 pl-16 lg:pl-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">GSAP Motion Components</h1>
          <p className="text-gray-400 mt-1 text-sm">Powerful animations with dynamic GSAP loading</p>
        </div>
      </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h3 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
               Installation
            </h3>
           <pre className="text-gray-300">{installCode}</pre>
          </div>

       

          {/* Live Preview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white"> Live Preview</h2>
            <FadeInPreview />
          </div>

          {/* Code Example */}
          <div className="bg-[#282c34] rounded-xl border border-gray-800 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#21252b]">
              <span className="text-xs text-gray-400 font-mono">App.tsx</span>
              <button
                onClick={handleCopy}
                className="text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                {copySuccess ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              customStyle={{
                margin: 0,
                padding: '1.25rem',
                background: '#282c34',
              }}
            >
              {codeExample}
            </SyntaxHighlighter>
          </div>

       

          {/* Coming Soon */}
          {/* <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Coming Soon</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'ScrollReveal',
                'CardFlip',
                'TextSplit',
                'HeroCinematic',
                'MagneticButton',
                'ParallaxImage'
              ].map((name) => (
                <div
                  key={name}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-center"
                >
                  <p className="text-white text-sm font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* CSS for demo animation */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}