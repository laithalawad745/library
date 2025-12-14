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
  description: string;
  component: React.ComponentType;
}

// ==================== PREVIEW COMPONENTS ====================
const ImageRightPreview = () => (
  <Container layout="image-right" size="lg" theme="glass-morphism" gap="sm">
    <ContainerImage 
      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600" 
      alt="Demo"
    />
    <ContainerContent>
      <h2 className="text-2xl font-bold text-white mb-2">Image Right</h2>
      <p className="text-gray-300 text-sm mb-3">
        صورة على اليمين والمحتوى على اليسار.
      </p>
      <ContainerButton>
        <SolidBlue>Get Started</SolidBlue>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const ImageLeftPreview = () => (
  <Container layout="image-left" size="lg" theme="aurora-dream" gap="sm">
    <ContainerImage 
      src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600" 
      alt="Demo"
    />
    <ContainerContent>
      <h2 className="text-2xl font-bold text-white mb-2">Image Left</h2>
      <p className="text-gray-300 text-sm mb-3">
        صورة على اليسار والمحتوى على اليمين.
      </p>
      <ContainerButton>
        <GradientPurplePink>Explore</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const ButtonRightPreview = () => (
  <Container layout="button-right" size="lg" theme="neon-cyber" gap="sm">
    <ContainerButton className="flex-col items-start gap-2">
      <SolidBlue>Primary</SolidBlue>
      <GradientPurplePink>Secondary</GradientPurplePink>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-2xl font-bold text-white mb-2">Button Right</h2>
      <p className="text-gray-300 text-sm">
        أزرار على اليمين والشرح على اليسار.
      </p>
    </ContainerContent>
  </Container>
);

const ButtonLeftPreview = () => (
  <Container layout="button-left" size="lg" theme="cosmic-particles" gap="sm">
    <ContainerButton className="flex-col items-start gap-2">
      <GradientPurplePink>Start</GradientPurplePink>
      <NeonBlue>Demo</NeonBlue>
    </ContainerButton>
    <ContainerContent>
      <h2 className="text-2xl font-bold text-white mb-2">Button Left</h2>
      <p className="text-gray-300 text-sm">
        أزرار على اليسار والشرح على اليمين.
      </p>
    </ContainerContent>
  </Container>
);

const CenterPreview = () => (
  <Container layout="center" size="md" theme="glass-morphism" gap="sm">
    <ContainerContent>
      <h2 className="text-3xl font-bold text-white mb-3">Centered</h2>
      <p className="text-gray-300 mb-4">
        محتوى في المنتصف.
      </p>
      <ContainerButton className="justify-center flex-wrap gap-2">
        <SolidBlue>Start</SolidBlue>
        <GradientPurplePink>Learn</GradientPurplePink>
      </ContainerButton>
    </ContainerContent>
  </Container>
);

const TwoColumnsPreview = () => (
  <Container layout="two-columns" size="lg" theme="aurora-dream" gap="sm">
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Column 1</h3>
      <p className="text-gray-300 text-sm mb-2">
        محتوى العمود الأول.
      </p>
      <SolidBlue>Action 1</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-xl font-bold text-white mb-2">Column 2</h3>
      <p className="text-gray-300 text-sm mb-2">
        محتوى العمود الثاني.
      </p>
      <GradientPurplePink>Action 2</GradientPurplePink>
    </ContainerContent>
  </Container>
);

const ThreeColumnsPreview = () => (
  <Container layout="three-columns" size="xl" theme="neon-cyber" gap="sm">
    <ContainerContent>
      <h3 className="text-lg font-bold text-white mb-1">Feature 1</h3>
      <p className="text-gray-300 text-xs mb-2">
        وصف الميزة.
      </p>
      <SolidBlue>More</SolidBlue>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-lg font-bold text-white mb-1">Feature 2</h3>
      <p className="text-gray-300 text-xs mb-2">
        وصف الميزة.
      </p>
      <GradientPurplePink>Explore</GradientPurplePink>
    </ContainerContent>
    <ContainerContent>
      <h3 className="text-lg font-bold text-white mb-1">Feature 3</h3>
      <p className="text-gray-300 text-xs mb-2">
        وصف الميزة.
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
    description: 'صورة يمين + محتوى يسار',
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
      <SolidBlue>
        Button
      </SolidBlue>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'image-left',
    name: 'Image Left',
    layout: 'image-left',
    theme: 'aurora-dream',
    description: 'صورة يسار + محتوى يمين',
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
      <GradientPurplePink>
        Button
      </GradientPurplePink>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'button-right',
    name: 'Button Right',
    layout: 'button-right',
    theme: 'neon-cyber',
    description: 'أزرار يمين + شرح يسار',
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
    <SolidBlue>
      Primary
    </SolidBlue>
    <GradientPurplePink>
      Secondary
    </GradientPurplePink>
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
    theme: 'cosmic-particles',
    description: 'أزرار يسار + شرح يمين',
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
    <GradientPurplePink>
      Start
    </GradientPurplePink>
    <NeonBlue>
      Demo
    </NeonBlue>
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
    theme: 'glass-morphism',
    description: 'محتوى في المنتصف',
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
      <SolidBlue>
        Start
      </SolidBlue>
      <GradientPurplePink>
        Learn
      </GradientPurplePink>
    </ContainerButton>
  </ContainerContent>
</Container>`
  },
  {
    id: 'two-columns',
    name: 'Two Columns',
    layout: 'two-columns',
    theme: 'aurora-dream',
    description: 'عمودين متساويين',
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
    <SolidBlue>
      Action 1
    </SolidBlue>
  </ContainerContent>
  <ContainerContent>
    <h3>Column 2</h3>
    <p>Content</p>
    <GradientPurplePink>
      Action 2
    </GradientPurplePink>
  </ContainerContent>
</Container>`
  },
  {
    id: 'three-columns',
    name: 'Three Columns',
    layout: 'three-columns',
    theme: 'neon-cyber',
    description: 'ثلاثة أعمدة',
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
  gap="md"
>
  <ContainerContent>
    <h3>Feature 1</h3>
    <p>Description</p>
    <SolidBlue>
      More
    </SolidBlue>
  </ContainerContent>
  <ContainerContent>
    <h3>Feature 2</h3>
    <p>Description</p>
    <GradientPurplePink>
      Explore
    </GradientPurplePink>
  </ContainerContent>
  <ContainerContent>
    <h3>Feature 3</h3>
    <p>Description</p>
    <NeonBlue>
      Discover
    </NeonBlue>
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
        <div className="w-full px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Telecop Containers</h1>
          <p className="text-gray-400 mt-1 text-sm">Flexible layout components</p>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          
          {/* Live Preview */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start w-full min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white truncate">Live Preview</h2>
              <div className="text-xs sm:text-sm text-gray-400 truncate">
                {selectedContainer.name}
              </div>
            </div>
            
            {/* Preview Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 w-full">
              <div className="w-full overflow-hidden">
                <selectedContainer.component />
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
                    {selectedContainer.code}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Containers List */}
          <div className="space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-white">Layouts</h2>
              <span className="text-xs text-gray-500">
                {containers.length}
              </span>
            </div>
            
            {/* List */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {containers.map((container) => (
                <button
                  key={container.id}
                  onClick={() => setSelectedContainer(container)}
                  className={`
                    w-full relative rounded-xl
                    bg-gray-900 p-4
                    transition-all duration-300 cursor-pointer
                    border-2 text-left
                    ${selectedContainer.id === container.id
                      ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-white mb-1 truncate">
                        {container.name}
                      </p>
                      <p className="text-xs text-gray-400 mb-2">
                        {container.description}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 flex-wrap">
                        <span className="px-2 py-0.5 bg-gray-800 rounded truncate max-w-[100px]">
                          {container.layout}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded truncate max-w-[100px]">
                          {container.theme}
                        </span>
                      </div>
                    </div>

                    {selectedContainer.id === container.id && (
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