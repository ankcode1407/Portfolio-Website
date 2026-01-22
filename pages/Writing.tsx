
import React, { useState } from 'react';

interface NoteContent {
  title: string;
  subtitle: string;
  category: string;
  body: React.ReactNode;
}

const BLACK_BOX_AUDIT_CONTENT: NoteContent = {
  title: 'The "Black Box" Audit: Reconciling High-Dimensional Accuracy with Human-Readable Trust',
  subtitle: 'A Reflection on the Transparency-Performance Gap in "Carbon Guardian 2.0"',
  category: 'AI governance',
  body: (
    <div className="space-y-8 serif text-[#1a1a1a] leading-relaxed">
      <p>
        In the domain of AI governance, there is often a regulatory assumption that "transparent" models are safer. The prevailing policy logic suggests that for high-stakes auditing—like checking corporate compliance—we should prefer simple, interpretable models (like linear regression) over opaque "black boxes." However, my recent work on Carbon Guardian 2.0 suggests that this trade-off is more dangerous than it appears. If we prioritize architectural transparency over performance, we may actually fail to govern effectively.
      </p>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">The Evidence: Complexity is Necessary for Detection</h3>
        <p>
          When developing our ESG auditing system, we faced a direct choice. We could use a "transparent" baseline model (TF-IDF + SVM) where every feature is essentially just a keyword count. It is easy to explain: "The model flagged this because you said 'emissions' too many times." But this transparency came at a cost: it only achieved 72.3% accuracy. It failed to catch "greenwashing," which relies on subtle linguistic manipulation—like using the word "aim" instead of "will" to avoid liability.
        </p>
        <p>
          To actually detect these nuanced deceptions, we had to move to a "black box" Transformer model (ClimateBERT). The accuracy jumped to 86.8%, allowing us to catch "Vague Targets" and "Ambiguous Baselines" that simpler models missed. The first principle here is clear: Complex deception requires complex, high-dimensional representations to detect. If regulations force us to use "simple" models for the sake of explainability, we effectively disarm the auditor against sophisticated bad actors.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">Managing the Trade-Off: The Role of Post-Hoc Auditing</h3>
        <p>
          Since we could not sacrifice the model's complexity without sacrificing its utility, we had to manufacture transparency "after the fact." We integrated SHAP (SHapley Additive exPlanations) to create an audit trail. This allowed us to visualize that the model was penalizing words like "strive" and "potential".
        </p>
        <p>
          However, this raises a critical policy question I am still grappling with: Is "highlighting words" the same as "explaining reasoning"? SHAP tells us which pixels or tokens mattered, but it doesn't fully explain the logic of the decision in a legal sense.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">Conclusion for Policy Design</h3>
        <p>
          From a student's perspective, demanding "interpretable architectures" in legislation might be a mistake. It forces a ceiling on capability. Instead, auditing frameworks should likely focus on outcome verification (Post-Hoc XAI) rather than process transparency (simple models). In Carbon Guardian, we found that we can have both high performance (86.8% accuracy) and adequate auditability (SHAP visualizations), but only if we accept that the "reasoning" will be an approximation, not a direct read-out of the machine's brain. The goal of policy should not be to make the machine think like a human, but to ensure it can prove to a human that it isn't lying.
        </p>
      </section>
    </div>
  ),
};

const SCALABILITY_CONSTRAINTS_CONTENT: NoteContent = {
  title: 'Scalability Constraints in ESG Disclosure Verification',
  subtitle: 'Analyzing the "Human vs. Machine" Bottleneck in Corporate Sustainability Auditing',
  category: 'AI governance',
  body: (
    <div className="space-y-8 serif text-[#1a1a1a] leading-relaxed">
      <p>
        As sustainability reporting shifts from voluntary marketing to mandatory compliance (e.g., EU CSRD), a critical logistical question arises: Who is going to read all these reports?
      </p>
      <p>
        With over 90% of S&P 500 companies now publishing ESG disclosures, the sheer volume of unstructured text exceeds human auditing capacity. Current manual verification is essentially a sampling exercise—auditors check a fraction of claims, leaving the vast majority of "greenwashing" undetected. My recent work on Carbon Guardian 2.0 suggests that while automated systems offer a theoretical solution to this scalability crisis, they introduce new risks regarding semantic precision.
      </p>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">The Limits of Manual Verification</h3>
        <p>
          From a first-principles perspective, manual auditing is unscalable because it is linear. If the number of corporate reports doubles, the number of required auditors must roughly double to maintain the same depth of scrutiny. In our dataset construction, it took expert annotators significant time to evaluate just 523 claims. Scaling this to the millions of claims generated annually by global corporations is economically impossible. This resource constraint forces rating agencies to rely on aggregate scores that obscure critical distinctions, such as the difference between a "Verified Claim" and a "Vague Target".
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">The Automation Paradox: Scale vs. Nuance</h3>
        <p>
          Automated approaches, like the fine-tuned ClimateBERT model we developed, solve the volume problem. They can process thousands of PDFs in the time it takes a human to read one executive summary. However, our research highlights a "Semantic Ambiguity" constraint.
        </p>
        <p>
          We found that automation struggles with boundary cases. For instance, the phrase "We aim to reduce emissions 50% from current levels" contains a specific number (Quantitative Target) but a vague baseline (Ambiguous Baseline). A human auditor instinctively knows this is misleading. An automated system, unless explicitly trained on such nuance, might classify it as a "Target" simply because it sees a percentage sign. This suggests that while AI can scale detection, it cannot yet fully scale judgment.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">The Hybrid "Triage" Model</h3>
        <p>
          The most viable path forward for regulation isn't to replace auditors but to weaponize them. Our findings support a "Human-in-the-Loop" architecture. In this model, the AI functions as a "High-Speed Triage Nurse." It scans the full corpus to flag high-probability risks—such as Scope 3 Omissions or high densities of Vague Targets—and funnels only these "red flags" to human experts.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">Implications for Harmonization</h3>
        <p>
          For tech policy, this implies that we don't just need standardized reporting formats; we need standardized machine-readable taxonomies. If jurisdictions like the EU and India define "greenwashing" differently, automated systems will fail to generalize. Scalability, therefore, is not just a technical challenge of building faster models, but a regulatory challenge of defining "truth" in a way that algorithms can consistently measure.
        </p>
      </section>
    </div>
  ),
};

const METRIC_DESIGN_CONTENT: NoteContent = {
  title: 'Metric Design for Non-Financial Reporting Assessment',
  subtitle: 'The Challenge of Quantifying "Truth" in a Text-Based World',
  category: 'Governance Frameworks',
  body: (
    <div className="space-y-8 serif text-[#1a1a1a] leading-relaxed">
      <p>
        {"\"We manage what we measure.\" But how do we measure the credibility of a sentence? In designing the Credibility Score ($C_{score}$) for Carbon Guardian 2.0, I realized that creating a metric for non-financial reporting is fundamentally different from financial auditing. Financial numbers are absolute ($1 is $1). Textual claims are relative and slippery. My research highlights that effective metric design is not just a math problem—it is a game-theory problem involving trade-offs between granularity and gamification."}
      </p>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">The Weighting Dilemma: All Claims Are Not Created Equal</h3>
        <p>
          A first-principle approach to auditing suggests that "Costly Signals" (actions that are hard to fake) should be weighted higher than "Cheap Talk." In our dataset, we found that standard sentiment analysis fails because it treats "We reduced emissions by 10%" and "We aim to reduce emissions" as equally positive. To fix this, we had to engineer a Weighted Taxonomy.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Quantitative Targets:</strong> Assigned a +1.0 weight because they are falsifiable (high cost).</li>
          <li><strong>Vague Targets:</strong> Assigned a -0.5 weight ("aim," "strive") because they are legally non-binding (low cost).</li>
          <li><strong>Scope Omissions:</strong> Assigned a -15 point absolute penalty, acknowledging that some silences are louder than words.</li>
        </ul>
        <p>
          This proves that a robust metric cannot just be an "average" of good and bad sentences; it must disproportionately punish omission and ambiguity to reflect real-world risk.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">The Risk of "Gaming" and Goodhart’s Law</h3>
        <p>
          A major concern in tech policy is Goodhart's Law: "When a measure becomes a target, it ceases to be a good measure." If regulators standardize a specific list of "green keywords," companies will simply optimize their reports to include those words without changing behavior.
        </p>
        <p>
          {"In Carbon Guardian, we addressed this by focusing on Syntactic Structures (e.g., Number + Baseline + Year) rather than just vocabulary. However, the risk remains. If our $C_{score}$ becomes a standard, companies might learn to provide \"technically precise\" but \"strategically meaningless\" targets just to get the +1.0 weight."}
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">Balancing Granularity with Usability</h3>
        <p>
          Finally, there is a tension between accuracy and utility. Our model uses 7 specific categories (e.g., Ambiguous Baseline, Offsets Only) to catch subtle greenwashing. But a regulator or an investor doesn't have time to review a 7-dimensional vector. They need a single number.
        </p>
        <p>
          We collapsed our complexity into a 0–100 scale for usability. While this loses some nuance, it creates a "comparable unit" that allows a policy-maker to instantly see that Company A (Score: 85) is more credible than Company B (Score: 32).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-sans font-semibold text-lg tracking-tight">Conclusion</h3>
        <p>
          Designing metrics for ESG is not about finding a "perfect" formula, but about creating a dynamic one. As corporate greenwashing tactics evolve (e.g., moving from "vague claims" to "fake data"), our scoring weights must adapt. Static metrics will be gamed; adaptive metrics are the only way to ensure long-term accountability.
        </p>
      </section>
    </div>
  ),
};

const WritingItem: React.FC<{
  title: string;
  subtitle: string;
  category: string;
  abstract: string;
  onRead: () => void;
}> = ({ title, subtitle, category, abstract, onRead }) => (
  <div className="py-12 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-1 tracking-tight leading-tight">{title}</h2>
    <p className="text-sm text-[#888888] mb-2 font-medium">{subtitle}</p>
    <div className="text-[10px] uppercase tracking-[0.2em] text-[#555555] mb-6 font-semibold">
      Analytical Note · {category}
    </div>
    <p className="text-sm text-[#333333] leading-relaxed max-w-2xl mb-6 serif italic opacity-90">
      {abstract}
    </p>
    <button 
      onClick={onRead}
      className="text-sm font-semibold text-[#4682B4] hover:underline flex items-center gap-2"
    >
      → Read analytical note
    </button>
  </div>
);

const Writing: React.FC = () => {
  const [activeNote, setActiveNote] = useState<NoteContent | null>(null);

  if (activeNote) {
    return (
      <article className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setActiveNote(null)}
          className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold mb-12 flex items-center gap-2 hover:text-[#1a1a1a] transition-colors"
        >
          ← Back to Analytical Writing
        </button>
        
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1a1a1a] mb-2 leading-tight">
            {activeNote.title}
          </h1>
          <p className="text-lg text-[#555555] mb-6 italic serif">
            {activeNote.subtitle}
          </p>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-semibold border-b border-gray-100 pb-4">
            {activeNote.category}
          </div>
        </header>

        <div className="pb-24">
          {activeNote.body}
        </div>
        
        <footer className="pt-12 border-t border-gray-100 text-xs text-[#888888] italic flex flex-col gap-4">
          <p>Institutional Research Dossier | Internal Use Only</p>
          <button 
            onClick={() => {
              setActiveNote(null);
              window.scrollTo(0, 0);
            }}
            className="text-[#4682B4] font-semibold uppercase tracking-widest text-left"
          >
            Return to index
          </button>
        </footer>
      </article>
    );
  }

  return (
    <section>
      <div className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Analytical Writing</h1>
        <p className="text-[#555555] max-w-xl text-sm leading-relaxed border-l-2 border-[#4682B4] pl-6 py-1">
          Short-form analytical notes examining governance, institutional capacity, and the limits of technical systems in regulatory contexts.
        </p>
      </div>

      <div className="space-y-0">
        <WritingItem 
          title='The "Black Box" Audit: Reconciling High-Dimensional Accuracy with Human-Readable Trust'
          subtitle='A Reflection on the Transparency-Performance Gap in "Carbon Guardian 2.0"'
          category="AI governance"
          abstract='Evaluates the regulatory assumption that architectural transparency is a prerequisite for safety. Drawing from Carbon Guardian 2.0, it argues that prioritizing simple architectures can disarm auditors against sophisticated deception.'
          onRead={() => {
            setActiveNote(BLACK_BOX_AUDIT_CONTENT);
            window.scrollTo(0, 0);
          }}
        />

        <WritingItem 
          title="Scalability Constraints in ESG Disclosure Verification"
          subtitle='Analyzing the "Human vs. Machine" Bottleneck in Corporate Sustainability Auditing'
          category="AI governance"
          abstract='Analyzes practical limitations of manual ESG auditing processes and examines whether automated approaches can meaningfully scale regulatory oversight. Discusses hybrid approaches combining human judgment with computational support.'
          onRead={() => {
            setActiveNote(SCALABILITY_CONSTRAINTS_CONTENT);
            window.scrollTo(0, 0);
          }}
        />
        
        <WritingItem 
          title="Metric Design for Non-Financial Reporting Assessment"
          subtitle='The Challenge of Quantifying "Truth" in a Text-Based World'
          category="Governance Frameworks"
          abstract='Explores methodological considerations in developing quantitative metrics for evaluating disclosure quality. Metric design involves trade-offs between comprehensiveness and usability, facing challenges in weighting diverse claim types.'
          onRead={() => {
            setActiveNote(METRIC_DESIGN_CONTENT);
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </section>
  );
};

export default Writing;
