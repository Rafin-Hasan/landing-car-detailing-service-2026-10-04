export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Mirror Finish Detailing</span>
        <a href="#cta" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Book Now
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-purple-600 font-semibold mb-4">Mobile Auto Detailing</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Showroom shine, without the showroom</h1>
        <p className="text-lg text-slate-600 mb-10">Interior and exterior detailing that comes to your home or office.</p>
        <a href="#cta" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
          Get an Instant Quote
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Mobile Service</h3>
          <p className="text-slate-600">We bring water, power, and product to you.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Ceramic Coating</h3>
          <p className="text-slate-600">Long-lasting protection against sun and grime.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Satisfaction Guarantee</h3>
          <p className="text-slate-600">Not happy? We’ll re-detail for free.</p>
        </div>
      </section>

      <section id="cta" className="bg-purple-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Ready for that new-car feeling?</h2>
        <p className="mb-8 text-purple-100">Most details completed in under two hours.</p>
        <a href="#" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Get an Instant Quote
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Mirror Finish Detailing. All rights reserved.
      </footer>
    </div>
  )
}
