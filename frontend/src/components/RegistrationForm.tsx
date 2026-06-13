import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Assuming a standard JSON API endpoint
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          workshop: 'AI & Robotics Summer Workshop 2026'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="register" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Form Info Side */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-10 lg:p-16 lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Secure Your Spot!</h2>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Seats are limited for the AI & Robotics Summer Workshop. Register now to unlock your child's potential in the world of technology.
            </p>
            <div className="space-y-4 text-indigo-200">
              <p className="flex items-center gap-3"><CheckCircle2 className="text-purple-400" /> 100% Online & Interactive</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="text-purple-400" /> Expert Instructors</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="text-purple-400" /> Certificate of Completion</p>
            </div>
          </div>
          
          {/* Form Input Side */}
          <div className="p-10 lg:p-16 lg:w-7/12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Form</h3>
              <p className="text-slate-500">Please fill out your details and we will get back to you shortly.</p>
            </div>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-8 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Registration Successful!</h4>
                <p className="text-emerald-700">Thank you for your interest. Our team will contact you shortly with further details.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Student Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors outline-none"
                    placeholder="John Doe"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Parent's Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors outline-none"
                    placeholder="john@example.com"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors outline-none"
                    placeholder="+91 98765 43210"
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-rose-50 text-rose-700 rounded-lg flex items-start gap-3 border border-rose-100">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
