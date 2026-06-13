import Hero from './components/Hero';
import Details from './components/Details';
import Outcomes from './components/Outcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-12" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#details" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Details</a>
            <a href="#outcomes" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Learning</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </nav>
          <a href="#register" className="px-5 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold rounded-lg shadow-md transition-colors">
            Register
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Details />
        <div id="outcomes">
          <Outcomes />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <RegistrationForm />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
              K
            </div>
            <span className="text-xl font-black text-white tracking-tight">Kidrove</span>
          </div>
          <p className="mb-4">Empowering the next generation of innovators.</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Kidrove. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
