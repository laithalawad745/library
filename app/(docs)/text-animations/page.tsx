'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Text Animation Types
interface TextAnimation {
  id: string;
  name: string;
  preset: string;
  category: 'basic' | 'advanced' | 'creative' | 'cinematic';
  description: string;
}

// Available Easing Functions
const easingOptions = [
  { value: 'linear', label: 'Linear' },
  { value: 'ease', label: 'Ease' },
  { value: 'ease-in', label: 'Ease In' },
  { value: 'ease-out', label: 'Ease Out' },
  { value: 'ease-in-out', label: 'Ease In Out' },
  { value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', label: 'Back' },
  { value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', label: 'Bounce' },
];

// Text Animations Data
const textAnimations: TextAnimation[] = [
  { id: 'typing', name: 'Typing Effect', preset: 'typing', category: 'basic', description: 'Classic typewriter animation' },
  { id: 'blur-in', name: 'Blur In', preset: 'blurIn', category: 'basic', description: 'Fade in with blur effect' },
  { id: 'text-pop-up', name: 'Pop Up', preset: 'textPopUp', category: 'basic', description: 'Scale from zero to full size' },
  { id: 'text-scale-up', name: 'Scale Up', preset: 'textScaleUp', category: 'basic', description: 'Smooth scale entrance' },
  { id: 'text-rotate-in', name: 'Rotate In', preset: 'textRotateIn', category: 'basic', description: 'Rotate entrance effect' },
  { id: 'focus-in', name: 'Focus In', preset: 'focusIn', category: 'basic', description: 'Sharp focus entrance' },
  { id: 'tracking-in-expand', name: 'Tracking In Expand', preset: 'trackingInExpand', category: 'advanced', description: 'Letter spacing expansion' },
  { id: 'tracking-out-contract', name: 'Tracking Out Contract', preset: 'trackingOutContract', category: 'advanced', description: 'Letter spacing contraction' },
  { id: 'wave-text', name: 'Wave Text', preset: 'waveText', category: 'advanced', description: 'Vertical wave motion' },
  { id: 'text-wobble', name: 'Wobble', preset: 'textWobble', category: 'advanced', description: 'Playful wobble effect' },
  { id: 'swing-in-top', name: 'Swing In Top', preset: 'swingInTop', category: 'advanced', description: '3D swing from top' },
  { id: 'text-shadow-pop', name: 'Shadow Pop', preset: 'textShadowPop', category: 'advanced', description: 'Layered shadow effect' },
  { id: 'glitch', name: 'Glitch Effect', preset: 'glitch', category: 'creative', description: 'Digital glitch animation' },
  { id: 'flicker', name: 'Flicker', preset: 'flicker', category: 'creative', description: 'Light flicker effect' },
  { id: 'slide-in-blurred', name: 'Slide In Blurred', preset: 'slideInBlurred', category: 'cinematic', description: 'Motion blur entrance' },
  { id: 'kenburns', name: 'Ken Burns', preset: 'kenburns', category: 'cinematic', description: 'Documentary-style zoom' },
];

export default function TextAnimationsPage() {
  const [selectedAnimation, setSelectedAnimation] = useState(textAnimations[0]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [filter, setFilter] = useState<'all' | 'basic' | 'advanced' | 'creative' | 'cinematic'>('all');
  const [isPlaying, setIsPlaying] = useState(0);
  
  // Animation Controls
  const [duration, setDuration] = useState(1000);
  const [delay, setDelay] = useState(0);
  const [iterations, setIterations] = useState(1);
  const [easing, setEasing] = useState('ease-out');
  
  // Style Controls
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(48);

  // Generate code with current settings
  const generateCode = () => {
    const props: string[] = [`preset="${selectedAnimation.preset}"`];
    
    if (duration !== 1000) props.push(`duration={${duration}}`);
    if (delay !== 0) props.push(`delay={${delay}}`);
    if (iterations !== 1) props.push(iterations === -1 ? `iterations={Infinity}` : `iterations={${iterations}}`);
    if (easing !== 'ease-out') props.push(`easing="${easing}"`);
    
    // Style props
    const styles: string[] = [];
    if (textColor !== '#ffffff') styles.push(`color: '${textColor}'`);
    if (fontSize !== 48) styles.push(`fontSize: '${fontSize}px'`);
    
    const stylesProp = styles.length > 0 
      ? `\n  style={{ ${styles.join(', ')} }}`
      : '';
    
    return `import { TeleMotion } from 'telecop';

<TeleMotion ${props.join(' ')}${stylesProp}>
  <h1>${selectedAnimation.name}</h1>
</TeleMotion>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleReplay = () => {
    setIsPlaying(prev => prev + 1);
  };

  const handleAnimationChange = (anim: TextAnimation) => {
    setSelectedAnimation(anim);
    // Reset to defaults
    setDuration(getDefaultDuration(anim.preset));
    setDelay(0);
    setIterations(1);
    setEasing(getDefaultEasing(anim.preset));
    setTextColor('#ffffff');
    setFontSize(48);
  };

  const filteredAnimations = textAnimations.filter((anim) => {
    if (filter === 'all') return true;
    return anim.category === filter;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30">
        <div className="w-full px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Text Animations</h1>
          <p className="text-gray-400 mt-1 text-sm">16 stunning text animation presets with live controls</p>
        </div>
      </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            
            {/* Live Preview */}
            <div className="space-y-3 sm:space-y-4 lg:sticky lg:top-28 lg:self-start w-full min-w-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">Live Preview</h2>
                <button
                  onClick={handleReplay}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors flex items-center gap-2"
                >
                  <span>↻</span> Replay
                </button>
              </div>
              
              {/* Preview Container */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 border border-gray-800 w-full">
                <div className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-6 lg:p-8 w-full">
                  <div 
                    key={`${selectedAnimation.id}-${isPlaying}`}
                    className="text-center w-full"
                    style={{
                      animation: `telecop-${selectedAnimation.preset} ${duration}ms ${easing} ${delay}ms ${iterations === -1 ? 'infinite' : iterations}`,
                      color: textColor,
                      fontSize: `${fontSize}px`,
                    }}
                  >
                    <h1 className="font-bold px-4">
                      {selectedAnimation.name}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300 mt-4 opacity-70">
                      {selectedAnimation.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animation Controls */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 space-y-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎛️</span> Animation Controls
                </h3>
                
                {/* Duration Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-300 font-medium">Duration (Speed)</label>
                    <span className="text-xs text-blue-400 font-mono">{duration}ms</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Fast (100ms)</span>
                    <span>Slow (5000ms)</span>
                  </div>
                </div>

                {/* Delay Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-300 font-medium">Delay</label>
                    <span className="text-xs text-purple-400 font-mono">{delay}ms</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="100"
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>No Delay</span>
                    <span>3000ms</span>
                  </div>
                </div>

                {/* Iterations */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-300 font-medium">Iterations</label>
                    <span className="text-xs text-green-400 font-mono">
                      {iterations === -1 ? 'Infinite' : iterations}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 5, -1].map((iter) => (
                      <button
                        key={iter}
                        onClick={() => setIterations(iter)}
                        className={`
                          flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all
                          ${iterations === iter
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                          }
                        `}
                      >
                        {iter === -1 ? '∞' : iter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Easing */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300 font-medium">Easing Function</label>
                  <select
                    value={easing}
                    onChange={(e) => setEasing(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    {easingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-4" />

                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎨</span> Style Controls
                </h3>

                {/* Text Color Picker */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-300 font-medium">Text Color</label>
                    <span className="text-xs text-orange-400 font-mono">{textColor}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-16 h-10 rounded-lg cursor-pointer bg-gray-800 border border-gray-700"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-orange-500 font-mono"
                      placeholder="#ffffff"
                    />
                  </div>
                  {/* Quick Color Presets */}
                  <div className="flex gap-2">
                    {['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setTextColor(color)}
                        className="w-8 h-8 rounded-lg border-2 border-gray-700 hover:border-gray-500 transition-colors"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Font Size Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-300 font-medium">Font Size</label>
                    <span className="text-xs text-pink-400 font-mono">{fontSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="16"
                    max="120"
                    step="2"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Small (16px)</span>
                    <span>Huge (120px)</span>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setDuration(getDefaultDuration(selectedAnimation.preset));
                    setDelay(0);
                    setIterations(1);
                    setEasing(getDefaultEasing(selectedAnimation.preset));
                    setTextColor('#ffffff');
                    setFontSize(48);
                  }}
                  className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors"
                >
                  Reset All to Defaults
                </button>
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
                  >
                    {generateCode()}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 sm:p-4">
                <p className="text-blue-300 text-xs sm:text-sm">
                  💡 <strong>Live Controls:</strong> Adjust animation, color, and size settings - code updates in real-time!
                </p>
              </div>
            </div>

            {/* Animations Grid */}
            <div className="space-y-3 sm:space-y-4 w-full min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">Available Animations</h2>
                <span className="text-xs sm:text-sm text-gray-500">
                  {filteredAnimations.length} animations
                </span>
              </div>

              {/* Filter Buttons */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800 w-full">
                {(['all', 'basic', 'advanced', 'creative', 'cinematic'] as const).map((cat) => (
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
              
              {/* Scrollable Grid */}
              <div className="h-[calc(100vh-20rem)] sm:h-[calc(100vh-18rem)] lg:h-[calc(100vh-16rem)] overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                  {filteredAnimations.map((anim) => (
                    <button
                      key={anim.id}
                      onClick={() => handleAnimationChange(anim)}
                      className={`
                        relative rounded-xl overflow-hidden p-4 sm:p-6
                        bg-gradient-to-br from-gray-900 to-gray-800
                        transition-all duration-300 cursor-pointer
                        border-2 w-full text-left
                        ${selectedAnimation.id === anim.id
                          ? 'border-blue-500 shadow-xl shadow-blue-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                        }
                      `}
                    >
                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm sm:text-base font-semibold truncate">
                              {anim.name}
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                              {anim.description}
                            </p>
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
                        <span className="px-2 py-1 bg-gray-800/50 rounded text-[10px] text-gray-400 capitalize self-start">
                          {anim.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes telecop-typing {
          from { width: 0; opacity: 0; }
          1% { width: 0; opacity: 1; }
          to { width: 100%; opacity: 1; }
        }
        @keyframes telecop-blurIn {
          from { filter: blur(12px); opacity: 0; }
          to { filter: blur(0); opacity: 1; }
        }
        @keyframes telecop-textPopUp {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes telecop-textScaleUp {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes telecop-textRotateIn {
          from { transform: rotate(-360deg); opacity: 0; }
          to { transform: rotate(0); opacity: 1; }
        }
        @keyframes telecop-focusIn {
          from { filter: blur(12px); opacity: 0; }
          to { filter: blur(0); opacity: 1; }
        }
        @keyframes telecop-trackingInExpand {
          0% { letter-spacing: -0.5em; opacity: 0; }
          40% { letter-spacing: -0.5em; opacity: 0.6; }
          100% { letter-spacing: normal; opacity: 1; }
        }
        @keyframes telecop-trackingOutContract {
          0% { letter-spacing: normal; opacity: 1; }
          50% { letter-spacing: 0em; opacity: 0.6; }
          100% { letter-spacing: -0.5em; opacity: 0; }
        }
        @keyframes telecop-waveText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes telecop-textWobble {
          0%, 100% { transform: translateX(0) rotate(0); }
          15% { transform: translateX(-25px) rotate(-5deg); }
          30% { transform: translateX(20px) rotate(3deg); }
          45% { transform: translateX(-15px) rotate(-3deg); }
          60% { transform: translateX(10px) rotate(2deg); }
          75% { transform: translateX(-5px) rotate(-1deg); }
        }
        @keyframes telecop-swingInTop {
          from { transform: rotateX(-100deg); opacity: 0; }
          to { transform: rotateX(0deg); opacity: 1; }
        }
        @keyframes telecop-textShadowPop {
          from { text-shadow: 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555; }
          to { text-shadow: 1px 1px #555, 2px 2px #555, 3px 3px #555, 4px 4px #555; }
        }
        @keyframes telecop-glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes telecop-flicker {
          0%, 41.99%, 43.01%, 47.99%, 49.01%, 100% { opacity: 1; }
          42%, 43%, 48%, 49% { opacity: 0; }
        }
        @keyframes telecop-slideInBlurred {
          from { transform: translateX(-1000px) scaleX(2.5) scaleY(0.2); filter: blur(40px); opacity: 0; }
          to { transform: translateX(0) scaleY(1) scaleX(1); filter: blur(0); opacity: 1; }
        }
        @keyframes telecop-kenburns {
          from { transform: scale(1) translateX(0) translateY(0); }
          to { transform: scale(1.2) translateX(15px) translateY(15px); }
        }
        
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

// Helper functions
function getDefaultDuration(preset: string): number {
  const durations: Record<string, number> = {
    typing: 2000,
    glitch: 500,
    waveText: 600,
    blurIn: 800,
    trackingInExpand: 700,
    trackingOutContract: 700,
    focusIn: 800,
    textShadowPop: 600,
    flicker: 1000,
    textPopUp: 500,
    textRotateIn: 600,
    textScaleUp: 400,
    textWobble: 1000,
    swingInTop: 600,
    slideInBlurred: 800,
    kenburns: 5000,
  };
  return durations[preset] || 1000;
}

function getDefaultEasing(preset: string): string {
  const easings: Record<string, string> = {
    typing: 'linear',
    glitch: 'linear',
    waveText: 'ease-in-out',
    blurIn: 'ease-out',
    trackingInExpand: 'ease-out',
    trackingOutContract: 'ease-in',
    focusIn: 'ease-out',
    textShadowPop: 'ease-out',
    flicker: 'linear',
    textPopUp: 'ease-out',
    textRotateIn: 'ease-out',
    textScaleUp: 'ease-out',
    textWobble: 'ease-in-out',
    swingInTop: 'ease-out',
    slideInBlurred: 'ease-out',
    kenburns: 'ease-out',
  };
  return easings[preset] || 'ease-out';
}   