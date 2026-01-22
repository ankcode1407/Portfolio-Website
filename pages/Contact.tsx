
import React from 'react';

const Contact: React.FC = () => {
  return (
    <article className="max-w-xl">
      <h1 className="text-2xl font-semibold tracking-tight mb-8">Contact & Professional Networks</h1>
      
      <p className="text-[#333333] leading-relaxed mb-12">
        Professional inquiries regarding research collaborations, institutional strategy, or policy briefs may be directed through the following channels.
      </p>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Email</span>
          <div className="md:col-span-2">
            <a href="mailto:shauryamishra1407@gmail.com" className="text-sm font-medium text-[#1a1a1a] hover:text-[#4682B4] transition-colors">
              shauryamishra1407@gmail.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">LinkedIn</span>
          <div className="md:col-span-2">
            <a href="https://linkedin.com/in/shaurya-mishra" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1a1a1a] hover:text-[#4682B4] transition-colors">
              linkedin.com/in/shaurya-mishra
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">GitHub</span>
          <div className="md:col-span-2">
            <a href="https://github.com/ankcode1407" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1a1a1a] hover:text-[#4682B4] transition-colors">
              github.com/ankcode1407
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#888888]">Location</span>
          <div className="md:col-span-2">
            <span className="text-sm text-[#333333]">Noida / New Delhi, India</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
