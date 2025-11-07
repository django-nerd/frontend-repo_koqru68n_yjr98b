import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-800">Vibe Web</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#get-started" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">Get Started</a>
        </div>

        <button
          className="md:hidden p-2 rounded-md border border-gray-200 text-gray-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-gray-100">
          <a href="#features" className="block px-3 py-2 rounded-md hover:bg-gray-50">Features</a>
          <a href="#how-it-works" className="block px-3 py-2 rounded-md hover:bg-gray-50">How it works</a>
          <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-50">Contact</a>
          <a href="#get-started" className="block px-3 py-2 rounded-md bg-gray-900 text-white text-center">Get Started</a>
        </div>
      )}
    </header>
  );
}
