import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="how-it-works" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Ideate',
                  desc: 'Sketch your idea and outline the core user flow.'
                },
                {
                  step: '2',
                  title: 'Build',
                  desc: 'Assemble pages with ready components and utilities.'
                },
                {
                  step: '3',
                  title: 'Launch',
                  desc: 'Deploy confidently with a fast, accessible site.'
                }
              ].map(({ step, title, desc }) => (
                <div key={step} className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">{step}</div>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="get-started" className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to create?</h2>
            <p className="mt-3 text-gray-600">Kick off your next project with this polished base and focus on what matters.</p>
            <a href="#" className="mt-8 inline-block px-6 py-3 rounded-md bg-gray-900 text-white hover:bg-black">Start building</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
