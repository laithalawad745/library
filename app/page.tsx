import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CodePreview from '@/components/CodePreview';
import Features from '@/components/Features';
import ComponentsShowcase from '@/components/ComponentsShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navigation />
      <Hero />
      <Features />
      <ComponentsShowcase />
      <Footer />
    </main>
  );
}

