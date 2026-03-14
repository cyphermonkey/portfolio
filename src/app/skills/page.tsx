"use client";

import { motion } from "framer-motion";
import { TickerBar } from "@/components/TickerBar";

export default function Skills() {
  const tickerItems = [
    { key: "EXCEL", value: "92% Proficiency" },
    { key: "MARKET RESEARCH", value: "90%" },
    { key: "DCF", value: "88%" },
    { key: "BUSINESS PLAN", value: "88%" },
    { key: "3-STATEMENT", value: "85%" },
    { key: "COMPETITIVE ANALYSIS", value: "88%" },
    { key: "PYTHON", value: "70%" },
    { key: "POWER BI", value: "62%" },
    { key: "BLOOMBERG", value: "50%" },
  ];

  const skillCategories = [
    {
      title: "Financial Modeling",
      sub: "VALUATION · ANALYSIS · FORECASTING",
      icon: "📊",
      color: "orange",
      skills: [
        { name: "DCF Valuation", pct: 88, colorClass: "bar-o" },
        { name: "3-Statement Modeling", pct: 85, colorClass: "bar-o" },
        { name: "Relative Valuation", pct: 82, colorClass: "bar-o" },
        { name: "Financial Statement Analysis", pct: 85, colorClass: "bar-o" },
        { name: "Scenario & Sensitivity", pct: 80, colorClass: "bar-o" },
        { name: "Equity Research", pct: 78, colorClass: "bar-o" },
      ]
    },
    {
      title: "Tech Tools",
      sub: "EXCEL · PYTHON · SQL · POWER BI",
      icon: "⚙",
      color: "yellow",
      skills: [
        { name: "Excel (VBA, Pivot, Modeling)", pct: 92, colorClass: "bar-y" },
        { name: "PowerPoint", pct: 88, colorClass: "bar-y" },
        { name: "Python (Pandas, NumPy)", pct: 70, colorClass: "bar-y" },
        { name: "SQL", pct: 65, colorClass: "bar-y" },
        { name: "Power BI", pct: 62, colorClass: "bar-y" },
        { name: "Bloomberg Terminal", pct: 50, colorClass: "bar-y" },
      ]
    },
    {
      title: "Research & Analysis",
      sub: "MARKET RESEARCH · FRAMEWORKS",
      icon: "🔍",
      color: "blue",
      skills: [
        { name: "Market Research", pct: 90, colorClass: "bar-b" },
        { name: "Competitive Analysis", pct: 88, colorClass: "bar-b" },
        { name: "Porter's Five Forces", pct: 85, colorClass: "bar-b" },
        { name: "PESTLE Analysis", pct: 82, colorClass: "bar-b" },
        { name: "Quantitative Analysis", pct: 75, colorClass: "bar-b" },
        { name: "Data Visualization", pct: 72, colorClass: "bar-b" },
      ]
    },
    {
      title: "Consulting",
      sub: "STRATEGY · CLIENT MGMT · DELIVERY",
      icon: "💼",
      color: "green",
      skills: [
        { name: "Business Plan Development", pct: 88, colorClass: "bar-g" },
        { name: "Strategic Planning", pct: 85, colorClass: "bar-g" },
        { name: "Stakeholder Communication", pct: 82, colorClass: "bar-g" },
        { name: "Client Engagement", pct: 80, colorClass: "bar-g" },
        { name: "Project Management", pct: 78, colorClass: "bar-g" },
        { name: "Cross-functional Collaboration", pct: 80, colorClass: "bar-g" },
      ]
    }
  ];

  const colorMap: Record<string, string> = {
    orange: "bg-accent-orange/10 text-accent-orange",
    yellow: "bg-accent-yellow/10 text-accent-yellow",
    blue: "bg-accent-blue/10 text-accent-blue",
    green: "bg-accent-green/10 text-accent-green",
  };

  const bgMap: Record<string, string> = {
    "bar-o": "bg-accent-orange",
    "bar-y": "bg-accent-yellow",
    "bar-b": "bg-accent-blue",
    "bar-g": "bg-accent-green",
  };

  return (
    <>
      <TickerBar label="SKILLS" color="yellow" items={tickerItems} />

      <main className="mt-[14px]">
        {/* Page Header */}
        <div className="bg-card border border-border p-[14px] flex justify-between items-start mb-[14px]">
          <div>
            <h1 className="font-display font-extrabold text-[20px] text-foreground tracking-[0.5px] uppercase mb-[4px]">
              Skills <span className="text-text-muted italic">& Tools</span>
            </h1>
            <div className="font-mono text-[10px] text-text-muted tracking-[1px] uppercase">
              CAP:004 · 4 CATEGORIES · 24 SKILLS
            </div>
          </div>
          <span className="bg-border text-foreground border border-border-lit px-[8px] py-[3px] text-[10px] font-bold tracking-[1px] uppercase whitespace-nowrap">
            24 SKILLS
          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[14px]">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-border bg-bg relative overflow-hidden group hover:border-border-lit transition-colors flex flex-col"
            >
              <div className="p-[14px] border-b border-border bg-bg-alt flex items-center gap-[12px]">
                <div className={`w-[32px] h-[32px] rounded-[6px] flex items-center justify-center text-[16px] shrink-0 ${colorMap[category.color]}`}>
                  {category.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-[16px] text-foreground tracking-[0.5px] mb-[2px]">
                    {category.title}
                  </div>
                  <div className="font-mono text-[9px] text-text-muted tracking-[1px]">
                    {category.sub}
                  </div>
                </div>
              </div>

              <div className="p-[14px] flex flex-col gap-[10px]">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-[10px]">
                    <span className="text-[12px] text-foreground w-[130px] sm:w-[150px] shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">
                      {skill.name}
                    </span>
                    <div className="h-[4px] bg-border flex-1 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className={`h-full ${bgMap[skill.colorClass]}`} 
                      />
                    </div>
                    <span className="font-mono text-[10px] text-text-dim w-[28px] text-right shrink-0">
                      {skill.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info text */}
        <div className="flex justify-between items-center text-[10px] text-text-muted tracking-[0.5px] mt-[14px] uppercase border-t border-border pt-[14px]">
          <span>VAIBHAV SINGH © 2026 · 4 Categories · 24 Skills</span>
          <div className="flex items-center gap-[4px]">
            <span>←</span><span>→</span> pages
          </div>
        </div>
      </main>
    </>
  );
}
