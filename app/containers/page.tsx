'use client';

import { useState } from 'react';
import { 
  Container, 
  ContainerButton, 
  ContainerContent, 
  ContainerImage,
  SolidBlue, 
  GradientPurplePink, 
  NeonBlue 
} from 'telecop';

// ==================== CONTAINER VARIANTS DATA ====================
interface ContainerVariant {
  id: string;
  name: string;
  layout: 'image-right' | 'image-left' | 'button-right' | 'button-left' | 'center' | 'two-columns' | 'three-columns';
  theme: 'glass-morphism' | 'aurora-dream' | 'neon-cyber' | 'cosmic-particles' | 'none';
  code: string;
  component: React.ComponentType;
}

// ==================== PREVIEW COMPONENTS ====================
const ImageRightPreview = () => (
  <Container layout="image-right" size="lg" theme="glass-morphism">
    <ContainerImage 
      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" 
      alt="Demo"
    />
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Image Right Layout</h2>
      <p className="text-gray-300 mb-4">
        الصورة على اليمين والمحتوى على اليسار.
      </p>
      <ContainerButton>
        <SolidBlue>Get Started</SolidBlue>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const ImageLeftPreview = () => (
  <Container layout="image-left" size="lg" theme="aurora-dream">
    <ContainerImage 
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" 
      alt="Demo"
    />
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Image Left Layout</h2>
      <p className="text-gray-300 mb-4">
        الصورة على اليسار والمحتوى على اليمين.
      </p>
      <ContainerButton>
        <GradientPurplePink>Explore</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const ButtonRightPreview = () => (
  <Container layout="button-right" size="lg" theme="neon-cyber">
    <ContainerButton className="flex-col items-start">
      <SolidBlue>Primary Action</SolidBlue>
      <GradientPurplePink>Secondary</GradientPurplePink>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Button Right</h2>
      <p className="text-gray-300">
        الأزرار على اليمين والشرح على اليسار.
      </p>
    </ContainerContent>
  </Container>
);

const ButtonLeftPreview = () => (
  <Container layout="button-left" size="lg" theme="cosmic-particles">
    <ContainerButton className="flex-col items-start">
      <GradientPurplePink>Start Trial</GradientPurplePink>
      <NeonBlue>Watch Demo</NeonBlue>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Button Left</h2>
      <p className="text-gray-300">
        الأزرار على اليسار والشرح على اليمين.
      </p>
    </ContainerContent>
  </Container>
);

const CenterPreview = () => (
  <Container layout="center" size="md" theme="glass-morphism">
    <ContainerContent>
      <h2 className="text-4xl font-bold text-white mb-4">Centered Layout</h2>
      <p className="text-gray-300 text-lg mb-6">
        كل شيء في المنتصف. مثالي للـ Hero Sections.
      </p>
      <ContainerButton className="justify-center">
        <SolidBlue>Get Started</SolidBlue>
        <GradientPurplePink>Learn More</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const TwoColumnsPreview = () => (
  <Container layout="two-columns" size="lg" theme="aurora-dream">
    <ContainerContent>
      <h3 className="text-2xl font-bold text-white mb-3">Column 1</h3>
      <p className="text-gray-300 mb-4">
        عمود كامل بمحتوى منفصل.
      </p>
      <SolidBlue>Action 1</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-2xl font-bold text-white mb-3">Column 2</h3>
      <p className="text-gray-300 mb-4">
        عمود ثاني بمحتوى مختلف.
      </p>
      <GradientPurplePink>Action 2</GradientPurplePink>
    </ContainerContent>
  </Container>
);

const ThreeColumnsPreview = () => (
  <Container layout="three-columns" size="xl" theme="neon-cyber" gap="md">
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Feature 1</h3>
      <p className="text-gray-300 text-sm mb-3">
        وصف الميزة الأولى.
      </p>
      <SolidBlue>Learn More</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Feature 2</h3>
      <p className="text-gray-300 text-sm mb-3">
        وصف الميزة الثانية.
      </p>
      <GradientPurplePink>Explore</GradientPurplePink>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Feature 3</h3>
      <p className="text-gray-300 text-sm mb-3">
        وصف الميزة الثالثة.
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
    theme: 'glass-morphism',
    component: ImageRightPreview,
    code: `import { Container, ContainerImage, ContainerContent, ContainerButton, SolidBlue } from 'telecop';

<Container layout="image-right" size="lg" theme="glass-morphism">
  <ContainerImage 
    src="/your-image.jpg" 
    alt="Demo"
  />
  <ContainerContent>
    <h2 className="text-3xl font-bold text-white mb-3">
      Your Title
    </h2>
    <p className="text-gray-300 mb-4">
      Your description here...
    </p>
    <ContainerButton>
      <SolidBlue>Get Started</SolidBlue>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'image-left',
    name: 'Image Left',
    layout: 'image-left',
    theme: 'aurora-dream',
    component: ImageLeftPreview,
    code: `import { Container, ContainerImage, ContainerContent, ContainerButton, GradientPurplePink } from 'telecop';

<Container layout="image-left" size="lg" theme="aurora-dream">
  <ContainerImage 
    src="/your-image.jpg" 
    alt="Demo"
  />
  <ContainerContent>
    <h2 className="text-3xl font-bold text-white mb-3">
      Your Title
    </h2>
    <p className="text-gray-300 mb-4">
      Your description here...
    </p>
    <ContainerButton>
      <GradientPurplePink>Explore</GradientPurplePink>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'button-right',
    name: 'Button Right',
    layout: 'button-right',
    theme: 'neon-cyber',
    component: ButtonRightPreview,
    code: `import { Container, ContainerButton, ContainerContent, SolidBlue, GradientPurplePink } from 'telecop';

<Container layout="button-right" size="lg" theme="neon-cyber">
  <ContainerButton className="flex-col items-start">
    <SolidBlue>Primary Action</SolidBlue>
    <GradientPurplePink>Secondary</GradientPurplePink>
  </ContainerButton>
  <ContainerContent>
    <h2 className="text-3xl font-bold text-white mb-3">
      Your Title
    </h2>
    <p className="text-gray-300">
      Your description here...
    </p>
  </ContainerContent>
</Container>`
  },
  {
    id: 'button-left',
    name: 'Button Left',
    layout: 'button-left',
    theme: 'cosmic-particles',
    component: ButtonLeftPreview,
    code: `import { Container, ContainerButton, ContainerContent, GradientPurplePink, NeonBlue } from 'telecop';

<Container layout="button-left" size="lg" theme="cosmic-particles">
  <ContainerButton className="flex-col items-start">
    <GradientPurplePink>Start Trial</GradientPurplePink>
    <NeonBlue>Watch Demo</NeonBlue>
  </ContainerButton>
  <ContainerContent>
    <h2 className="text-3xl font-bold text-white mb-3">
      Your Title
    </h2>
    <p className="text-gray-300">
      Your description here...
    </p>
  </ContainerContent>
</Container>`
  },
  {
    id: 'center',
    name: 'Center',
    layout: 'center',
    theme: 'glass-morphism',
    component: CenterPreview,
    code: `import { Container, ContainerContent, ContainerButton, SolidBlue, GradientPurplePink } from 'telecop';

<Container layout="center" size="md" theme="glass-morphism">
  <ContainerContent>
    <h2 className="text-4xl font-bold text-white mb-4">
      Your Title
    </h2>
    <p className="text-gray-300 text-lg mb-6">
      Your description here...
    </p>
    <ContainerButton className="justify-center">
      <SolidBlue>Get Started</SolidBlue>
      <GradientPurplePink>Learn More</GradientPurplePink>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'two-columns',
    name: 'Two Columns',
    layout: 'two-columns',
    theme: 'aurora-dream',
    component: TwoColumnsPreview,
    code: `import { Container, ContainerContent, SolidBlue, GradientPurplePink } from 'telecop';

<Container layout="two-columns" size="lg" theme="aurora-dream">
  <ContainerContent>
    <h3 className="text-2xl font-bold text-white mb-3">
      Column 1
    </h3>
    <p className="text-gray-300 mb-4">
      Your content here...
    </p>
    <SolidBlue>Action 1</SolidBlue>
  </ContainerContent>
  <ContainerContent>
    <h3 className="text-2xl font-bold text-white mb-3">
      Column 2
    </h3>
    <p className="text-gray-300 mb-4">
      Your content here...
    </p>
    <GradientPurplePink>Action 2</GradientPurplePink>
  </ContainerContent>
</Container>`
  },
  {
    id: 'three-columns',
    name: 'Three Columns',
    layout: 'three-columns',
    theme: 'neon-cyber',
    component: ThreeColumnsPreview,
    code: `import { Container, ContainerContent, SolidBlue, GradientPurplePink, NeonBlue } from 'telecop';

<Container layout="three-columns" size="xl" theme="neon-cyber" gap="md">
  <ContainerContent>
    <h3 className="text-xl font-bold text-white mb-2">
      Feature 1
    </h3>
    <p className="text-gray-300 text-sm mb-3">
      Description...
    </p>
    <SolidBlue>Learn More</SolidBlue>
  </ContainerContent>
  <ContainerContent>
    <h3 className="text-xl font-bold text-white mb-2">
      Feature 2
    </h3>
    <p className="text-gray-300 text-sm mb-3">
      Description...
    </p>
    <GradientPurplePink>Explore</GradientPurplePink>
  </ContainerContent>
  <ContainerContent>
    <h3 className="text-xl font-bold text-white mb-2">
      Feature 3
    </h3>
    <p className="text-gray-300 text-sm mb-3">
      Description...
    </p>
    <NeonBlue>Discover</NeonBlue>
  </ContainerContent>
</Container>`
  },
];

// ==================== PAGE COMPONENT ====================
export default function ContainersPage() {
  const [selectedContainer, setSelectedContainer] = useState(containers[0]);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedContainer.code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Telecop Containers</h1>
          <p className="text-gray-400 mt-1">Flexible layout components for your app</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Live Preview - Sticky */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Live Preview</h2>
              <div className="text-sm text-gray-400">
                {selectedContainer.name}
              </div>
            </div>
            
            {/* Preview Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <selectedContainer.component />
            </div>

            {/* Code Block */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <span className="text-sm text-gray-400 font-mono">Code</span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  {copySuccess ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {selectedContainer.code}
                </code>
              </pre>
            </div>
          </div>

          {/* Containers Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Available Layouts</h2>
              <span className="text-sm text-gray-500">
                {containers.length} layouts
              </span>
            </div>
            
            {/* Scrollable Grid */}
            <div className="h-[calc(100vh-16rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <div className="grid gap-4">
                {containers.map((container) => (
                  <button
                    key={container.id}
                    onClick={() => setSelectedContainer(container)}
                    className={`
                      relative rounded-xl overflow-hidden
                      bg-gray-900 p-6
                      transition-all duration-300 cursor-pointer
                      border-2 text-left
                      ${selectedContainer.id === container.id
                        ? 'border-blue-500 scale-[1.02] shadow-xl shadow-blue-500/20'
                        : 'border-gray-700 hover:border-gray-600 hover:scale-[1.01]'
                      }
                    `}
                  >
                    {/* Mini Preview */}
                    <div className="mb-3 h-32 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                      <div className="scale-[0.3] origin-center w-[300%]">
                        <container.component />
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-white text-lg font-semibold">
                      {container.name}
                    </p>
                    <p className="text-gray-400 text-sm capitalize mt-1">
                      Layout: {container.layout}
                    </p>

                    {/* Selected Indicator */}
                    {selectedContainer.id === container.id && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
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