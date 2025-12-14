// app/(docs)/layout.tsx
'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-1 relative">
        {/* Mobile Menu Button - Inside Layout */}
        {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-gray-900 border border-gray-800 rounded-lg text-white hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {children}
      </main>
    </div>
  );
}