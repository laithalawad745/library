'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  ScrollReveal,
  ZoomIn,
  RotateIn
} from 'telecop';
// ==================== ANIMATION VARIANTS DATA ====================
interface AnimationVariant {
  id: string;
  name: string;
  category: 'scroll' | 'hover' | 'loading';
  code: string;
  description: string;
  component: React.ComponentType;
}

// ==================== PREVIEW COMPONENTS ====================
const ScrollRevealUpPreview = () => (
  <ScrollReveal direction="up">
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 max-w-sm">
      <div className="text-4xl mb-4">🚀</div>
      <h3 className="text-2xl font-bold mb-2">Fade Up</h3>
      <p className="text-sm opacity-90">Smooth animation from bottom to top</p>
    </div>
  </ScrollReveal>
);

const ScrollRevealDownPreview = () => (
  <ScrollReveal direction="down">
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl p-8 max-w-sm">
      <div className="text-4xl mb-4">⬇️</div>
      <h3 className="text-2xl font-bold mb-2">Fade Down</h3>
      <p className="text-sm opacity-90">Smooth animation from top to bottom</p>
    </div>
  </ScrollReveal>
);

const ScrollRevealLeftPreview = () => (
  <ScrollReveal direction="left">
    <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 max-w-sm">
      <div className="text-4xl mb-4">⬅️</div>
      <h3 className="text-2xl font-bold mb-2">Fade Left</h3>
      <p className="text-sm opacity-90">Smooth animation from right to left</p>
    </div>
  </ScrollReveal>
);

const ScrollRevealRightPreview = () => (
  <ScrollReveal direction="right">
    <div className="bg-gradient-to-br from-pink-600 to-pink-800 text-white rounded-2xl p-8 max-w-sm">
      <div className="text-4xl mb-4">➡️</div>
      <h3 className="text-2xl font-bold mb-2">Fade Right</h3>
      <p className="text-sm opacity-90">Smooth animation from left to right</p>
    </div>
  </ScrollReveal>
);

const ZoomInPreview = () => (
  <ZoomIn>
    <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 max-w-sm">
      <div className="text-4xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold mb-2">Zoom In</h3>
      <p className="text-sm opacity-90">Scale animation from small to normal</p>
    </div>
  </ZoomIn>
);

const RotateInPreview = () => (
  <RotateIn>
    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 max-w-sm">
      <div className="text-4xl mb-4">🔄</div>
      <h3 className="text-2xl font-bold mb-2">Rotate In</h3>
      <p className="text-sm opacity-90">Rotation with scale animation</p>
    </div>
  </RotateIn>
);

// ==================== ANIMATIONS DATA ====================
const animations: AnimationVariant[] = [
  {
    id: 'scroll-reveal-up',
    name: 'Scroll Reveal Up',
    category: 'scroll',
    description: 'Fade in from bottom with scroll trigger',
    component: ScrollRevealUpPreview,
    code: `import { ScrollReveal } from 'telecop';

export default function Page() {
  return (
    <ScrollReveal direction="up">
      <div>Your Content</div>
    </ScrollReveal>
  );
}`
  },
  {
    id: 'scroll-reveal-down',
    name: 'Scroll Reveal Down',
    category: 'scroll',
    description: 'Fade in from top with scroll trigger',
    component: ScrollRevealDownPreview,
    code: `import { ScrollReveal } from 'telecop';

export default function Page() {
  return (
    <ScrollReveal direction="down">
      <div>Your Content</div>
    </ScrollReveal>
  );
}`
  },
  {
    id: 'scroll-reveal-left',
    name: 'Scroll Reveal Left',
    category: 'scroll',
    description: 'Fade in from right with scroll trigger',
    component: ScrollRevealLeftPreview,
    code: `import { ScrollReveal } from 'telecop';

export default function Page() {
  return (
    <ScrollReveal direction="left">
      <div>Your Content</div>
    </ScrollReveal>
  );
}`
  },
  {
    id: 'scroll-reveal-right',
    name: 'Scroll Reveal Right',
    category: 'scroll',
    description: 'Fade in from left with scroll trigger',
    component: ScrollRevealRightPreview,
    code: `import { ScrollReveal } from 'telecop';

export default function Page() {
  return (
    <ScrollReveal direction="right">
      <div>Your Content</div>
    </ScrollReveal>
  );
}`
  },
  {
    id: 'zoom-in',
    name: 'Zoom In',
    category: 'scroll',
    description: 'Scale up animation with scroll trigger',
    component: ZoomInPreview,
    code: `import { ZoomIn } from 'telecop';

export default function Page() {
  return (
    <ZoomIn>
      <div>Your Content</div>
    </ZoomIn>
  );
}`
  },
  {
    id: 'rotate-in',
    name: 'Rotate In',
    category: 'scroll',
    description: 'Rotate and scale animation',
    component: RotateInPreview,
    code: `import { RotateIn } from 'telecop';

export default function Page() {
  return (
    <RotateIn>
      <div>Your Content</div>
    </RotateIn>
  );
}`
  },
];

// ==================== PAGE COMPONENT ====================
export default function AnimationsPage() {
  const [selectedAnimation, setSelectedAnimation] = useState(animations[0]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [filter, setFilter] = useState<'all' | 'scroll' | 'hover' | 'loading'>('all');

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedAnimation.code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const filteredAnimations = animations.filter((anim) => {
    if (filter === 'all') return true;
    return anim.category === filter;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30">
        <div className="w-full px-4 sm:px-6 py-4 pl-16 lg:pl-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Animations</h1>
          <p className="text-gray-400 mt-1 text-sm">Smooth scroll-triggered animations</p>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          
          {/* Live Preview */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start w-full min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white truncate">Live Preview</h2>
              <div className="text-xs sm:text-sm text-gray-400 truncate">
                {selectedAnimation.name}
              </div>
            </div>
            
            {/* Preview Container - مع Scroll للتجربة */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 w-full border border-gray-800">
              <div className="h-[500px] overflow-y-auto p-8 space-y-8">
                {/* محتوى للسكرول */}
                <div className="text-center text-gray-500 text-sm mb-8">
                  👇 Scroll down to see the animation
                </div>
                
                <div className="h-64"></div>
                
                {/* الأنيميشن */}
                <div className="flex items-center justify-center">
                  <selectedAnimation.component />
                </div>
                
                <div className="h-64"></div>
                
                <div className="text-center text-gray-500 text-sm">
                  ☝️ Scroll up to reset
                </div>
              </div>
            </div>

            {/* Code Block */}
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
                  {selectedAnimation.code}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Props Info */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 text-sm">Available Props</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <code className="text-blue-400">direction?</code>
                  <span className="text-gray-400">"up" | "down" | "left" | "right"</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-400">delay?</code>
                  <span className="text-gray-400">number (ms)</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-400">duration?</code>
                  <span className="text-gray-400">number (ms)</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-400">threshold?</code>
                  <span className="text-gray-400">number (0-1)</span>
                </div>
                <div className="flex items-start gap-2">
                  <code className="text-blue-400">once?</code>
                  <span className="text-gray-400">boolean</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animations List */}
          <div className="space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-white">Available Animations</h2>
              <span className="text-xs sm:text-sm text-gray-500">
                {filteredAnimations.length} animations
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-4 gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
              {(['all', 'scroll', 'hover', 'loading'] as const).map((cat) => (
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
            
            {/* List */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {filteredAnimations.map((anim) => (
                <button
                  key={anim.id}
                  onClick={() => setSelectedAnimation(anim)}
                  className={`
                    w-full relative rounded-xl
                    bg-gray-900 p-4
                    transition-all duration-300 cursor-pointer
                    border-2 text-left
                    ${selectedAnimation.id === anim.id
                      ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-white mb-1 truncate">
                        {anim.name}
                      </p>
                      <p className="text-xs text-gray-400 mb-2">
                        {anim.description}
                      </p>
                      <span className="px-2 py-0.5 bg-gray-800 rounded text-[10px] text-gray-500 capitalize">
                        {anim.category}
                      </span>
                    </div>

                    {selectedAnimation.id === anim.id && (
                      <div className="flex-shrink-0">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}