'use client';

import { useState } from 'react';
import { 
  FeatureCard,
  ProductCard,
  StatCard,
  SolidBlue,
  GradientPurplePink
} from 'telecop';

// ==================== CARD VARIANTS DATA ====================
interface CardVariant {
  id: string;
  name: string;
  category: 'feature' | 'product' | 'stat';
  code: string;
  description: string;
  component: React.ComponentType;
}

// ==================== PREVIEW COMPONENTS ====================
const FeatureCardPreview = () => (
  <FeatureCard
    icon="🚀"
    title="Fast Performance"
    description="Lightning fast load times and optimized performance"
    variant="glass"
    theme="blue"
  />
);

const FeatureCardGradient = () => (
  <FeatureCard
    icon="🎨"
    title="Beautiful Design"
    description="Modern and clean user interface design"
    variant="gradient"
    theme="purple"
  />
);

const FeatureCardSolid = () => (
  <FeatureCard
    icon="🔒"
    title="Secure & Safe"
    description="Top-notch security features built-in"
    variant="solid"
    theme="green"
  />
);

const ProductCardPreview = () => (
  <ProductCard
    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    title="Premium Headphones"
    description="High-quality sound with noise cancellation"
    price="99"
    oldPrice="149"
 
    variant="solid"
  >
    <SolidBlue>Add to Cart</SolidBlue>
  </ProductCard>
);

const ProductCardGlass = () => (
  <ProductCard
    image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    title="Smart Watch"
    description="Track your fitness and health"
    price="299"
    variant="glass"
  >
    <div className="flex gap-2">
      <SolidBlue>Buy Now</SolidBlue>
      <GradientPurplePink>♥</GradientPurplePink>
    </div>
  </ProductCard>
);

const StatCardPreview = () => (
  <StatCard
    icon="👥"
    label="Total Users"
    value="12,345"
    change="+12%"
    trend="up"
    theme="blue"
    variant="glass"
  />
);

const StatCardGreen = () => (
  <StatCard
    icon="💰"
    label="Revenue"
    value="$45.2K"
    change="+8.2%"
    trend="up"
    theme="green"
    variant="gradient"
  />
);

const StatCardRed = () => (
  <StatCard
    icon="📦"
    label="Orders"
    value="1,234"
    change="-3%"
    trend="down"
    theme="red"
    variant="solid"
  />
);

// ==================== CARDS DATA ====================
const cards: CardVariant[] = [
  // FEATURE CARDS
  {
    id: 'feature-glass',
    name: 'Feature Card - Glass',
    category: 'feature',
    description: 'Glass morphism style card',
    component: FeatureCardPreview,
    code: `
import { FeatureCard } from 'telecop';

export default function Page() {
  return (
    <FeatureCard
      icon="🚀"
      title="Fast Performance"
      description="Lightning fast"
      variant="glass"
      theme="blue"
    />
  );
}`
  },
  {
    id: 'feature-gradient',
    name: 'Feature Card - Gradient',
    category: 'feature',
    description: 'Gradient background style',
    component: FeatureCardGradient,
    code: `import { FeatureCard } from 'telecop';

export default function Page() {
  return (
    <FeatureCard
      icon="🎨"
      title="Beautiful Design"
      description="Modern UI"
      variant="gradient"
      theme="purple"
    />
  );
}`
  },
  {
    id: 'feature-solid',
    name: 'Feature Card - Solid',
    category: 'feature',
    description: 'Solid color background',
    component: FeatureCardSolid,
    code: `import { FeatureCard } from 'telecop';

export default function Page() {
  return (
    <FeatureCard
      icon="🔒"
      title="Secure & Safe"
      description="Top security"
      variant="solid"
      theme="green"
    />
  );
}`
  },

  // PRODUCT CARDS
  {
    id: 'product-solid',
    name: 'Product Card - Solid',
    category: 'product',
    description: 'Product with image and price',
    component: ProductCardPreview,
    code: `
import { 
  ProductCard, 
  SolidBlue 
} from 'telecop';

export default function Page() {
  return (
    <ProductCard
      image="/product.jpg"
      title="Premium Headphones"
      price="99"
      oldPrice="149"
    >
      <SolidBlue>
        Add to Cart
      </SolidBlue>
    </ProductCard>
  );
}`
  },
  {
    id: 'product-glass',
    name: 'Product Card - Glass',
    category: 'product',
    description: 'Glass style with buttons',
    component: ProductCardGlass,
    code: `import { 
  ProductCard, 
  SolidBlue,
  GradientPurplePink 
} from 'telecop';

export default function Page() {
  return (
    <ProductCard
      image="/product.jpg"
      title="Smart Watch"
      price="299"
      variant="glass"
    >
      <div className="flex gap-2">
        <SolidBlue>
          Buy Now
        </SolidBlue>
        <GradientPurplePink>
          ♥
        </GradientPurplePink>
      </div>
    </ProductCard>
  );
}`
  },

  // STAT CARDS
  {
    id: 'stat-glass',
    name: 'Stat Card - Glass',
    category: 'stat',
    description: 'Statistics with trend',
    component: StatCardPreview,
    code: `import { StatCard } from 'telecop';

export default function Page() {
  return (
    <StatCard
      icon="👥"
      label="Total Users"
      value="12,345"
      change="+12%"
      trend="up"
      theme="blue"
      variant="glass"
    />
  );
}`
  },
  {
    id: 'stat-gradient',
    name: 'Stat Card - Gradient',
    category: 'stat',
    description: 'Revenue statistics',
    component: StatCardGreen,
    code: `import { StatCard } from 'telecop';

export default function Page() {
  return (
    <StatCard
      icon="💰"
      label="Revenue"
      value="$45.2K"
      change="+8.2%"
      trend="up"
      theme="green"
      variant="gradient"
    />
  );
}`
  },
  {
    id: 'stat-solid',
    name: 'Stat Card - Solid',
    category: 'stat',
    description: 'Orders with down trend',
    component: StatCardRed,
    code: `import { StatCard } from 'telecop';

export default function Page() {
  return (
    <StatCard
      icon="📦"
      label="Orders"
      value="1,234"
      change="-3%"
      trend="down"
      theme="red"
      variant="solid"
    />
  );
}`
  },
];

// ==================== PAGE COMPONENT ====================
export default function CardsPage() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [filter, setFilter] = useState<'all' | 'feature' | 'product' | 'stat'>('all');

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedCard.code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const filteredCards = cards.filter((card) => {
    if (filter === 'all') return true;
    return card.category === filter;
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Cards</h1>
          <p className="text-gray-400 mt-1 text-sm">Beautiful card components - No 'use client' needed</p>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          
          {/* Live Preview */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start w-full min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white truncate">Live Preview</h2>
              <div className="text-xs sm:text-sm text-gray-400 truncate">
                {selectedCard.name}
              </div>
            </div>
            
            {/* Preview Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 w-full p-8 flex items-center justify-center min-h-[400px]">
              <div className="w-full max-w-sm">
                <selectedCard.component />
              </div>
            </div>

            {/* Code Block */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden w-full">
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800">
                <span className="text-xs text-gray-400 font-mono">Code</span>
                <button
                  onClick={handleCopy}
                  className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  {copySuccess ? '✓' : 'Copy'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <pre className="p-3 text-[9px] sm:text-[10px] leading-tight">
                  <code className="text-gray-300">
                    {selectedCard.code}
                  </code>
                </pre>
              </div>
            </div>

            {/* Note */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-300 text-xs">
                💡 <strong>Tip:</strong> For interactivity, wrap with 'use client' or use onClick on buttons inside children
              </p>
            </div>
          </div>

          {/* Cards List */}
          <div className="space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-white">Available Cards</h2>
              <span className="text-xs text-gray-500">
                {filteredCards.length}
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-4 gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
              {(['all', 'feature', 'product', 'stat'] as const).map((cat) => (
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
              {filteredCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedCard(card)}
                  className={`
                    w-full relative rounded-xl
                    bg-gray-900 p-4
                    transition-all duration-300 cursor-pointer
                    border-2 text-left
                    ${selectedCard.id === card.id
                      ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-white mb-1 truncate">
                        {card.name}
                      </p>
                      <p className="text-xs text-gray-400 mb-2">
                        {card.description}
                      </p>
                      <span className="px-2 py-0.5 bg-gray-800 rounded text-[10px] text-gray-500 capitalize">
                        {card.category}
                      </span>
                    </div>

                    {selectedCard.id === card.id && (
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