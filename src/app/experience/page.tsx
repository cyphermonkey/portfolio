"use client";

import { motion } from "framer-motion";
import { TickerBar } from "@/components/TickerBar";

export default function Experience() {
  const tickerItems = [
    { key: "ROLE", value: "Strategy Consultant @ Satyawati" },
    { key: "ROLE", value: "NSS Active Member @ DU" },
    { key: "ROLE", value: "Social Entrepreneurship Fellow @ CDF" },
    { key: "CLIENTS", value: "5+ Startups Advised" },
    { key: "PITCH DECKS", value: "8+ Delivered" },
    { key: "EFFICIENCY", value: "+15% Avg Gain" },
    { key: "COMMUNITY", value: "500+ People Reached" },
    { key: "COST CUT", value: "25% Per Beneficiary" },
  ];

  const experiences = [
    {
      id: "EXP-001",
      role: "Strategy Consultant",
      org: "Satyawati Consulting Group",
      period: "JAN 2025 – PRESENT",
      bullets: [
        "Led end-to-end business plan development for 5+ early-stage startup clients covering market sizing, competitive positioning, and financial projections",
        "Built Excel financial models — 3-statement, DCF, and scenario analysis — to stress-test startup unit economics and investor readiness",
        "Developed 8+ client-facing pitch decks translating complex quantitative analyses into clear, persuasive executive narratives",
        "Identified cost optimization levers delivering an average 15% efficiency improvement across client engagements",
        "Conducted industry deep-dives using Porter's Five Forces and PESTLE frameworks to inform strategic positioning",
      ],
      tags: [
        { label: "DCF Modeling", color: "orange" },
        { label: "Excel VBA", color: "yellow" },
        { label: "Strategy", color: "blue" },
        { label: "Pitch Decks", color: "green" },
        { label: "Financial Modeling", color: "purple" },
        { label: "Market Research", color: "cyan" },
      ],
      color: "orange"
    },
    {
      id: "EXP-002",
      role: "Active Member",
      org: "National Service Scheme (NSS), University of Delhi",
      period: "AUG 2024 – PRESENT",
      bullets: [
        "Designed and executed 12+ literacy and awareness programs reaching over 500 community participants across Delhi",
        "Partnered with 3 local NGOs to coordinate sustainable education delivery for 100+ underprivileged students",
        "Managed event logistics, volunteer coordination, and impact tracking across multi-week programs",
      ],
      tags: [
        { label: "Project Management", color: "blue" },
        { label: "NGO Partnerships", color: "cyan" },
        { label: "Community Outreach", color: "green" },
      ],
      color: "blue"
    },
    {
      id: "EXP-003",
      role: "Social Entrepreneurship Fellow",
      org: "Connecting Dreams Foundation (CDF)",
      period: "JAN 2025 – PRESENT",
      bullets: [
        "Developed financially sustainable social entrepreneurship models benefiting 200+ individuals across underserved communities",
        "Redesigned program delivery workflows achieving a 25% reduction in cost-per-beneficiary through lean operations",
        "Applied business strategy frameworks to social impact contexts — bridging commercial viability with community benefit",
      ],
      tags: [
        { label: "Social Impact", color: "green" },
        { label: "Lean Operations", color: "purple" },
        { label: "Social Entrepreneurship", color: "orange" },
      ],
      color: "green"
    }
  ];

  return (
    <>
      <TickerBar label="EXP" color="orange" items={tickerItems} />

      <main className="mt-[14px]">
        {/* Page Header */}
        <div className="bg-card border border-border p-[14px] flex justify-between items-start mb-[14px]">
          <div>
            <h1 className="font-display font-extrabold text-[20px] text-foreground tracking-[0.5px] uppercase mb-[4px]">
              Work <span className="text-text-muted italic">Experience</span>
            </h1>
            <div className="font-mono text-[10px] text-text-muted tracking-[1px] uppercase">
              EXP:003 · 3 ROLES · JAN 2025 – PRESENT
            </div>
          </div>
          <span className="bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-[8px] py-[3px] text-[10px] font-bold tracking-[1px] uppercase whitespace-nowrap">
            ACTIVE
          </span>
        </div>

        {/* Content */}
        <div className="bg-card border border-border p-[14px] flex flex-col gap-[14px]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-border bg-bg relative overflow-hidden group hover:border-border-lit transition-colors"
            >
              {/* Exp Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-[10px] p-[14px] border-b border-border bg-bg-alt">
                <div>
                  <h2 className="font-display font-bold text-[18px] text-foreground mb-[2px] tracking-[0.5px]">
                    {exp.role}
                  </h2>
                  <h3 className="text-text-dim text-[12px]">
                    {exp.org}
                  </h3>
                </div>
                <div className="flex items-center gap-[10px] whitespace-nowrap">
                  <span className="font-mono text-[10px] tracking-[1px] text-text-muted shrink-0">
                    {exp.period}
                  </span>
                  <span className={`bg-accent-${exp.color}/10 text-accent-${exp.color} border border-accent-${exp.color}/20 px-[8px] py-[3px] text-[10px] font-bold tracking-[1px] uppercase flex items-center gap-[4px]`}>
                    ● ACTIVE
                  </span>
                </div>
              </div>

              {/* Exp Body */}
              <div className="p-[14px]">
                <ul className="flex flex-col gap-[10px]">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex text-text-dim text-[13px] leading-relaxed gap-[10px]">
                      <span className="text-text-muted mt-[4px]">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exp Footer */}
              <div className="border-t border-border p-[10px_14px] flex flex-wrap gap-[6px] bg-bg-alt">
                {exp.tags.map((tag, i) => {
                  const colorMap: Record<string, string> = {
                    orange: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
                    blue: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
                    green: "text-accent-green bg-accent-green/10 border-accent-green/20",
                    yellow: "text-accent-yellow bg-accent-yellow/10 border-accent-yellow/20",
                    purple: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
                    cyan: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
                  };
                  return (
                    <span key={i} className={`px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap ${colorMap[tag.color]}`}>
                      {tag.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info text */}
        <div className="flex justify-between items-center text-[10px] text-text-muted tracking-[0.5px] mt-[14px] uppercase border-t border-border pt-[14px]">
          <span>VAIBHAV SINGH © 2026 · 3 Active Roles</span>
          <div className="flex items-center gap-[4px]">
            <span>←</span><span>→</span> pages
          </div>
        </div>
      </main>
    </>
  );
}
