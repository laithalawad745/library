'use client';

import { useState } from 'react';
import { 
  Container, 
  ContainerButton, 
  ContainerContent, 
  ContainerImage,
  SolidBlue, 
  GradientPurplePink, 
  NeonBlue,
  gradients,
  type Gradient
} from 'telecop';

// ==================== CONTAINER VARIANTS DATA ====================
interface ContainerVariant {
  id: string;
  name: string;
  layout: 'image-right' | 'image-left' | 'button-right' | 'button-left' | 'center' | 'two-columns' | 'three-columns';
  themeId: string; // 🆕 استخدام ID من gradients
  code: string;
  description: string;
  component: React.ComponentType;
}

// 🆕 Helper function للحصول على الـ gradient من المكتبة
const getGradientById = (id: string): Gradient | undefined => {
  return gradients.find(g => g.id === id);
};

// ==================== PREVIEW COMPONENTS (محدثة) ====================
const ImageRightPreview = () => {
  const theme = getGradientById('glass-morphism');
  return (
    <Container layout="image-right" size="lg" theme="glass-morphism" gap="sm">
      <ContainerImage 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" 
        alt="Demo"
      />
      <ContainerContent>
        <h2 className="text-3xl font-bold text-white mb-3">Image Right Layout</h2>
        <p className="text-gray-300 mb-4">
          Image on the right, content on the left. Ideal for showcasing products or features.
        </p>
        <ContainerButton>
          <SolidBlue>Get Started</SolidBlue>
        </ContainerButton>
      </ContainerContent>
    </Container>
  );
};

const ImageLeftPreview = () => (
  <Container layout="image-left" size="lg" theme="aurora-dream" gap="sm">
    <ContainerImage 
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" 
      alt="Demo"
    />
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Image Left Layout</h2>
      <p className="text-gray-300 mb-4">
        Image on the left, content on the right. An attractive reverse layout.
      </p>
      <ContainerButton>
        <GradientPurplePink>Explore</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const ButtonRightPreview = () => (
  <Container layout="button-right" size="lg" theme="neon-cyber" gap="sm">
    <ContainerButton className="flex-col items-start gap-3">
      <SolidBlue>Primary Action</SolidBlue>
      <GradientPurplePink>Secondary Action</GradientPurplePink>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Button Right Layout</h2>
      <p className="text-gray-300">
        Buttons on the right, explanation on the left. Ideal for Call to Actions.
      </p>
    </ContainerContent>
  </Container>
);

const ButtonLeftPreview = () => (
  <Container layout="button-left" size="lg" theme="cosmic-particles" gap="sm">
    <ContainerButton className="flex-col items-start gap-3">
      <GradientPurplePink>Start Now</GradientPurplePink>
      <NeonBlue>Live Demo</NeonBlue>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Button Left Layout</h2>
      <p className="text-gray-300">
        Buttons on the left, explanation on the right. Reverse button layout.
      </p>
    </ContainerContent>
  </Container>
);

const CenterPreview = () => (
  <Container layout="center" size="md" theme="glass-morphism" gap="sm">
    <ContainerContent>
      <h2 className="text-4xl font-bold text-white mb-4">Center Layout</h2>
      <p className="text-gray-300 mb-6 max-w-2xl">
        All content is centered. Perfect for home pages.
      </p>
      <ContainerButton className="justify-center flex-wrap gap-3">
        <SolidBlue>Get Started</SolidBlue>
        <GradientPurplePink>Learn More</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const TwoColumnsPreview = () => (
  <Container layout="two-columns" size="lg" theme="aurora-dream" gap="sm">
    <ContainerContent>
      <h3 className="text-2xl font-bold text-white mb-3">Column One</h3>
      <p className="text-gray-300 mb-4">
        The content of the first column, with a detailed description.
      </p>
      <SolidBlue>Action 1</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-2xl font-bold text-white mb-3">Column Two</h3>
      <p className="text-gray-300 mb-4">
        The content of the second column, with a detailed description.
      </p>
      <GradientPurplePink>Action 2</GradientPurplePink>
    </ContainerContent>
  </Container>
);

const ThreeColumnsPreview = () => (
  <Container layout="three-columns" size="xl" theme="neon-cyber" gap="sm">
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Feature One</h3>
      <p className="text-gray-300 text-sm mb-3">
        Describe the first feature briefly and clearly.
      </p>
      <SolidBlue>More</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Feature Two</h3>
      <p className="text-gray-300 text-sm mb-3">
        Describe the second feature briefly and clearly.
      </p>
      <GradientPurplePink>Explore</GradientPurplePink>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Feature Three</h3>
      <p className="text-gray-300 text-sm mb-3">
        Describe the third feature briefly and clearly.
      </p>
      <NeonBlue>Discover</NeonBlue>
    </ContainerContent>
  </Container>
);

// ==================== CONTAINERS DATA (محدث) ====================
const containers: ContainerVariant[] = [
  {
    id: 'image-right',
    name: 'Image Right',
    layout: 'image-right',
    themeId: 'glass-morphism',
    description: 'Image right + content left',
    component: ImageRightPreview,
    code: `import {
  Container,
  ContainerImage,
  ContainerContent,
  ContainerButton,
  SolidBlue
} from 'telecop';

<Container
  layout="image-right"
  size="lg"
  theme="glass-morphism"
>
  <ContainerImage
    src="/image.jpg"
    alt="Demo"
  />
  <ContainerContent>
    <h2>Title</h2>
    <p>Description</p>
    <ContainerButton>
      <SolidBlue>Button</SolidBlue>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'image-left',
    name: 'Image Left',
    layout: 'image-left',
    themeId: 'aurora-dream',
    description: 'Image left + content right',
    component: ImageLeftPreview,
    code: `import {
  Container,
  ContainerImage,
  ContainerContent,
  ContainerButton,
  GradientPurplePink
} from 'telecop';

<Container
  layout="image-left"
  size="lg"
  theme="aurora-dream"
>
  <ContainerImage
    src="/image.jpg"
    alt="Demo"
  />
  <ContainerContent>
    <h2>Title</h2>
    <p>Description</p>
    <ContainerButton>
      <GradientPurplePink>Button</GradientPurplePink>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'button-right',
    name: 'Button Right',
    layout: 'button-right',
    themeId: 'neon-cyber',
    description: 'Buttons right + content left',
    component: ButtonRightPreview,
    code: `import {
  Container,
  ContainerButton,
  ContainerContent,
  SolidBlue,
  GradientPurplePink
} from 'telecop';

<Container
  layout="button-right"
  size="lg"
  theme="neon-cyber"
>
  <ContainerButton>
    <SolidBlue>Primary</SolidBlue>
    <GradientPurplePink>Secondary</GradientPurplePink>
  </ContainerButton>
  <ContainerContent>
    <h2>Title</h2>
    <p>Description</p>
  </ContainerContent>
</Container>`
  },
  {
    id: 'button-left',
    name: 'Button Left',
    layout: 'button-left',
    themeId: 'cosmic-particles',
    description: 'Buttons left + content right',
    component: ButtonLeftPreview,
    code: `import {
  Container,
  ContainerButton,
  ContainerContent,
  GradientPurplePink,
  NeonBlue
} from 'telecop';

<Container
  layout="button-left"
  size="lg"
  theme="cosmic-particles"
>
  <ContainerButton>
    <GradientPurplePink>Start</GradientPurplePink>
    <NeonBlue>Demo</NeonBlue>
  </ContainerButton>
  <ContainerContent>
    <h2>Title</h2>
    <p>Description</p>
  </ContainerContent>
</Container>`
  },
  {
    id: 'center',
    name: 'Center',
    layout: 'center',
    themeId: 'glass-morphism',
    description: 'Centered content',
    component: CenterPreview,
    code: `import {
  Container,
  ContainerContent,
  ContainerButton,
  SolidBlue,
  GradientPurplePink
} from 'telecop';

<Container
  layout="center"
  size="md"
  theme="glass-morphism"
>
  <ContainerContent>
    <h2>Title</h2>
    <p>Description</p>
    <ContainerButton>
      <SolidBlue>Start</SolidBlue>
      <GradientPurplePink>Learn</GradientPurplePink>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'two-columns',
    name: 'Two Columns',
    layout: 'two-columns',
    themeId: 'aurora-dream',
    description: 'Two equal columns',
    component: TwoColumnsPreview,
    code: `import {
  Container,
  ContainerContent,
  SolidBlue,
  GradientPurplePink
} from 'telecop';

<Container
  layout="two-columns"
  size="lg"
  theme="aurora-dream"
>
  <ContainerContent>
    <h3>Column 1</h3>
    <p>Content</p>
    <SolidBlue>Action 1</SolidBlue>
  </ContainerContent>
  <ContainerContent>
    <h3>Column 2</h3>
    <p>Content</p>
    <GradientPurplePink>Action 2</GradientPurplePink>
  </ContainerContent>
</Container>`
  },
  {
    id: 'three-columns',
    name: 'Three Columns',
    layout: 'three-columns',
    themeId: 'neon-cyber',
    description: 'Three columns',
    component: ThreeColumnsPreview,
    code: `import {
  Container,
  ContainerContent,
  SolidBlue,
  GradientPurplePink,
  NeonBlue
} from 'telecop';

<Container
  layout="three-columns"
  size="xl"
  theme="neon-cyber"
>
  <ContainerContent>
    <h3>Feature 1</h3>
    <p>Description</p>
    <SolidBlue>More</SolidBlue>
  </ContainerContent>
  <ContainerContent>
    <h3>Feature 2</h3>
    <p>Description</p>
    <GradientPurplePink>Explore</GradientPurplePink>
  </ContainerContent>
  <ContainerContent>
    <h3>Feature 3</h3>
    <p>Description</p>
    <NeonBlue>Discover</NeonBlue>
  </ContainerContent>
</Container>`
  },
];

// ==================== PAGE COMPONENT ====================
export default function ContainersPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  const selectedContainer = containers[selectedIndex];
  const selectedTheme = getGradientById(selectedContainer.themeId);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedContainer.code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30">
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-16 lg:pl-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Containers</h1>
          <p className="text-gray-400 mt-1 text-sm">Flexible layout components with library themes & buttons</p>
        </div>
      </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
        
        {/* Number Tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 overflow-x-auto scrollbar-hide max-w-full lg:max-w-2xl mx-auto">
            {containers.map((container, index) => (
              <button
                key={container.id}
                onClick={() => setSelectedIndex(index)}
                className={`
                  flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg
                  transition-all duration-300
                  ${selectedIndex === index
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Info Badge */}
        {/* {selectedTheme && (
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <span className="text-purple-400 text-sm font-medium">
                🎨 Theme: {selectedTheme.name}
              </span>
              {selectedTheme.animation && (
                <span className="text-xs bg-purple-500/20 px-2 py-0.5 rounded">
                  ✨ {selectedTheme.animation}
                </span>
              )}
            </div>
          </div>
        )} */}

        {/* Live Preview */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">Live Preview</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-gray-400 px-2 sm:px-3 py-1 bg-gray-800 rounded-lg truncate max-w-[150px] sm:max-w-none">
                {selectedContainer.name}
              </span>
            </div>
          </div>
          
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <selectedContainer.component />
          </div>
        </div>

        {/* Code Block */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden mb-6 sm:mb-8">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-800">
            <span className="text-xs sm:text-sm text-gray-400 font-mono">Code</span>
            <button
              onClick={handleCopy}
              className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {copySuccess ? '✓' : 'Copy'}
            </button>
          </div>
          <pre className="p-3 sm:p-4 overflow-x-auto">
            <code className="text-xs sm:text-sm text-gray-300 block">
              {selectedContainer.code}
            </code>
          </pre>
        </div>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <p className="text-blue-300 text-sm">
             <strong>Note:</strong> All buttons (SolidBlue, GradientPurplePink, NeonBlue) and themes (glass-morphism, aurora-dream, etc.) are imported directly from the Telecop library!
          </p>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}