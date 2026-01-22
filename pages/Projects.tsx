
import React from 'react';

interface ProjectSectionProps {
  title: string;
  context: string;
  problem: string;
  approach: string;
  output: string;
  relevance: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, context, problem, approach, output, relevance }) => (
  <div className="py-12 border-b border-gray-100 last:border-0">
    <h2 className="text-xl font-semibold mb-8 text-[#1a1a1a]">{title}</h2>
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#888888] pt-1">Context</span>
        <div className="md:col-span-3 text-[#333333] leading-relaxed">{context}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#888888] pt-1">Problem</span>
        <div className="md:col-span-3 text-[#333333] leading-relaxed">{problem}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#888888] pt-1">Approach</span>
        <div className="md:col-span-3 text-[#333333] leading-relaxed">{approach}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#888888] pt-1">Output</span>
        <div className="md:col-span-3 text-[#333333] leading-relaxed">{output}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4682B4] pt-1">Policy Relevance</span>
        <div className="md:col-span-3 text-[#333333] leading-relaxed font-medium">{relevance}</div>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-12">Applied Research & Systems Design</h1>
      
      <ProjectSection 
        title="Carbon Guardian 2.0: AI Governance for ESG Auditing"
        context="Corporate sustainability disclosures are increasingly reliant on complex AI-driven reporting tools, creating a need for independent verification mechanisms."
        problem="Current ESG rating systems lack transparency and fail to provide token-level explainability, making it difficult to distinguish between substantive commitments and vague reporting."
        approach="Designed a 7-category taxonomy for sustainability claims and fine-tuned ClimateBERT on curated datasets to evaluate disclosure credibility."
        output="A computational framework achieving 86.8% accuracy in identifying verifiable quantitative commitments versus qualitative statements."
        relevance="Informs the development of 'Credibility Score' metrics for regulatory bodies overseeing non-financial reporting compliance."
      />

      <ProjectSection 
        title="Institutional Workflow Formalization (DRDO)"
        context="Public-sector research organizations require robust digital systems to manage high-stakes applicant and project allocation processes."
        problem="The reliance on manual, email-based processes led to significant challenges in transparency, traceability, and administrative oversight."
        approach="Collaborated with administrative stakeholders to map institutional constraints and design a centralized internship management system with role-based access."
        output="A deployed internal system that replaced manual workflows, providing consistent tracking and input validation for organizational oversight."
        relevance="Demonstrates the capacity to build resilient digital systems that respect and strengthen institutional governance structures."
      />

      <ProjectSection 
        title="Encrypted Traffic Analysis & Model Optimization"
        context="Resource-constrained network infrastructures require efficient traffic management without compromising user privacy through decryption."
        problem="Information asymmetry between ISPs and application providers limits the ability to manage bandwidth and Quality of Service (QoS) effectively."
        approach="Engineered an end-to-end ML pipeline optimized for edge deployment, achieving high accuracy with a significantly reduced memory footprint."
        output="A real-time classification model (98.7% accuracy) that is 2.2x faster and 8x smaller than standard baselines."
        relevance="Provides a technical foundation for equitable resource allocation in state-managed network infrastructures."
      />
    </section>
  );
};

export default Projects;
