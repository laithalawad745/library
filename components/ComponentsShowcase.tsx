'use client';

import Link from 'next/link';
import { 
  SolidBlue, 
  GradientPurplePink, 
  NeonBlue,
  FeatureCard,
  ProductCard,
  StatCard
} from 'telecop';

export default function ComponentsShowcase() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore Components
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Over 70+ ready-to-use components for your next project
          </p>
        </div>

        {/* Components Grid */}
        <div className="space-y-20">
          
          {/* Buttons Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Buttons</h3>
              <Link 
                href="/buttons"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-2"
              >
                View All 35+ Buttons →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-12">
              <div className="flex flex-wrap gap-6 justify-center">
                <SolidBlue>Solid Button</SolidBlue>
                <GradientPurplePink>Gradient Button</GradientPurplePink>
                <NeonBlue>Neon Button</NeonBlue>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Cards</h3>
              <Link 
                href="/cards"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-2"
              >
                View All Card Types →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon="🚀"
                title="Feature Card"
                description="Perfect for showcasing features"
                variant="glass"
                theme="blue"
              />
              <ProductCard
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                title="Product Card"
                description="Display products beautifully"
                price="99"
                variant="solid"
              >
                <SolidBlue>View Product</SolidBlue>
              </ProductCard>
              <StatCard
                icon="📊"
                label="Total Sales"
                value="$12.5K"
                change="+12%"
                trend="up"
                theme="green"
                variant="gradient"
              />
            </div>
          </div>

          {/* Themes Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Themes & Gradients</h3>
              <Link 
                href="/themes"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-2"
              >
                View All 30+ Themes →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Glass Morphism', gradient: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)' },
                { name: 'Aurora Dream', gradient: 'radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.5), transparent 50%), linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 100%)' },
                { name: 'Neon Cyber', gradient: 'linear-gradient(45deg, #ff0080 0%, #7928ca 50%, #0070f3 100%)' },
                { name: 'Cosmic Particles', gradient: 'radial-gradient(circle at 50% 50%, rgba(255, 20, 147, 0.3), transparent 30%), linear-gradient(180deg, #000000 0%, #0a0a1a 100%)' },
              ].map((theme, index) => (
                <div
                  key={index}
                  className="relative rounded-xl h-32 overflow-hidden group cursor-pointer"
                  style={{ background: theme.gradient }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{theme.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Containers Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Layout Containers</h3>
              <Link 
                href="/containers"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-2"
              >
                View All 7 Layouts →
              </Link>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="text-center text-gray-400 mb-6">
                <p className="text-sm">Flexible layouts for any use case</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Image Right', 'Image Left', 'Center', 'Two Columns', 'Three Columns', 'Button Right', 'Button Left'].map((layout, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <p className="text-white text-sm font-medium">{layout}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}