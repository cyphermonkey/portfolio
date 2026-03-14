"use client";

import { motion } from "framer-motion";
import { TickerBar } from "@/components/TickerBar";


export default function Projects() {
  const tickerItems = [
    { key: "PROJECT 01", value: "Fintech Market Entry Strategy" },
    { key: "PROJECT 02", value: "Quick Commerce Deep-Dive" },
    { key: "PROJECT 03", value: "Financial Literacy Initiative" },
    { key: "FRAMEWORK", value: "Porter's 5 · PESTLE · McKinsey" },
    { key: "TAM", value: "$50M+ Identified" },
    { key: "IMPACT", value: "150+ Students Reached" },
  ];

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
      tags: [
        { label: "Porter's Five Forces", color: "green" },
        { label: "PESTLE", color: "blue" },
        { label: "GTM Strategy", color: "orange" },
        { label: "Market Sizing", color: "purple" }
      ],
      color: "purple"
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
      tags: [
        { label: "McKinsey Framework", color: "yellow" },
        { label: "Market Sizing", color: "cyan" },
        { label: "Unit Economics", color: "purple" },
        { label: "Competitive Analysis", color: "blue" }
      ],
      color: "cyan"
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
      tags: [
        { label: "Social Impact", color: "green" },
        { label: "Financial Education", color: "blue" },
        { label: "Financial Inclusion", color: "red" },
        { label: "Curriculum Design", color: "cyan" }
      ],
      color: "green"
    }
  ];

  return (
    <>
      <TickerBar label="PROJECTS" color="purple" items={tickerItems} />

      <main className="mt-[14px]">
        {/* Page Header */}
        <div className="bg-card border border-border p-[14px] flex justify-between items-start mb-[14px]">
          <div>
            <h1 className="font-display font-extrabold text-[20px] text-foreground tracking-[0.5px] uppercase mb-[4px]">
              Key <span className="text-text-muted italic">Projects</span>
            </h1>
            <div className="font-mono text-[10px] text-text-muted tracking-[1px] uppercase">
              WORK:005 · 3 PROJECTS · 2024–2025
            </div>
          </div>
          <span className="bg-border text-foreground border border-border-lit px-[8px] py-[3px] text-[10px] font-bold tracking-[1px] uppercase whitespace-nowrap">
            3 CASE STUDIES
          </span>
        </div>

        {/* Content */}
        <div className="bg-card border border-border p-[14px] flex flex-col gap-[14px]">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-border bg-bg relative overflow-hidden group hover:border-border-lit transition-colors"
            >
              {/* Proj Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-[10px] p-[14px] border-b border-border bg-bg-alt">
                <div>
                  <div className="font-mono text-[10px] tracking-[1px] text-text-muted mb-[2px]">
                    {proj.id}
                  </div>
                  <h2 className="font-display font-bold text-[18px] text-foreground tracking-[0.5px]">
                    {proj.title}
                  </h2>
                </div>
                <div className="flex items-center gap-[10px] whitespace-nowrap">
                  <span className="font-mono text-[10px] tracking-[1px] text-text-muted shrink-0 bg-card px-[6px] py-[2px] border border-border">
                    {proj.date}
                  </span>
                </div>
              </div>

              {/* Proj Body */}
              <div className="p-[14px]">
                <div className="text-text-dim text-[13px] leading-relaxed mb-[14px] p-[10px] bg-card border border-border">
                  {proj.desc}
                </div>
                <ul className="flex flex-col gap-[10px]">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i} className="flex text-text-dim text-[13px] leading-relaxed gap-[10px]">
                      <span className="text-text-muted mt-[4px]">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proj Footer */}
              <div className="border-t border-border p-[10px_14px] flex flex-col sm:flex-row sm:items-center justify-between gap-[10px] bg-bg-alt">
                <div className="flex flex-wrap gap-[6px]">
                  {proj.tags.map((tag, i) => {
                    const colorMap: Record<string, string> = {
                      orange: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
                      blue: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
                      green: "text-accent-green bg-accent-green/10 border-accent-green/20",
                      yellow: "text-accent-yellow bg-accent-yellow/10 border-accent-yellow/20",
                      purple: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
                      cyan: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
                      red: "text-accent-red bg-accent-red/10 border-accent-red/20",
                    };
                    return (
                      <span key={i} className={`px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap ${colorMap[tag.color]}`}>
                        {tag.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info text */}
        <div className="flex justify-between items-center text-[10px] text-text-muted tracking-[0.5px] mt-[14px] uppercase border-t border-border pt-[14px]">
          <span>VAIBHAV SINGH © 2026 · 3 Projects · 2024–2025</span>
          <div className="flex items-center gap-[4px]">
            <span>←</span><span>→</span> pages
          </div>
        </div>
      </main>
    </>
  );
}
