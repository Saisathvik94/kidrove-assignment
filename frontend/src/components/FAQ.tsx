import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Does my child need prior coding experience?',
      answer: 'Not at all! This workshop is designed for beginners. We start from the absolute basics and gradually move to more advanced concepts, ensuring every child can follow along comfortably.'
    },
    {
      question: 'What equipment or software will be needed?',
      answer: 'Since the workshop is online, you will need a laptop or desktop computer with a stable internet connection. We will provide access to an online robotics simulation platform, so no physical hardware purchase is required initially.'
    },
    {
      question: 'Will there be a certificate provided?',
      answer: 'Yes! Upon successful completion of the 4-week program and the final project, your child will receive a verified Kidrove AI & Robotics Certificate of Completion.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl mb-4">
            <MessageCircleQuestion className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Got questions? We've got answers. If you need more info, feel free to contact our support.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-200 bg-white hover:border-indigo-200'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-indigo-900' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-indigo-600' : 'text-slate-400'
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-indigo-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
