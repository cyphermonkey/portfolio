"use client";

import { motion } from "framer-motion";
import { TickerBar } from "@/components/TickerBar";

export default function Education() {
  const tickerItems = [
    { key: "UNIVERSITY", value: "University of Delhi" },
    { key: "DEGREE", value: "BCom Hons · 2024–2027" },
    { key: "STANDING", value: "Top 10% · First Class" },
    { key: "SCHOOL", value: "KV Janakpuri · CBSE 2024" },
    { key: "OPEN TO", value: "Internships · Full-time Roles" },
    { key: "EMAIL", value: "vs862876@gmail.com" },
  ];

  return (
    <>
      <TickerBar label="EDU" color="blue" items={tickerItems} />

      <main className="mt-[14px]">
        {/* Page Header */}
        <div className="bg-card border border-border p-[14px] flex justify-between items-start mb-[14px]">
          <div>
            <h1 className="font-display font-extrabold text-[20px] text-foreground tracking-[0.5px] uppercase mb-[4px]">
              Education <span className="text-text-muted italic">& Contact</span>
            </h1>
            <div className="font-mono text-[10px] text-text-muted tracking-[1px] uppercase">
              EDU:006 · UNIVERSITY OF DELHI · 2024–2027
            </div>
          </div>
          <span className="bg-border text-foreground border border-border-lit px-[8px] py-[3px] text-[10px] font-bold tracking-[1px] uppercase whitespace-nowrap">
            TOP 10%
          </span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] mb-[14px]">

          {/* Edu Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-border bg-bg relative overflow-hidden group hover:border-border-lit transition-colors flex flex-col"
          >
            <div className="p-[14px] border-b border-border bg-bg-alt">
              <div className="font-display font-bold text-[18px] text-foreground tracking-[0.5px] mb-[2px]">
                Bachelor of Commerce (Honours)
              </div>
              <div className="text-[13px] text-text-dim mb-[4px]">
                University of Delhi
              </div>
              <div className="font-mono text-[10px] tracking-[1px] text-text-muted">
                2024 – 2027 · Currently Enrolled
              </div>
            </div>

            <div className="p-[14px] flex-1 flex flex-col gap-[6px] text-[12px]">
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">STANDING</span>
                <span className="font-medium text-accent-green">Top 10% · First Class with Distinction</span>
              </div>
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">STREAM</span>
                <span className="text-foreground">Commerce with Specialization in Finance</span>
              </div>
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">COURSEWORK</span>
                <span className="text-foreground">Financial Analysis, Corporate Finance, Managerial Economics, Statistics, Cost Accounting, Business Law</span>
              </div>
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">ACTIVITIES</span>
                <span className="text-foreground">NSS Member, CDF Fellow, Finance Society</span>
              </div>
            </div>

            <div className="border-t border-border p-[10px_14px] flex flex-wrap gap-[6px] bg-bg-alt mt-auto">
              <span className="px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap bg-accent-green/10 text-accent-green border-accent-green/20">TOP 10%</span>
              <span className="px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap bg-accent-blue/10 text-accent-blue border-accent-blue/20">FIRST CLASS DISTINCTION</span>
              <span className="px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap bg-accent-orange/10 text-accent-orange border-accent-orange/20">ENROLLED 2024–2027</span>
            </div>
          </motion.div>

          {/* Edu Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="border border-border bg-bg relative overflow-hidden group hover:border-border-lit transition-colors flex flex-col"
          >
            <div className="p-[14px] border-b border-border bg-bg-alt">
              <div className="font-display font-bold text-[18px] text-foreground tracking-[0.5px] mb-[2px]">
                Senior Secondary (Class XII, CBSE)
              </div>
              <div className="text-[13px] text-text-dim mb-[4px]">
                Kendriya Vidyalaya, Janakpuri
              </div>
              <div className="font-mono text-[10px] tracking-[1px] text-text-muted">
                Passed 2024
              </div>
            </div>

            <div className="p-[14px] flex-1 flex flex-col gap-[6px] text-[12px]">
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">BOARD</span>
                <span className="text-foreground">Central Board of Secondary Education (CBSE)</span>
              </div>
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">STREAM</span>
                <span className="text-foreground">Commerce with Mathematics</span>
              </div>
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">SUBJECTS</span>
                <span className="text-foreground">Accountancy, Business Studies, Economics, Mathematics, English</span>
              </div>
              <div className="flex border-b border-border/50 pb-[4px]">
                <span className="w-[90px] text-text-muted shrink-0">SCHOOL</span>
                <span className="text-foreground">Kendriya Vidyalaya Sangathan, Janakpuri, New Delhi</span>
              </div>
            </div>

            <div className="border-t border-border p-[10px_14px] flex flex-wrap gap-[6px] bg-bg-alt mt-auto">
              <span className="px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap bg-accent-blue/10 text-accent-blue border-accent-blue/20">CBSE BOARD</span>
              <span className="px-[8px] py-[3px] border text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20">COMMERCE STREAM</span>
            </div>
          </motion.div>

        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border mb-[14px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between p-[16px] border-b border-border gap-[10px]">
            <div>
              <h2 className="font-display font-bold text-[16px] text-foreground tracking-[0.5px]">Connect with Vaibhav</h2>
              <div className="text-[11px] text-text-dim mt-[4px]">Open to internships, consulting opportunities, and finance roles</div>
            </div>
            <span className="bg-accent-green/10 text-accent-green border border-accent-green/20 px-[8px] py-[3px] text-[10px] font-bold tracking-[1px] flex items-center gap-[6px] w-fit">
              <span className="w-[6px] h-[6px] rounded-full bg-accent-green animate-pulse"></span>
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 group/grid">
            <ContactLink href="mailto:vs862876@gmail.com" label="EMAIL" value="vs862876@gmail.com" icon="✉" color="orange" />
            <ContactLink href="https://www.linkedin.com/in/vaibhav-singh-finance" label="LINKEDIN" value="vaibhav-singh-finance" icon="in" color="blue" />
            <ContactLink href="https://github.com/cyphermonkey" label="GITHUB" value="cyphermonkey" icon="⌥" color="purple" />
            <ContactLink href="https://x.com/Xb42vaibha55760" label="TWITTER / X" value="@Xb42vaibha55760" icon="𝕏" color="cyan" />
          </div>
        </div>

        {/* Footer info text */}
        <div className="flex justify-between items-center text-[10px] text-text-muted tracking-[0.5px] mt-[14px] uppercase border-t border-border pt-[14px]">
          <span>VAIBHAV SINGH © 2026 · BCom Hons, University of Delhi</span>
          <div className="flex items-center gap-[4px]">
            <span>←</span><span>→</span> pages
          </div>
        </div>
      </main>
    </>
  );
}

function ContactLink({ href, icon, label, value, color }: { href: string; icon: string; label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    orange: "bg-accent-orange/10 text-accent-orange",
    blue: "bg-accent-blue/10 text-accent-blue",
    purple: "bg-accent-purple/10 text-accent-purple",
    cyan: "bg-accent-cyan/10 text-accent-cyan",
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-[12px] p-[16px] hover:bg-bg-hover border-b lg:border-r border-border last:border-r-0 last:border-b-0 sm:even:border-r-0 lg:even:border-r lg:border-b-0 transition-colors pointer-events-auto"
    >
      <div className={`w-[38px] h-[38px] shrink-0 rounded-[6px] flex items-center justify-center font-display font-black text-[18px] ${colorMap[color]}`}>
        {icon}
      </div>
      <div className="overflow-hidden">
        <div className="font-mono text-[9px] text-text-muted tracking-[1px] mb-[3px]">{label}</div>
        <div className="text-[12px] font-medium text-foreground truncate">{value}</div>
      </div>
    </a>
  );
}
