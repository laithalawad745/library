'use client';

import { useState } from 'react';
import { ParallaxScroll } from 'telecop/motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type ExampleKey = 'hero' | 'cards' | 'allEffects';

export default function ParallaxDemo() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedExample, setSelectedExample] = useState<ExampleKey>('hero');

  const codeExamples: Record<ExampleKey, string> = {
    hero: `import { ParallaxScroll } from 'telecop/motion';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Background - Slowest */}
      <ParallaxScroll speed={0.3} direction="down" blur>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      </ParallaxScroll>

      {/* Middle Layer */}
      <ParallaxScroll speed={0.6} direction="up" scale>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-9xl opacity-10">🌊</div>
        </div>
      </ParallaxScroll>

      {/* Foreground - Fastest */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <ParallaxScroll speed={1.2} direction="up">
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white mb-4">
              Parallax Magic
            </h1>
            <p className="text-2xl text-gray-300">
              GSAP ScrollTrigger ✨
            </p>
          </div>
        </ParallaxScroll>
      </div>
    </div>
  );
}`,
    
    cards: `import { ParallaxScroll } from 'telecop/motion';

export default function Cards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-8 space-y-32">
        
        {/* Card 1 - Right + Rotate */}
        <ParallaxScroll speed={0.8} direction="right" rotate>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Right + Rotate</h2>
            <p className="text-xl opacity-90">Moves right and rotates as you scroll</p>
          </div>
        </ParallaxScroll>

        {/* Card 2 - Left + Scale */}
        <ParallaxScroll speed={1} direction="left" scale>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Left + Scale</h2>
            <p className="text-xl opacity-90">Moves left and scales up</p>
          </div>
        </ParallaxScroll>

        {/* Card 3 - Up + Blur + Fade */}
        <ParallaxScroll speed={1.5} direction="up" blur opacity>
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Up + Blur + Fade</h2>
            <p className="text-xl opacity-90">Blurs and fades as it moves up</p>
          </div>
        </ParallaxScroll>
      </div>
    </div>
  );
}`,
    
    allEffects: `import { ParallaxScroll } from 'telecop/motion';

export default function AllEffects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-20 flex items-center justify-center">
      <ParallaxScroll 
        speed={1.2} 
        direction="down" 
        scale 
        rotate 
        blur
        opacity
      >
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">All Effects Combined! 🔥</h2>
          <p className="text-xl opacity-90">
            Scale + Rotate + Blur + Movement + Fade
          </p>
        </div>
      </ParallaxScroll>
    </div>
  );
}`
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-xl">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">Parallax Scroll</h1>
              <p className="text-gray-400 mt-1 text-xs sm:text-sm">GSAP ScrollTrigger powered animations</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                Requires GSAP
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Code Viewer Section */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Code Examples</h2>
            <div className="text-xs text-gray-400">
              Select an example below
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto">
            {[
              { id: 'hero' as ExampleKey, label: 'Hero Section', icon: '🎬' },
              { id: 'cards' as ExampleKey, label: 'Animated Cards', icon: '🃏' },
              { id: 'allEffects' as ExampleKey, label: 'All Effects', icon: '🔥' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedExample(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                  ${selectedExample === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="bg-[#282c34] rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#21252b]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 font-mono">ParallaxExample.tsx</span>
              </div>
              <button
                onClick={() => handleCopy(codeExamples[selectedExample])}
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
                {codeExamples[selectedExample]}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Live Preview</h2>
            <p className="text-gray-400 text-sm">
              👇 Scroll down to see the parallax effects in action
            </p>
          </div>
        </div>
      </div>

      {/* ✅ FIXED: Hero Section - أضفنا محتوى للسكرول */}
      <div className="relative">
        {/* Hero with Parallax */}
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          
          {/* Background Layer */}
          <ParallaxScroll 
            speed={0.3} 
            direction="down" 
            blur
            className="absolute inset-0"
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
          </ParallaxScroll>

          {/* Middle Layer */}
          <ParallaxScroll 
            speed={0.6} 
            direction="up" 
            scale
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-9xl opacity-10">🌊</div>
          </ParallaxScroll>

          {/* Foreground */}
          <ParallaxScroll 
            speed={1.2} 
            direction="up"
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
              Parallax Scroll
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              GSAP ScrollTrigger Magic ✨
            </p>
            <p className="text-sm text-gray-500 mt-4">
              👇 Scroll down to see the effects
            </p>
          </ParallaxScroll>
        </div>

        {/* ✅ أضفنا Content Section بعد الـ Hero مباشرة */}
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-32">
            
            {/* Card 1 */}
            <ParallaxScroll speed={0.8} direction="right" rotate>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Right + Rotate</h2>
                <p className="text-lg sm:text-xl opacity-90">
                  This card moves right and rotates as you scroll
                </p>
              </div>
            </ParallaxScroll>

            {/* Card 2 */}
            <ParallaxScroll speed={1} direction="left" scale>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Left + Scale</h2>
                <p className="text-lg sm:text-xl opacity-90">
                  This card moves left and scales up
                </p>
              </div>
            </ParallaxScroll>

            {/* Card 3 */}
            <ParallaxScroll speed={1.5} direction="up" blur opacity>
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Up + Blur + Fade</h2>
                <p className="text-lg sm:text-xl opacity-90">
                  This card blurs and fades as it moves up
                </p>
              </div>
            </ParallaxScroll>

            {/* Card 4 */}
            <ParallaxScroll speed={1.2} direction="down" scale rotate blur>
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 sm:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Effects! 🔥</h2>
                <p className="text-lg sm:text-xl opacity-90">
                  Scale + Rotate + Blur + Movement
                </p>
              </div>
            </ParallaxScroll>

          </div>
        </div>
      </div>

      {/* Props Documentation */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Available Props</h2>
          <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-6 space-y-4">
            {[
              { prop: 'speed', type: 'number', default: '1', desc: '0.1 (slow) to 2 (fast)' },
              { prop: 'direction', type: "'up' | 'down' | 'left' | 'right'", default: "'up'", desc: 'Movement direction' },
              { prop: 'scale', type: 'boolean', default: 'false', desc: 'Enable scale effect' },
              { prop: 'rotate', type: 'boolean', default: 'false', desc: 'Enable rotation' },
              { prop: 'blur', type: 'boolean', default: 'false', desc: 'Enable blur effect' },
              { prop: 'opacity', type: 'boolean', default: 'false', desc: 'Enable fade effect' },
              { prop: 'scrub', type: 'boolean | number', default: 'true', desc: 'Smooth scrubbing' },
            ].map((prop, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-gray-800 last:border-0">
                <code className="text-blue-400 font-mono text-sm min-w-[120px]">{prop.prop}</code>
                <div className="flex-1">
                  <div className="text-gray-500 text-xs mb-1">{prop.type}</div>
                  <div className="text-gray-300 text-sm">{prop.desc}</div>
                  <div className="text-gray-600 text-xs mt-1">Default: {prop.default}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <p className="text-gray-500 text-xl sm:text-2xl">Scroll back up to see the magic again ↑</p>
        </div>
      </div>
    </div>
  );
}