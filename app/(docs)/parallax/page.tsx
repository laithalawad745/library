// Example Usage Page
'use client';

import { ParallaxScroll } from 'telecop/motion';

export default function ParallaxDemo() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        
        {/* Background Layer - Slowest */}
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

        {/* Foreground - Fastest */}
        <ParallaxScroll 
          speed={1.2} 
          direction="up"
          className="relative z-10 text-center"
        >
          <h1 className="text-7xl font-bold text-white mb-4">
            Parallax Scroll
          </h1>
          <p className="text-2xl text-gray-300">
            GSAP ScrollTrigger Magic ✨
          </p>
        </ParallaxScroll>
      </div>

      {/* Content Section */}
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          
          {/* Card 1 - Move Right + Rotate */}
          <ParallaxScroll 
            speed={0.8} 
            direction="right" 
            rotate
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Right + Rotate</h2>
              <p className="text-xl opacity-90">
                This card moves right and rotates as you scroll
              </p>
            </div>
          </ParallaxScroll>

          {/* Card 2 - Move Left + Scale */}
          <ParallaxScroll 
            speed={1} 
            direction="left" 
            scale
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Left + Scale</h2>
              <p className="text-xl opacity-90">
                This card moves left and scales up
              </p>
            </div>
          </ParallaxScroll>

          {/* Card 3 - Move Up + Blur + Opacity */}
          <ParallaxScroll 
            speed={1.5} 
            direction="up" 
            blur 
            opacity
          >
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Up + Blur + Fade</h2>
              <p className="text-xl opacity-90">
                This card blurs and fades as it moves up
              </p>
            </div>
          </ParallaxScroll>

          {/* Card 4 - All Effects Combined */}
          <ParallaxScroll 
            speed={1.2} 
            direction="down" 
            scale 
            rotate 
            blur
          >
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">All Effects! 🔥</h2>
              <p className="text-xl opacity-90">
                Scale + Rotate + Blur + Movement
              </p>
            </div>
          </ParallaxScroll>

        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <p className="text-gray-500 text-2xl">Scroll back up to see the magic again ↑</p>
        </div>
      </div>
    </div>
  );
}