"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "PROJECT 01",
      title: "Fintech Market Entry Strategy",
      date: "NOV 2024",
      desc: "A comprehensive market entry analysis for a fintech company looking to expand into underpenetrated segments of India's digital finance ecosystem. Applied structured strategy frameworks to identify opportunity whitespace and formulate a defensible go-to-market plan.",
      bullets: [
        "Conducted Porter's Five Forces and PESTLE analysis across India's digital payments, lending, and wealth-tech segments",
        "Identified 3 high-potential market segments with a combined addressable revenue potential of $50M+",
        "Formulated a data-driven GTM strategy with a 5-year growth trajectory, milestone targets, and risk mitigation playbook",
        "Synthesized findings into a 15-slide executive strategy deck for stakeholder presentation",
      ],
      tags: ["Porter's Five Forces", "PESTLE", "GTM Strategy", "Market Sizing"],
      color: "green"
    },
    {
      id: "PROJECT 02",
      title: "Quick Commerce Deep-Dive",
      date: "FEB 2025 – PRESENT",
      desc: "An in-depth strategic analysis of India's rapidly growing $5B+ quick commerce sector. Modeled after McKinsey-style consulting deliverables, this project dissects the competitive dynamics between Blinkit, Zepto, and Swiggy Instamart to surface strategic insights for investors and operators.",
      bullets: [
        "Structured analysis using a McKinsey-style issue tree framework across growth drivers, unit economics, and strategic risks",
        "Benchmarked dark store density, average order values, and customer acquisition costs across three major players",
        "Identified 4 key inflection points that will determine category winners over the next 3 years",
        "Synthesized findings into a 12-slide executive report with financial projections and scenario analysis",
      ],
      tags: ["McKinsey Framework", "Market Sizing", "Unit Economics", "Competitive Analysis"],
      color: "blue"
    },
    {
      id: "PROJECT 03",
      title: "Financial Literacy Initiative",
      date: "MAR 2025",
      desc: "A grassroots financial education program designed and delivered for underprivileged students in Delhi. The initiative combined curriculum design, behavioral economics principles, and community partnerships to improve financial decision-making outcomes among participants.",
      bullets: [
        "Designed 6 structured workshops covering budgeting, savings, credit, and personal investment basics for 150+ students",
        "Achieved 80% knowledge retention rate via interactive modules and real-world financial simulations",
        "Enabled 45+ participants to open savings accounts and adopt structured monthly money management plans",
        "Partnered with 2 NGOs to scale delivery and sustain the program beyond the initial cohort",
      ],
      tags: ["Social Impact", "Financial Education", "Financial Inclusion", "Curriculum Design"],
      color: "orange"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-48 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-[10px] font-bold tracking-widest uppercase mb-6">
          3 Case Studies
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
          Key Projects.
        </h1>
        <p className="text-text-dim font-sans text-lg max-w-2xl">
          Deep-dives, market entry playbooks, and strategic analyses demonstrating my approach to structured problem-solving and financial modeling.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:bg-card-hover transition-colors duration-300 flex flex-col h-full"
          >
            {/* Visual Accent Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-accent-${proj.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-text-muted mb-3">{proj.id}</div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-4 max-w-2xl group-hover:text-accent-${proj.color} transition-colors">
                  {proj.title}
                </h2>
              </div>
              <div className="shrink-0 flex items-center">
                <span className="font-mono text-[10px] tracking-wider text-text-muted uppercase">
                  {proj.date}
                </span>
              </div>
            </div>

            <p className="text-text-dim text-sm leading-relaxed mb-8 max-w-3xl">
              {proj.desc}
            </p>

            <ul className="space-y-3 mb-12 flex-grow">
              {proj.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed group-hover:text-text-dim transition-colors">
                  <span className="text-white/20 mt-1">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Footer Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/5 mt-auto">
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 font-mono text-[10px] tracking-wider bg-white/5 border border-white/10 rounded-full text-text-dim">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href="#" className="inline-flex items-center gap-2 group/btn shrink-0">
                <span className="font-mono text-[10px] font-bold tracking-widest text-text-muted group-hover/btn:text-white transition-colors uppercase">
                  View Case Study
                </span>
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-white/30 group-hover/btn:bg-white/5 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-text-muted group-hover/btn:text-white transition-colors" />
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
