import { Users, Clock, Globe, IndianRupee, Calendar } from 'lucide-react';

export default function Details() {
  const details = [
    { icon: <Users className="w-8 h-8 text-indigo-500" />, label: 'Age Group', value: '8–14 Years' },
    { icon: <Clock className="w-8 h-8 text-purple-500" />, label: 'Duration', value: '4 Weeks' },
    { icon: <Globe className="w-8 h-8 text-blue-500" />, label: 'Mode', value: 'Online' },
    { icon: <IndianRupee className="w-8 h-8 text-emerald-500" />, label: 'Fee', value: '₹2,999' },
    { icon: <Calendar className="w-8 h-8 text-rose-500" />, label: 'Start Date', value: '15 July 2026' },
  ];

  return (
    <section id="details" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-2">Program Overview</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Workshop Details</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {details.map((detail, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {detail.icon}
              </div>
              <h4 className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-1">{detail.label}</h4>
              <p className="text-xl font-bold text-slate-900">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
