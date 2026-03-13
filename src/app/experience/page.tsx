"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: "EXP-001",
      role: "Strategy Consultant",
      org: "Satyawati Consulting Group",
      period: "Jan 2025 – Present",
      bullets: [
        "Scoped and led end-to-end business plan development for 5+ early-stage startup clients — synthesizing market sizing, competitive positioning, and financial projections into investor-ready strategic roadmaps",
        "Built robust financial models in Excel (3-statement models, DCF, scenario analysis) to stress-test startup unit economics and support fundraising and operational decision-making",
        "Developed 8+ client-facing pitch decks and strategy documents, translating complex analyses into clear executive narratives that drove stakeholder alignment and informed key business decisions",
        "Identified cost optimization levers across client operations, delivering data-backed recommendations that improved operational efficiency by 15% on average across engagements",
      ],
      tags: ["DCF", "Pitch Decks", "Financial Modeling", "GTM Strategy"],
      color: "orange"
    },
    {
      id: "EXP-002",
      role: "Active Member",
      org: "National Service Scheme (NSS), University of Delhi",
      period: "Aug 2024 – Present",
      bullets: [
        "Designed and coordinated 12+ structured literacy and awareness programs reaching 500+ community participants, applying project management frameworks to plan, execute, and measure impact",
        "Partnered with 3 local NGOs to secure resources and deliver sustainable education programs for 100+ underprivileged students, managing stakeholder relationships and cross-functional collaboration",
      ],
      tags: ["Project Management", "Social Impact", "Stakeholder Management"],
      color: "green"
    },
    {
      id: "EXP-003",
      role: "Social Entrepreneurship Fellow",
      org: "Connecting Dreams Foundation (CDF)",
      period: "Jan 2025 – Present",
      bullets: [
        "Developed financially sustainable social entrepreneurship models addressing community challenges, creating impact frameworks with measurable KPIs that benefited 200+ individuals",
        "Redesigned program delivery workflows, achieving a 25% reduction in cost-per-beneficiary while maintaining quality — demonstrating lean operational thinking in a resource-constrained environment",
      ],
      tags: ["KPI Frameworks", "Lean Operations", "Cost Optimization"],
      color: "blue"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-48 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
          Experience.
        </h1>
        <p className="text-text-dim font-sans text-lg max-w-2xl">
          A track record of driving strategic growth, optimizing capital allocation, and delivering actionable insights for startups and organizations.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:bg-card-hover transition-colors duration-300"
          >
            {/* Visual Accent Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-accent-${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-text-muted">{exp.id}</span>
                  <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-sm bg-accent-${exp.color}/10 text-accent-${exp.color}`}>
                    {exp.period}
                  </span>
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-1">{exp.role}</h2>
                <h3 className="text-text-dim font-medium">{exp.org}</h3>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed group-hover:text-text-dim transition-colors">
                  <span className={`text-accent-${exp.color} mt-1`}>▹</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {exp.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 font-mono text-[10px] tracking-wider bg-white/5 border border-white/10 rounded-full text-text-dim">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
