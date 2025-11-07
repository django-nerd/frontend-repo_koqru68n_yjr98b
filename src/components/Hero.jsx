import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-200">New • Web Starter</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">Build beautiful web apps, faster</h1>
            <p className="mt-4 text-lg text-gray-600">A clean, modern starter with responsive layout, smooth interactions, and ready-to-use components.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 ring-1 ring-gray-200" />
            <div className="absolute -top-6 -right-6 bg-white shadow-lg ring-1 ring-gray-100 rounded-xl p-4 w-40">
              <p className="text-xs text-gray-500">Fast setup</p>
              <p className="text-sm font-semibold text-gray-900">Vite + React + Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
