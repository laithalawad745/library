'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-xl">Telecop</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Modern React UI component library for building beautiful interfaces.
            </p>
            <div className="flex items-center gap-4">
      
              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Components */}
          <div>
            <h3 className="text-white font-semibold mb-4">Components</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/buttons" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Buttons
                </Link>
              </li>
              <li>
                <Link href="/cards" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cards
                </Link>
              </li>
              <li>
                <Link href="/containers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Containers
                </Link>
              </li>
              <li>
                <Link href="/themes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Themes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername/telecop" className="text-gray-400 hover:text-white transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Get Help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Report Bug
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Feature Request
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Telecop. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <p  className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </p>
            <p  className="text-gray-400 hover:text-white transition-colors">
              Terms
            </p>
            <p  className="text-gray-400 hover:text-white transition-colors">
              License
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}