
import React from 'react';

const About: React.FC = () => {
  return (
    <article className="max-w-2xl space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Research Orientation</h1>
      
      <div className="space-y-6 text-[#333333] leading-relaxed">
        <p>
          Focused on the technical and structural requirements for effective digital oversight. My work emphasizes the formalization of taxonomies and metrics that enable institutions to better manage complex infrastructure.
        </p>
        
        <p>
          My experience includes leading applied research on auditing corporate AI disclosures, where I developed computational frameworks to address opacity in ESG reporting. This involved designing multi-category systems to distinguish verifiable commitments from ambiguous claims—a necessary step toward scalable regulatory compliance.
        </p>

        <p>
          Previously, I worked within the Solid State Physics Laboratory (DRDO), a government research organization. This role involved navigating the challenges of deploying digital systems under rigorous constraints, requiring close collaboration with administrative stakeholders to formalize workflows and ensure institutional traceability.
        </p>
      </div>

      <div className="pt-12 space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[#888888]">Institutional Emphasis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold">Framework Design</h3>
            <p className="text-[#555555]">Developing structured methodologies for evaluating technical systems against policy objectives.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Taxonomies & Metrics</h3>
            <p className="text-[#555555]">Defining clear classifications and measurable indicators for system performance and compliance.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Cross-functional Coordination</h3>
            <p className="text-[#555555]">Translating technical capabilities into policy-relevant insights for non-technical stakeholders.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Constraint Navigation</h3>
            <p className="text-[#555555]">Designing within the limitations of legacy systems, bureaucratic requirements, and security protocols.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
