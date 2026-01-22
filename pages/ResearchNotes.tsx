
import React, { useState } from 'react';

interface NoteContent {
  id: string;
  title: string;
  subtitle: string;
  abstract: string;
  body: React.ReactNode;
}

const CARBON_GUARDIAN_BODY = (
  <div className="space-y-12 serif text-[11pt] leading-[1.7] text-[#1a1a1a]">
    <div className="border-b border-gray-100 pb-8 mb-8">
      <div className="text-[10px] font-mono text-gray-400 mb-2 uppercase">Authorship & Affiliation</div>
      <p className="text-sm font-sans font-medium text-gray-700">
        Dr. Aakhanshi Gupta, Shaurya Mishra, Saima Bano<br />
        CSE Department, Amity University Uttar Pradesh, Noida, India<br />
        <span className="text-[#4682B4]">shauryamishra1407@gmail.com</span>
      </p>
    </div>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight italic">Abstract</h3>
      <p className="italic text-gray-700">
        Carbon Guardian AI represents an innovative framework for intelligent carbon footprint management and ESG (Environmental, Social, and Governance) optimization, leveraging advanced natural language processing (NLP) and machine learning (ML) to address the pervasive issue of greenwashing in corporate sustainability communication. As sustainability disclosures become increasingly central to corporate accountability, inconsistencies, selective transparency, and ambiguous reporting continue to hinder objective ESG assessment. To confront this challenge, we developed a comprehensive, fine-grained taxonomy comprising seven distinct categories of ESG claims—QuantitativeTarget, VagueTarget, VerifiedClaim, AmbiguousBaseline, OffsetsOnly, PeripheralClaim, and NonClaim. A rigorously curated dataset of 523 claims extracted from 347 paragraphs across sustainability reports of 52 multinational corporations forms the foundation of this study. To operationalize automated classification, we fine-tuned transformer-based language models—BERT, RoBERTa, and ClimateBERT—achieving an accuracy of 86.8.
      </p>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">I. INTRODUCTION</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-sans font-bold text-[10pt] uppercase tracking-wide mb-2">A. Motivation and Context</h4>
          <p>
            The rapid proliferation of Environmental, Social, and Governance (ESG) disclosures reflects growing stakeholder pressure on corporations to demonstrate sustainable business practices [1]. As of 2024, over 90% of S&P 500 companies publish sustainability reports, and ESG-related assets under management exceed $35 trillion globally [2]. However, this surge in reporting has been accompanied by concerns about greenwashing—the practice of misleading stakeholders through exaggerated, vague, or unsubstantiated environmental and social claims [3], [4].
          </p>
          <p className="mt-4">
            Current ESG assessment frameworks often rely on aggregate scores that obscure critical distinctions between different types of corporate claims [5]. For instance, a company announcing a “commitment to significantly reduce carbon emissions” (vague target) and another reporting “20% reduction in Scope 1 and 2 emissions from 2020 to 2023” (verified claim) may receive similar treatment despite vastly different levels of accountability.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-[10pt] uppercase tracking-wide mb-2">B. Research Gap</h4>
          <p>
            Despite extensive research, existing work exhibits limitations: Lack of Fine-Grained Taxonomies, Limited Annotated Datasets, and Inconsistent Operationalization of definitions across studies.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-[10pt] uppercase tracking-wide mb-2">C. Contributions</h4>
          <p>This paper addresses these gaps through: 1) A Novel Seven-Category Taxonomy; 2) A Curated, Expert-Annotated Dataset; 3) A Multi-Dimensional Annotation Schema; 4) A Methodological Framework for replication; and 5) Providing a Public Resource for future research.</p>
        </div>
      </div>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">III. TAXONOMY DEVELOPMENT</h3>
      <div className="space-y-8">
        <p>Our taxonomy distinguishes claims based on specificity, verifiability, and materiality—key dimensions identified in greenwashing literature.</p>
        
        <div className="space-y-8">
          <div className="pl-6 border-l-2 border-[#4682B4]">
            <h5 className="font-sans font-bold text-[11pt] uppercase mb-2">1) QuantitativeTarget (QT)</h5>
            <p className="mb-2"><span className="font-bold font-sans text-[10pt]">Definition:</span> Forward-looking commitments with specific numeric targets, deadlines, and baseline definitions enabling independent verification.</p>
            <p className="text-sm font-sans mb-1"><span className="font-bold">Criteria:</span> Explicit percentage/absolute metric; Specific deadline year; Defined scope; Clear baseline year.</p>
            <p className="italic text-gray-600 mb-1">Example: “We aim to achieve a 50% reduction in Scope 1 and 2 greenhouse gas emissions by 2030 from a 2020 baseline.”</p>
            <p className="text-sm"><span className="font-bold">Rationale:</span> High accountability and falsifiability.</p>
          </div>

          <div className="pl-6 border-l-2 border-[#4682B4]">
            <h5 className="font-sans font-bold text-[11pt] uppercase mb-2">2) VagueTarget (VT)</h5>
            <p className="mb-2"><span className="font-bold font-sans text-[10pt]">Definition:</span> Forward-looking commitments using hedging language, vague qualifiers, or lacking specific metrics/deadlines.</p>
            <p className="text-sm font-sans mb-1"><span className="font-bold">Criteria:</span> Hedging verbs ("aim to", "strive"); Vague qualifiers ("significantly"); Vague metrics; Vague timeframes.</p>
            <p className="italic text-gray-600 mb-1">Example: “We are committed to significantly reducing our environmental footprint across operations in the coming years.”</p>
            <p className="text-sm"><span className="font-bold">Rationale:</span> Low accountability, consistent with symbolic legitimacy management.</p>
          </div>

          <div className="pl-6 border-l-2 border-[#4682B4]">
            <h5 className="font-sans font-bold text-[11pt] uppercase mb-2">3) VerifiedClaim (VC)</h5>
            <p className="mb-2"><span className="font-bold font-sans text-[10pt]">Definition:</span> Past performance claims with specific metrics and complete baseline information enabling materiality assessment.</p>
            <p className="text-sm font-sans mb-1"><span className="font-bold">Criteria:</span> Past tense indicator; Specific numeric outcome; Clear baseline; Defined scope; Absolute or intensity metrics.</p>
            <p className="italic text-gray-600 mb-1">Example: “We achieved a 25% reduction in Scope 1 and 2 emissions intensity from 2019 to 2023.”</p>
            <p className="text-sm"><span className="font-bold">Rationale:</span> Enable stakeholders to assess achievement by comparing reductions against absolute values.</p>
          </div>

          <div className="pl-6 border-l-2 border-[#4682B4]">
            <h5 className="font-sans font-bold text-[11pt] uppercase mb-2">5) OffsetsOnly (OO)</h5>
            <p className="mb-2"><span className="font-bold font-sans text-[10pt]">Definition:</span> Claims exclusively about offset/credit purchases without mention of operational emission reductions.</p>
            <p className="text-sm font-sans mb-1"><span className="font-bold">Criteria:</span> Mention of offsets/credits; Past tense action; No mention of operational reductions.</p>
            <p className="italic text-gray-600 mb-1">Example: “We purchased 50,000 carbon credits from renewable energy projects in 2023.”</p>
            <p className="text-sm"><span className="font-bold">Rationale:</span> May signal avoidance of operational decarbonization, raising sustainability concerns.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">V. DATASET STATISTICS AND ANALYSIS</h3>
      <div className="space-y-6">
        <p>The primary label distribution (Total: 523 claims) shows:</p>
        <ul className="list-disc pl-8 font-sans text-[10pt] space-y-2">
          <li><strong>VerifiedClaim:</strong> 144 (27.5%)</li>
          <li><strong>QuantitativeTarget:</strong> 132 (25.2%)</li>
          <li><strong>OffsetsOnly:</strong> 57 (10.9%)</li>
          <li><strong>NonClaim:</strong> 53 (10.1%)</li>
          <li><strong>PeripheralClaim:</strong> 52 (9.9%)</li>
          <li><strong>VagueTarget:</strong> 50 (9.6%)</li>
          <li><strong>AmbiguousBaseline:</strong> 35 (6.7%)</li>
        </ul>
        <p className="mt-4">
          <strong>Key Observation:</strong> Greenwashing Indicators (VagueTarget + AmbiguousBaseline + NonClaim + OffsetsOnly) total 37.3%, indicating a substantial presence of potentially misleading claims.
        </p>
      </div>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">VI. APPLICATIONS AND USE CASES</h3>
      <div className="space-y-4">
        <h4 className="font-sans font-bold text-[10pt] uppercase tracking-wide">A. Automated Greenwashing Detection</h4>
        <p>We trained baseline classifiers achieving the following accuracies:</p>
        <ul className="list-disc pl-8 font-sans text-[10pt] space-y-1">
          <li>TF-IDF + SVM: 72.3% accuracy</li>
          <li>BERT-base: 81.5% accuracy</li>
          <li>RoBERTa-large: 84.2% accuracy</li>
          <li><strong>ClimateBERT (fine-tuned): 86.8% accuracy</strong></li>
        </ul>
        <p className="mt-4">
          Regulators can leverage this taxonomy for materiality screening, baseline completeness audits, and sector benchmarking to identify outliers within industries.
        </p>
      </div>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">VIII. CONCLUSION</h3>
      <p>
        This paper presents a comprehensive taxonomy and expert-annotated dataset for classifying ESG claims. Our seven-category taxonomy operationalizes critical dimensions of claim credibility—specificity, verifiability, and materiality. As ESG disclosure continues to expand globally, robust assessment frameworks become increasingly critical. Our taxonomy provides a foundation for moving beyond aggregate ESG scores toward granular, claim-level evaluation.
      </p>
    </section>
  </div>
);

const EDGE_OPTIMIZATION_BODY = (
  <div className="space-y-12 serif text-[11pt] leading-[1.7] text-[#1a1a1a]">
    <div className="border-b border-gray-100 pb-8 mb-8 font-sans text-sm font-medium text-gray-500">
      POLICY RESEARCH NOTE<br />
      Topic: Edge Optimization and Network Equity<br />
      Subject: Policy Implications of Resource-Efficient Machine Learning
    </div>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight italic">Executive Summary</h3>
      <p>
        The rapid universalization of encryption protocols (TLS 1.3, QUIC) has created a blind spot in network traffic management. Traditional Deep Packet Inspection (DPI)—once the standard for Quality of Service (QoS)—is now obsolete, leaving network operators unable to distinguish between high-priority video streams and low-priority background downloads. This "granularity gap" leads to inefficient resource allocation and poor user experience.
      </p>
      <p className="mt-4">
        This note analyzes <strong>ReelDetect</strong>, a technical proof-of-concept for on-device traffic classification, to argue for a policy shift: moving traffic management intelligence from the network core (ISP) to the network edge (User Equipment). We find that lightweight, privacy-preserving models deployed on user devices can restore network equity and efficiency without compromising encryption or net neutrality principles.
      </p>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">1. The Context: The "Going Dark" Problem in Infrastructure</h3>
      <p>
        For decades, network operators managed congestion by inspecting data packets. If a user was streaming video, the network allocated more bandwidth. Today, the "Encryption Wall" prevents this. To a modern ISP, a 4K video stream and a background software update look identical—they are both opaque streams of encrypted bytes.
      </p>
      <ul className="list-disc pl-8 mt-4 space-y-3 font-sans text-[10pt]">
        <li><strong>The Consequence:</strong> Networks must reactively manage congestion only <em>after</em> it occurs (e.g., when a queue fills up), rather than proactively preventing it.</li>
        <li><strong>The Inequity:</strong> Premium bandwidth is wasted on low-priority tasks, while real-time applications suffer from jitter and buffering.</li>
      </ul>
      <p className="mt-4 font-bold">
        ReelDetect demonstrates a viable technical solution. By analyzing the "shape" of traffic (packet size, burst rhythm) rather than its content, it identifies high-bandwidth video intent with 98.7% accuracy without ever breaking encryption.
      </p>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">2. Policy Analysis of Edge-Based Classification</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-sans font-bold text-[10pt] uppercase tracking-wide mb-2">A. Redefining Net Neutrality: User-Initiated vs. ISP-Imposed</h4>
          <p>
            Current Model: The ISP guesses what the traffic is and throttles it arbitrarily. This is opaque and often discriminatory.
          </p>
          <p className="mt-2">
            Proposed Edge Model: The user’s device (running a local model like ReelDetect) identifies the need for high-throughput and signals the network for a specific slice (via 5G URSP). When intelligence sits on the edge, prioritization becomes a <strong>user-agent request</strong>, not an ISP imposition.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-[10pt] uppercase tracking-wide mb-2">B. Privacy as a Function of Architecture</h4>
          <ul className="list-disc pl-8 font-sans text-[10pt] space-y-2">
            <li><strong>Data Minimization:</strong> The model uses statistical features rather than payload data. It does not know <em>what</em> video is playing, only that <em>a</em> video is playing.</li>
            <li><strong>Local Processing:</strong> By using an optimized LightGBM model that is 8x smaller and 2.2x faster, processing happens entirely on-device. No raw data is sent to the ISP.</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">4. Strategic Recommendations</h3>
      <ol className="list-decimal pl-8 font-sans text-[10pt] space-y-4">
        <li><strong>Standardize "Intent Signaling":</strong> Regulators should encourage standards bodies (like 3GPP) to accelerate protocols where user devices can tag encrypted flows with "QoS Intent" derived from local inference.</li>
        <li><strong>Incentivize "Green AI" in Protocols:</strong> Policy frameworks for next-gen networks (6G) should prioritize signaling protocols that reduce energy consumption through proactive detection.</li>
        <li><strong>Privacy Safe Harbors:</strong> Establish legal clarity that statistical traffic analysis (fingerprinting) performed <em>locally</em> for performance optimization does not constitute surveillance.</li>
      </ol>
    </section>
  </div>
);

const FISCAL_CAPACITY_BODY = (
  <div className="space-y-12 serif text-[11pt] leading-[1.7] text-[#1a1a1a]">
    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">1. Background and Motivation</h3>
      <p>
        Over the past decade, India has witnessed a sharp rise in private wealth alongside sustained economic growth. Recent estimates indicate that aggregate billionaire wealth in India now amounts to roughly 30–35 percent of nominal GDP, placing the country among the highest globally. At the same time, the Indian state continues to face persistent fiscal constraints, reflected in a relatively low tax-to-GDP ratio compared to advanced economies.
      </p>
      <p className="mt-4">
        India’s combined central and state tax-to-GDP ratio has remained broadly stable at around 17–18 percent, with central government tax revenues alone at approximately 11–12 percent of GDP—well below the OECD average of about 34 percent. This coexistence of rising private wealth and limited public revenue raises a fundamental policy question: <strong>why does growing wealth not automatically translate into stronger fiscal capacity for the state?</strong>
      </p>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">3. Conceptual Framework</h3>
      <p>This research is grounded in three core ideas:</p>
      <ol className="list-decimal pl-8 font-sans text-[10pt] space-y-3 mt-4">
        <li><strong>Wealth and state capacity are distinct systems.</strong> Existence of wealth does not imply the ability to mobilise it for collective purposes.</li>
        <li><strong>Fiscal capacity is an institutional outcome</strong>, emerging from information (what the state can see), administration, enforcement, and legitimacy.</li>
        <li><strong>Policy outcomes are constraint-bound.</strong> Well-designed policies can fail if they encounter binding constraints related to information gaps or administrative limits.</li>
      </ol>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">4. Wealth Structure and the Limits of Taxability</h3>
      <p>
        In India, a substantial share of top-end wealth is held in the form of assets—promoter-held equity, unlisted shares, and real estate—rather than as regular income flows. Large proportions of billionaire wealth gains have come from <strong>equity price appreciation</strong>, not from realised income subject to annual taxation.
      </p>
      <p className="mt-4">
        Income flows are relatively easy to tax because they are liquid and visible (TDS). Asset-based wealth, by contrast, is frequently illiquid, difficult to value, and unrealised. As a result, large increases in asset values can occur without triggering corresponding tax liabilities.
      </p>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">5. Information, Visibility, and Administrative Capacity</h3>
      <p>
        Governments can tax only what they can identify, value, and monitor. Visibility is therefore a prerequisite for governability. India’s experience with Digital Public Infrastructure (Aadhaar, PAN, GST, UPI) has significantly increased the visibility of income <em>flows</em>.
      </p>
      <p className="mt-4">
        However, a significant transition gap remains in <strong>asset stocks</strong>. Comparable visibility does not yet exist for land ownership, unlisted equity, and complex corporate structures. Information asymmetry thus becomes one of the state’s most binding constraints. Furthermore, India continues to face a substantial backlog of tax litigation, with disputes often taking several years to resolve.
      </p>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">8. Policy Implications</h3>
      <p>The analysis suggests several implications for fiscal policy design in India:</p>
      <ul className="list-disc pl-8 font-sans text-[10pt] space-y-4 mt-4">
        <li>Raising tax rates without addressing institutional constraints is unlikely to yield sustained gains.</li>
        <li>DPI successes help build legitimacy and operational confidence before attempting deeper reforms.</li>
        <li>Incremental and modular improvements in asset visibility (e.g., strengthening land records) may be more effective than large, one-time wealth tax reforms.</li>
        <li>Fiscal capacity building must be evaluated over long time horizons (decades), not short-term revenue spikes.</li>
      </ul>
    </section>

    <section>
      <h3 className="font-sans font-bold text-[12pt] border-b border-black pb-1 mb-6 uppercase tracking-tight">9. Conclusion</h3>
      <p>
        India’s experience demonstrates that rising private wealth does not automatically strengthen fiscal capacity. The conversion of wealth into public revenue is constrained by the form of wealth, information gaps, administrative limitations, capital mobility, and political legitimacy. Recognizing these constraints is essential for realistic policy design.
      </p>
    </section>
  </div>
);

const ResearchNotes: React.FC = () => {
  const [activeNote, setActiveNote] = useState<NoteContent | null>(null);

  const notes: NoteContent[] = [
    {
      id: "carbon-guardian",
      title: "Carbon Guardian AI: Intelligent Carbon Footprint Management",
      subtitle: "A Comprehensive Taxonomy and Dataset for Classifying ESG Claims",
      abstract: "Comprehensive academic paper detailing the development of a 7-category ESG claim taxonomy and the implementation of ClimateBERT for automated greenwashing detection with 86.8% accuracy.",
      body: CARBON_GUARDIAN_BODY
    },
    {
      id: "network-equity",
      title: "Edge Optimization and Network Equity",
      subtitle: "Policy Implications of Resource-Efficient Machine Learning",
      abstract: "Policy research note investigating the technical and ethical implications of on-device traffic classification (ReelDetect) in the context of universal encryption and net neutrality.",
      body: EDGE_OPTIMIZATION_BODY
    },
    {
      id: "fiscal-capacity",
      title: "From Private Wealth to Public Capacity",
      subtitle: "Institutional Constraints on Fiscal Extraction in India",
      abstract: "Institutional analysis exploring the 'Asset Visibility Gap' and the structural reasons why rising private billionaire wealth fails to translate into state fiscal capacity in emerging economies.",
      body: FISCAL_CAPACITY_BODY
    }
  ];

  if (activeNote) {
    return (
      <article className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
        <button 
          onClick={() => { setActiveNote(null); window.scrollTo(0,0); }}
          className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold mb-12 flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"
        >
          ← Back to Research Portfolio
        </button>
        
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden rounded-sm">
          <header className="p-12 border-b border-gray-100 bg-[#fcfcfc]">
            <div className="max-w-3xl mx-auto">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#4682B4] font-bold mb-6">OFFICIAL RESEARCH DOSSIER</div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#1a1a1a] mb-4 leading-tight">
                {activeNote.title}
              </h1>
              <p className="text-xl text-[#555555] mb-2 italic serif leading-snug">
                {activeNote.subtitle}
              </p>
            </div>
          </header>

          <div className="p-12 max-w-3xl mx-auto">
            {activeNote.body}
          </div>
        </div>
        
        <footer className="mt-20 pt-12 text-[10px] text-[#888888] italic flex flex-col gap-4">
          <p>This report is the intellectual property of Shaurya Mishra and co-authors. Citations must follow standard academic protocols.</p>
          <button 
            onClick={() => { setActiveNote(null); window.scrollTo(0, 0); }}
            className="text-[#4682B4] font-semibold uppercase tracking-widest text-left hover:underline"
          >
            Return to research index
          </button>
        </footer>
      </article>
    );
  }

  return (
    <section>
      <div className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight mb-4">Research Portfolio</h1>
        <p className="text-[#555555] max-w-xl text-sm leading-relaxed border-l-2 border-[#4682B4] pl-6 py-1">
          Complete unabridged research dossiers. These documents detail the full scope of my work in AI governance, institutional capacity, and technical infrastructure.
        </p>
      </div>

      <div className="space-y-0">
        {notes.map((note) => (
          <div key={note.id} className="py-12 border-b border-gray-100 last:border-0 group">
            <div className="flex justify-between items-baseline mb-2">
              <h3 
                onClick={() => { setActiveNote(note); window.scrollTo(0,0); }}
                className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#4682B4] cursor-pointer transition-colors max-w-lg leading-tight"
              >
                {note.title}
              </h3>
            </div>
            <p className="text-sm text-[#555555] mb-4 font-medium italic serif">{note.subtitle}</p>
            <p className="text-sm text-[#333333] leading-relaxed mb-8 opacity-80 max-w-2xl">{note.abstract}</p>
            <button 
              onClick={() => { setActiveNote(note); window.scrollTo(0,0); }}
              className="text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-[#1a1a1a] px-6 py-3 hover:bg-[#4682B4] transition-all"
            >
              Read Full Report
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchNotes;
