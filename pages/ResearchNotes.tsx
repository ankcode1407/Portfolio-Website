
import React, { useState, useEffect } from 'react';

interface NoteContent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  abstract: string;
  fileUrl: string; 
  body: React.ReactNode;
}

const CARBON_GUARDIAN_BODY = (
  <div className="space-y-8 serif text-[11pt] leading-[1.6] text-black">
    <section>
      <h3 className="font-sans font-bold text-[13pt] border-b border-black pb-1 mb-4 uppercase tracking-tight">I. Executive Summary</h3>
      <p>This research note addresses the proliferation of Environmental, Social, and Governance (ESG) claims within multinational corporate disclosures. Carbon Guardian AI presents a methodology for evaluating the falsifiability of corporate commitments through linguistic analysis and material weighting.</p>
    </section>
    <section>
      <h3 className="font-sans font-bold text-[13pt] border-b border-black pb-1 mb-4 uppercase tracking-tight">II. Methodology & Taxonomy</h3>
      <p>The core of the framework is a seven-tier taxonomy designed to categorize claims based on their legal and technical accountability.</p>
      <ul className="list-disc pl-8 mt-4 space-y-2 font-sans text-[10pt]">
        <li><strong>Quantitative Targets:</strong> Specific numeric benchmarks (e.g., "50% reduction in Scope 1 by 2030").</li>
        <li><strong>Vague Targets:</strong> Commitments utilizing hedging language ("aiming to," "striving for").</li>
      </ul>
    </section>
  </div>
);

const EDGE_OPTIMIZATION_BODY = (
  <div className="space-y-8 serif text-[11pt] leading-[1.6] text-black">
    <section>
      <h3 className="font-sans font-bold text-[13pt] border-b border-black pb-1 mb-4 uppercase tracking-tight">Strategic Context</h3>
      <p>The universal adoption of TLS 1.3 and QUIC protocols has created a blind spot in network traffic management. ReelDetect serves as a proof-of-concept for moving classification intelligence from the network core to the user-equipment (UE) edge.</p>
    </section>
  </div>
);

const FISCAL_CAPACITY_BODY = (
  <div className="space-y-8 serif text-[11pt] leading-[1.6] text-black">
    <section>
      <h3 className="font-sans font-bold text-[13pt] border-b border-black pb-1 mb-4 uppercase tracking-tight">The Wealth-Extraction Paradox</h3>
      <p>In emerging markets, tax-to-GDP ratios often remain stagnant despite rising private wealth. This note argues that the primary bottleneck is not the tax rate, but 'Asset Visibility' within legacy administrative structures.</p>
    </section>
  </div>
);

const ResearchNotes: React.FC = () => {
  const [activeNote, setActiveNote] = useState<NoteContent | null>(null);
  const [printContent, setPrintContent] = useState<NoteContent | null>(null);

  const notes: NoteContent[] = [
    {
      id: "carbon-guardian",
      title: "Carbon Guardian AI: Framework for ESG Credibility Assessment",
      subtitle: "Technical Standards for Auditing Corporate AI Disclosures",
      date: "August 2024",
      abstract: "An analytical framework for identifying greenwashing in corporate reporting using transformer-based models and fine-grained claim taxonomies.",
      fileUrl: "./assets/carbon-guardian.pdf", 
      body: CARBON_GUARDIAN_BODY
    },
    {
      id: "network-equity",
      title: "Edge Optimization and Network Equity",
      subtitle: "Redefining Traffic Management in Encrypted Environments",
      date: "June 2025",
      abstract: "A policy-oriented analysis of on-device traffic classification as a tool for ensuring net neutrality in high-bandwidth infrastructures.",
      fileUrl: "./assets/network-equity.pdf", 
      body: EDGE_OPTIMIZATION_BODY
    },
    {
      id: "fiscal-capacity",
      title: "From Private Wealth to Public Capacity",
      subtitle: "Institutional Constraints on Asset Visibility in Emerging Markets",
      date: "September 2025",
      abstract: "An examination of the institutional bottlenecks preventing the conversion of private wealth into state fiscal capacity.",
      fileUrl: "./assets/fiscal-capacity.pdf", 
      body: FISCAL_CAPACITY_BODY
    }
  ];

  useEffect(() => {
    if (printContent) {
      const originalTitle = document.title;
      document.title = `Shaurya_Mishra_Research_${printContent.id.replace(/-/g, '_')}`;
      const timer = setTimeout(() => {
        window.print();
        setPrintContent(null);
        document.title = originalTitle;
      }, 300);
      return () => {
        clearTimeout(timer);
        document.title = originalTitle;
      };
    }
  }, [printContent]);

  const handleDownload = (note: NoteContent) => {
    // We use a standard anchor tag for the most reliable download behavior
    const link = document.createElement('a');
    link.href = note.fileUrl;
    link.setAttribute('download', `${note.id}.pdf`);
    // target="_blank" helps in some environments to prevent the app from navigating away
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (activeNote) {
    return (
      <article className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 no-print">
        <button 
          onClick={() => setActiveNote(null)}
          className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold mb-12 flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"
        >
          ← Back to Research Notes
        </button>
        
        <header className="mb-12">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#4682B4] font-bold mb-4">POLICY BRIEF</div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1a1a1a] mb-2 leading-tight">
            {activeNote.title}
          </h1>
          <p className="text-lg text-[#555555] mb-6 italic serif leading-snug">
            {activeNote.subtitle}
          </p>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-semibold border-b border-gray-100 pb-4">
            REFERENCE: {activeNote.id.toUpperCase()} · {activeNote.date.toUpperCase()}
          </div>
        </header>

        <div className="pb-24">
          {activeNote.body}
        </div>
        
        <footer className="pt-12 border-t border-gray-100 text-[10px] text-[#888888] italic flex flex-col gap-4">
          <p>This note is part of an ongoing series on AI governance and institutional digital transformation.</p>
          <button 
            onClick={() => { setActiveNote(null); window.scrollTo(0, 0); }}
            className="text-[#4682B4] font-semibold uppercase tracking-widest text-left"
          >
            Return to list
          </button>
        </footer>
      </article>
    );
  }

  return (
    <section>
      {/* HIDDEN PRINT PORTAL (Fallback) */}
      {printContent && (
        <div className="print-only print-container bg-white">
          <div className="max-w-4xl mx-auto border-t-8 border-black pt-10 px-8">
            <div className="flex justify-between items-start mb-16">
              <div>
                <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2">Shaurya Mishra</h1>
                <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-bold">Institutional Research Dossier</p>
              </div>
              <div className="text-right text-[10px] font-mono leading-tight border-l border-gray-200 pl-6">
                <p className="font-bold">STATUS: OFFICIAL / ADVISORY</p>
                <p>REF: {printContent.id.toUpperCase()}</p>
                <p>DATE: {printContent.date.toUpperCase()}</p>
              </div>
            </div>
            <header className="mb-20">
              <div className="text-[11px] uppercase tracking-[0.5em] text-[#4682B4] font-bold mb-6">POLICY RESEARCH NOTE</div>
              <h2 className="text-5xl font-bold leading-[1.1] mb-6 tracking-tight">{printContent.title}</h2>
              <p className="text-2xl italic serif text-gray-700 leading-snug">{printContent.subtitle}</p>
            </header>
            <div className="min-h-[500px]">
              {printContent.body}
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 no-print">
        <h1 className="text-2xl font-semibold tracking-tight mb-4">Research Notes</h1>
        <p className="text-[#555555] max-w-xl text-sm leading-relaxed border-l-2 border-gray-200 pl-6 py-1">
          Internal analytical briefs focusing on the structural requirements of digital oversight. These documents prioritize institutional realism over public advocacy.
        </p>
      </div>

      <div className="space-y-4 no-print">
        {notes.map((note) => (
          <div key={note.id} className="py-12 border-b border-gray-100 last:border-0 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 
                onClick={() => { setActiveNote(note); window.scrollTo(0,0); }}
                className="text-lg font-semibold text-[#1a1a1a] group-hover:text-[#4682B4] cursor-pointer transition-colors max-w-lg leading-tight"
              >
                {note.title}
              </h3>
              <span className="text-[10px] font-mono text-[#888888] ml-4">{note.date}</span>
            </div>
            <p className="text-sm text-[#555555] mb-4 font-medium italic serif">{note.subtitle}</p>
            <p className="text-sm text-[#333333] leading-relaxed mb-8 opacity-80">{note.abstract}</p>
            <div className="flex gap-4">
              <button 
                onClick={() => { setActiveNote(note); window.scrollTo(0,0); }}
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#4682B4] border border-[#4682B4] px-4 py-2 hover:bg-[#4682B4] hover:text-white transition-all"
              >
                View Online
              </button>
              <button 
                onClick={() => handleDownload(note)}
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#888888] border border-[#888888] px-4 py-2 hover:bg-[#888888] hover:text-white transition-all"
              >
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchNotes;
