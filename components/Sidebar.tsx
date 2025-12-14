'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarSection {
  title: string;
  items: {
    name: string;
    href: string;
    badge?: string;
  }[];
}

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const sidebarData: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Documentation', href: '/documentation' },
      { name: 'Installation', href: '/installation' },
      { name: 'Quick Start', href: '/quick-start' },
    ],
  },
  {
    title: 'Components',
    items: [
      { name: 'Buttons', href: '/buttons', badge: '35+' },
      { name: 'Cards', href: '/cards', badge: '3' },
      { name: 'Containers', href: '/containers', badge: '7' },
    ],
  },
  {
    title: 'Styling',
    items: [
      { name: 'Themes', href: '/themes', badge: '30+' },
      { name: 'Gradients', href: '/gradients' },
      { name: 'Animations', href: '/animations' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Examples', href: '/examples' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'GitHub', href: 'https://github.com/yourusername/telecop' },
    ],
  },
];

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(['Getting Started', 'Components', 'Styling']);

  const toggleSection = (title: string) => {
    if (openSections.includes(title)) {
      setOpenSections(openSections.filter(s => s !== title));
    } else {
      setOpenSections([...openSections, title]);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop Overlay - Mobile Only */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 h-screen bg-gray-950 border-r border-gray-800 overflow-y-auto
        fixed lg:sticky top-0 left-0 z-50
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          
          {/* Mobile Close Button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-xl">Telecop</span>
            </Link>
            
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Logo */}
          <Link href="/" className="hidden lg:flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white font-bold text-xl">Telecop</span>
          </Link>

          {/* Navigation Sections */}
          <nav className="space-y-6">
            {sidebarData.map((section) => (
              <div key={section.title}>
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-gray-400 hover:text-white text-xs font-semibold uppercase tracking-wider mb-3 transition-colors"
                >
                  <span>{section.title}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openSections.includes(section.title) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Section Items */}
                {openSections.includes(section.title) && (
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      const isExternal = item.href.startsWith('http');

                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            onClick={closeMobileMenu}
                            className={`
                              flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all
                              ${
                                isActive
                                  ? 'bg-blue-600 text-white font-medium'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                              }
                            `}
                          >
                            <span className="flex items-center gap-2">
                              {item.name}
                              {isExternal && (
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.5 text-xs bg-gray-800 text-gray-400 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-2">Version</p>
            <p className="text-sm text-white font-mono">v1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
}