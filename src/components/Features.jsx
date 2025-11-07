import { Sparkles, Shield, Timer, Cpu } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Clean UI',
    desc: 'Modern design with polished defaults and thoughtful spacing.'
  },
  {
    icon: Timer,
    title: 'Fast by default',
    desc: 'Instant dev server and optimized production build.'
  },
  {
    icon: Shield,
    title: 'Type-safe ready',
    desc: 'Compatible with TypeScript and popular UI patterns.'
  },
  {
    icon: Cpu,
    title: 'Extensible',
    desc: 'Add charts, auth, and APIs without changing the foundation.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to start</h2>
          <p className="mt-3 text-gray-600">Use these building blocks as a foundation for your next idea.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-gray-200 p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 p-2 ring-1 ring-indigo-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
