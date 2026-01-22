
import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="max-w-xl">
        <p className="text-lg leading-relaxed text-[#1a1a1a] serif">
          Analysis directed toward the deployment of advanced technical systems within public-sector constraints. Research centers on the development of measurable oversight mechanisms and the strengthening of institutional capacity to manage emerging technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#888888] mb-4">Core Focus Areas</h3>
          <ul className="space-y-3 text-sm text-[#333333]">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-[#4682B4] mt-1.5 mr-3 shrink-0"></span>
              <span>Algorithmic Auditing & Disclosure</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-[#4682B4] mt-1.5 mr-3 shrink-0"></span>
              <span>Institutional Digital Strategy</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-[#4682B4] mt-1.5 mr-3 shrink-0"></span>
              <span>Public-Sector Systems Design</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-[#4682B4] mt-1.5 mr-3 shrink-0"></span>
              <span>Metric Credibility Assessment</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col justify-end">
          <p className="text-xs text-[#888888] leading-normal italic">
            Currently investigating computational frameworks to support the auditing of corporate AI disclosures and evaluating reliability in non-financial reporting systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
