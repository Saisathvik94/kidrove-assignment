import { CheckCircle2, Cpu, Code, Lightbulb, PenTool, Rocket } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      title: 'Build Basic Robots',
      description: 'Hands-on experience in assembling and programming foundational robotics projects.',
      icon: <Cpu className="w-6 h-6 text-indigo-600" />
    },
    {
      title: 'Understand AI Concepts',
      description: 'Grasp the basics of artificial intelligence and machine learning in a fun, intuitive way.',
      icon: <Lightbulb className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Programming Fundamentals',
      description: 'Learn essential coding logic using block-based and beginner-friendly text languages.',
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Problem-Solving Skills',
      description: 'Develop critical thinking by troubleshooting real-world challenges during projects.',
      icon: <PenTool className="w-6 h-6 text-rose-600" />
    },
    {
      title: 'Interactive Projects',
      description: 'Complete fully functional interactive models that they can showcase to friends and family.',
      icon: <Rocket className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-2">What they will learn</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Learning Outcomes</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our curriculum is designed to transform curiosity into capability. By the end of this 4-week program, your child will have achieved significant milestones in technology and problem solving.
            </p>
            
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                    {outcome.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{outcome.title}</h4>
                    <p className="text-slate-600">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Children building robots" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="text-emerald-400 w-5 h-5" /> Over 500+ students certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
