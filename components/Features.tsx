'use client';

export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast & Lightweight',
      description: 'Optimized components with minimal bundle size. Built with performance in mind.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean, and customizable designs. Glass morphism, gradients, and animations.',
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works perfectly on all devices. Mobile-first approach with adaptive layouts.',
    },
    {
      icon: '⚡',
      title: 'TypeScript Support',
      description: 'Full TypeScript support with type definitions for better developer experience.',
    },
    {
      icon: '🎭',
      title: '35+ Button Styles',
      description: 'Solid, gradient, glass, animated, 3D, neon, and more. Ready to use.',
    },
    {
      icon: '🌈',
      title: '30+ Premium Themes',
      description: 'Beautiful gradient themes with animations. Glass morphism, aurora, cosmic, and more.',
    },
    {
      icon: '🧩',
      title: 'Flexible Components',
      description: 'Mix and match components. Feature cards, product cards, stat cards, and containers.',
    },
    {
      icon: '📦',
      title: 'Easy to Install',
      description: 'One command installation. Import and use. No complex setup required.',
    },
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Telecop?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build modern, beautiful interfaces
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}