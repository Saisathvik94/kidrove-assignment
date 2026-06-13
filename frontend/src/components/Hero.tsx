import { Bot, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-8 border border-white/20 shadow-xl">
          <Bot className="w-8 h-8 text-purple-300 mr-3" />
          <span className="text-purple-200 font-semibold tracking-wide uppercase text-sm">Summer Program 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-200">
          AI & Robotics <br className="hidden md:block" /> Summer Workshop
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-indigo-100 max-w-3xl mb-10 leading-relaxed font-light">
          Empower your child with the skills of tomorrow. A hands-on, 4-week journey into the fascinating world of artificial intelligence and robot building.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#register" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-indigo-900 bg-white hover:bg-indigo-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1">
            Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#details" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-300">
            View Details
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
}
