'use client';

import { Container, SolidBlue, GradientPurplePink } from 'telecop';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      
      {/* Small Container */}
      <Container size="sm">
        <div className="space-y-4">
          <h1 className="text-white text-4xl mb-4">Small Container</h1>
          <SolidBlue>Button inside small container</SolidBlue>
        </div>
      </Container>

      <div className="h-20" />

      {/* Medium Container */}
      <Container size="md">
        <div className="space-y-4">
          <h1 className="text-white text-4xl mb-4">Medium Container</h1>
          <GradientPurplePink>Button inside medium container</GradientPurplePink>
        </div>
      </Container>

      <div className="h-20" />

      {/* Large Container */}
      <Container size="lg">
        <div className="space-y-4">
          <h1 className="text-white text-4xl mb-4">Large Container</h1>
          <div className="grid grid-cols-3 gap-4">
            <SolidBlue>Button 1</SolidBlue>
            <SolidBlue>Button 2</SolidBlue>
            <SolidBlue>Button 3</SolidBlue>
          </div>
        </div>
      </Container>

      {/* Extra: Full Width */}
      <div className="h-20" />
      <Container size="full">
        <div className="space-y-4">
          <h1 className="text-white text-4xl mb-4">Full Width Container</h1>
          <div className="grid grid-cols-4 gap-4">
            <SolidBlue>1</SolidBlue>
            <GradientPurplePink>2</GradientPurplePink>
            <SolidBlue>3</SolidBlue>
            <GradientPurplePink>4</GradientPurplePink>
          </div>
        </div>
      </Container>

    </div>
  );
}