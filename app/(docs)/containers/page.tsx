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
  Button3DGreen ,
  type Gradient
} from 'telecop';

// ==================== CONTAINER VARIANTS DATA ====================
interface ContainerVariant {
  id: string;
  name: string;
  layout: 'image-right' | 'image-left' | 'button-right' | 'button-left' | 'center' | 'two-columns' | 'three-columns';
  themeId: string;
  code: string;
  description: string;
  component: React.ComponentType;
}

// Helper function للحصول على الـ gradient من المكتبة
const getGradientById = (id: string): Gradient | undefined => {
  return gradients.find(g => g.id === id);
};

// ==================== PREVIEW COMPONENTS (RESPONSIVE) ====================
const ImageRightPreview = () => {
  return (
    <Container layout="image-right" size="lg" theme="glass-morphism" gap="sm" className='p-3 sm:p-4 lg:p-6'>
      <ContainerImage 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" 
        alt="Demo"
      />
      <ContainerContent>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Image Right Layout</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
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
  <Container layout="image-left" size="lg" theme="aurora-dream" gap="sm" className='p-3 sm:p-4 lg:p-6'>
    <ContainerImage 
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" 
      alt="Demo"
    />
    <ContainerContent>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Image Left Layout</h2>
      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
        Image on the left, content on the right. An attractive reverse layout.
      </p>
      <ContainerButton>
        <GradientPurplePink>Explore</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const ButtonRightPreview = () => (
  <Container layout="button-right" size="lg" theme="neon-cyber" gap="sm" className='p-3 sm:p-4 lg:p-6'>
    <ContainerButton className="flex-col items-start gap-2 sm:gap-3">
      <SolidBlue>Primary Action</SolidBlue>
      <Button3DGreen>3D Button</Button3DGreen>   
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Button Right Layout</h2>
      <p className="text-sm sm:text-base text-gray-300">
        Buttons on the right, explanation on the left. Ideal for Call to Actions.
      </p>
    </ContainerContent>
  </Container>
);

const ButtonLeftPreview = () => (
  <Container layout="button-left" size="lg" theme="cosmic-particles" gap="sm" className='p-3 sm:p-4 lg:p-6'>
    <ContainerButton className="flex-col items-start gap-2 sm:gap-3">
      <GradientPurplePink>Start Now</GradientPurplePink>
      <NeonBlue>Live Demo</NeonBlue>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Button Left Layout</h2>
      <p className="text-sm sm:text-base text-gray-300">
        Buttons on the left, explanation on the right. Reverse button layout.
      </p>
    </ContainerContent>
  </Container>
);

const CenterPreview = () => (
  <Container layout="center" size="md" theme="glass-morphism" gap="sm" className='p-4 sm:p-6 lg:p-8'> 
    <ContainerContent>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Center Layout</h2>
      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
        All content is centered. Perfect for home pages.
      </p>
      <ContainerButton className="justify-center flex-wrap gap-2 sm:gap-3">
        <SolidBlue>Get Started</SolidBlue>
        <GradientPurplePink>Learn More</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const TwoColumnsPreview = () => (
  <Container layout="two-columns" size="lg" theme="aurora-dream" gap="sm" className='p-3 sm:p-4 lg:p-6'>
    <ContainerContent>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">Column One</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
        The content of the first column, with a detailed description.
      </p>
      <SolidBlue>Action 1</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">Column Two</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
        The content of the second column, with a detailed description.
      </p>
      <GradientPurplePink>Action 2</GradientPurplePink>
    </ContainerContent>
  </Container>
);

const ThreeColumnsPreview = () => (
  <Container layout="three-columns" size="xl" theme="neon-cyber" gap="sm" className='p-3 sm:p-4 lg:p-6'>
    <ContainerContent>
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2">Feature One</h3>
      <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
        Describe the first feature briefly and clearly.
      </p>
      <SolidBlue>More</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2">Feature Two</h3>
      <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
        Describe the second feature briefly and clearly.
      </p>
      <GradientPurplePink>Explore</GradientPurplePink>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2">Feature Three</h3>
      <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
        Describe the third feature briefly and clearly.
      </p>
      <NeonBlue>Discover</NeonBlue>
    </ContainerContent>
  </Container>
);

// ==================== CONTAINERS DATA ====================
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
  Button3DGreen
} from 'telecop';

<Container
  layout="button-right"
  size="lg"
  theme="neon-cyber"
>
  <ContainerButton>
    <SolidBlue>Primary</SolidBlue>
    <Button3DGreen>3D</Button3DGreen>
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
    <div className="min-h-screen bg-gray-950 w-full">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-30 w-full">
        <div className="px-4 sm:px-6 py-3 sm:py-4 pl-16 lg:pl-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Containers</h1>
          <p className="text-gray-400 mt-1 text-xs sm:text-sm">Flexible layout components with library themes & buttons</p>
        </div>
      </header>

      <div className="w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        
          {/* Number Tabs - Horizontal Scroll */}
          <div className="w-full">
            <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-2 overflow-x-auto scrollbar-hide max-w-full">
              {containers.map((container, index) => (
                <button
                  key={container.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`
                    flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold text-base sm:text-lg
                    transition-all duration-300
                    ${selectedIndex === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Container Info Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {selectedContainer.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {selectedContainer.description}
                </p>
              </div>
              {selectedTheme && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg self-start sm:self-center">
                  <span className="text-purple-400 text-xs font-medium">
                    🎨 {selectedTheme.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Live Preview */}
          <div className="w-full">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Live Preview</h3>
            <div className="rounded-xl border border-gray-800 overflow-hidden shadow-2xl w-full">
              <selectedContainer.component />
            </div>
          </div>

          {/* Code Block */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden w-full">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-800">
              <span className="text-xs sm:text-sm text-gray-400 font-mono">Code</span>
              <button
                onClick={handleCopy}
                className="px-2 sm:px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex-shrink-0"
              >
                {copySuccess ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <div className="overflow-x-auto w-full">
              <pre className="p-3 sm:p-4">
                <code className="text-[10px] sm:text-xs lg:text-sm text-gray-300 block leading-relaxed whitespace-pre-wrap break-all">
                  {selectedContainer.code}
                </code>
              </pre>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 sm:p-4">
            <p className="text-blue-300 text-xs sm:text-sm leading-relaxed">
              💡 <strong>Note:</strong> All buttons (SolidBlue, GradientPurplePink, NeonBlue) and themes (glass-morphism, aurora-dream, etc.) are imported directly from the Telecop library!
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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