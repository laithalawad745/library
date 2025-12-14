'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-medium">🚧 Under Construction</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Full documentation is coming soon. In the meantime, explore our components!
            </p>
          </div>

          {/* Quick Start */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>🚀</span> Quick Start
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Installation</h3>
                <div className="bg-black/50 rounded-lg px-4 py-3 font-mono text-sm">
                  <code className="text-blue-400">npm install telecop</code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Import Components</h3>
                <div className="bg-black/50 rounded-lg px-4 py-3 font-mono text-sm">
                  <code className="text-gray-300">
                    <span className="text-purple-400">import</span> {`{ `}
                    <span className="text-blue-400">SolidBlue, GradientPurplePink</span>
                    {` }`} <span className="text-purple-400">from</span> <span className="text-green-400">'telecop'</span>;
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Use in Your Component</h3>
                <div className="bg-black/50 rounded-lg px-4 py-3 font-mono text-sm">
                  <code className="text-gray-300">
                    <span className="text-blue-400">&lt;SolidBlue&gt;</span>
                    Click Me
                    <span className="text-blue-400">&lt;/SolidBlue&gt;</span>
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Available Components */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📦</span> Available Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Link href="/buttons" className="group">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      Buttons
                    </h3>
                    <span className="text-2xl">🔘</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    35+ button styles including solid, gradient, glass, animated, 3D, and neon effects.
                  </p>
                  <span className="text-blue-400 text-sm font-medium group-hover:underline">
                    View Examples →
                  </span>
                </div>
              </Link>

              <Link href="/themes" className="group">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Themes
                    </h3>
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    30+ premium gradient themes with animations. Glass morphism, aurora, cosmic, and more.
                  </p>
                  <span className="text-purple-400 text-sm font-medium group-hover:underline">
                    View Examples →
                  </span>
                </div>
              </Link>

              <Link href="/cards" className="group">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                      Cards
                    </h3>
                    <span className="text-2xl">🃏</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Feature cards, product cards, and stat cards with multiple variants and themes.
                  </p>
                  <span className="text-green-400 text-sm font-medium group-hover:underline">
                    View Examples →
                  </span>
                </div>
              </Link>

              <Link href="/containers" className="group">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                      Containers
                    </h3>
                    <span className="text-2xl">📐</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    7 flexible layout containers with image-right, image-left, center, and multi-column layouts.
                  </p>
                  <span className="text-pink-400 text-sm font-medium group-hover:underline">
                    View Examples →
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📚</span> Full Documentation Coming Soon
            </h2>
            <p className="text-gray-300 mb-6">
              We're working on comprehensive documentation that will include:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Detailed API references for all components</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Step-by-step guides and tutorials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Customization examples and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>TypeScript definitions and usage examples</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Advanced patterns and real-world examples</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}