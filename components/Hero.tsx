'use client';

import Link from 'next/link';
import { SolidBlue, GradientPurplePink } from 'telecop';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-100"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Additional Gradient Overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2), transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 128, 171, 0.2), transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(88, 166, 255, 0.2), transparent 50%)
          `
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-blue-400 text-sm font-medium">v1.0.0 Released 🎉</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          Build Beautiful UIs
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            In Minutes
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 drop-shadow-lg">
          A modern React component library with 35+ buttons, 30+ themes, 
          cards, and containers. Beautiful, accessible, and easy to use.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link href="/buttons">
            <SolidBlue>Get Started →</SolidBlue>
          </Link>
          <Link href="/documentation">
            <GradientPurplePink>Documentation</GradientPurplePink>
          </Link>
        </div>

        {/* Quick Install */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
            <p className="text-gray-300 text-sm mb-3">Install via npm</p>
            <div className="flex items-center gap-3 bg-black/50 rounded-lg px-4 py-3 font-mono text-left">
              <span className="text-gray-500">$</span>
              <code className="text-blue-400 flex-1">npm install telecop</code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('npm install telecop');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">35+</div>
            <div className="text-gray-300 text-sm">Buttons</div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-gray-300 text-sm">Themes</div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3</div>
            <div className="text-gray-300 text-sm">Card Types</div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">7</div>
            <div className="text-gray-300 text-sm">Layouts</div>
          </div>
        </div>
      </div>
    </section>
  );
}