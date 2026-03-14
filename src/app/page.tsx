"use client";

import Image from "next/image";
import { TickerBar } from "@/components/TickerBar";
import { StatBox } from "@/components/StatBox";
import { motion } from "framer-motion";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

export default function Home() {
  const tickerItems = [
    { key: "ROLE", value: "Strategy Consultant" },
    { key: "CLIENTS", value: "5+ Startups" },
    { key: "EFFICIENCY", value: "+15% Avg" },
    { key: "MODELS", value: "DCF · 3-Stmt · Scenario" },
    { key: "PITCH DECKS", value: "8+ Delivered" },
    { key: "COMMUNITY", value: "500+ Impacted" },
    { key: "WORKSHOPS", value: "6 Literacy Sessions" },
    { key: "EDU", value: "BCom Hons · DU · Top 10%" },
    { key: "FOCUS", value: "Finance · Quant · AM · BD" },
    { key: "TOOLS", value: "Excel · Python · SQL · Power BI" },
    { key: "OPEN TO", value: "Internships · Full-time Roles" },
  ];

  return (
    <>
      <TickerBar label="INDEX" color="orange" items={tickerItems} />

      <main className="mt-[14px]">
        {/* Hero Banner Area */}
        <div className="bg-card border border-border p-[16px] mb-[14px] flex flex-col md:flex-row gap-[16px]">
          <div className="w-[120px] h-[120px] shrink-0 border border-border-lit relative overflow-hidden bg-bg">
            <Image 
              src="/photo.png" 
              alt="Vaibhav Singh" 
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="font-display font-extrabold text-[34px] leading-tight tracking-[0.5px] mb-[4px] text-foreground">
              Vaibhav Singh<span style={{ color: "var(--color-accent-orange)" }}>.</span>
            </h1>
            <h2 className="text-text-dim text-[13px] tracking-[0.5px] uppercase mb-[10px]">
              Strategy Consultant / Portfolio Analyst / BD
            </h2>
            <div className="flex items-center gap-[10px] text-[11px]">
              <div className="px-[8px] py-[3px] bg-accent-green/10 text-accent-green border border-accent-green/20 rounded-[3px] font-semibold tracking-[1px] uppercase">
                Open to M&A / PE / VC Roles
              </div>
              <div className="flex items-center gap-[4px] text-text-muted">
                <span>⚡</span>
                <span>AVAILABLE NOW</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex gap-[2px] self-end xl:w-[260px] flex-wrap justify-end">
            <div className="w-[80px] h-[54px] bg-bg border border-border flex flex-col justify-center px-[10px]">
              <div className="text-[9px] text-text-muted font-bold tracking-[1px]">CLIENTS</div>
              <div className="text-[18px] text-accent-green font-display font-bold">5+</div>
              <div className="text-[8px] text-text-dim">startup clients</div>
            </div>
            <div className="w-[80px] h-[54px] bg-bg border border-border flex flex-col justify-center px-[10px]">
              <div className="text-[9px] text-text-muted font-bold tracking-[1px]">EFFICIENCY</div>
              <div className="text-[18px] text-accent-cyan font-display font-bold">15%</div>
              <div className="text-[8px] text-text-dim">avg gain</div>
            </div>
            <div className="w-[80px] h-[54px] bg-bg border border-border flex flex-col justify-center px-[10px]">
              <div className="text-[9px] text-text-muted font-bold tracking-[1px]">DECKS</div>
              <div className="text-[18px] text-accent-orange font-display font-bold">8+</div>
              <div className="text-[8px] text-text-dim">investor ready</div>
            </div>
            <div className="w-[80px] h-[54px] bg-bg border border-border flex flex-col justify-center px-[10px]">
              <div className="text-[9px] text-text-muted font-bold tracking-[1px]">REACH</div>
              <div className="text-[18px] text-accent-blue font-display font-bold">500+</div>
              <div className="text-[8px] text-text-dim">people impacted</div>
            </div>
            <div className="w-[80px] h-[54px] bg-bg border border-border flex flex-col justify-center px-[10px]">
              <div className="text-[9px] text-text-muted font-bold tracking-[1px]">WORKSHOPS</div>
              <div className="text-[18px] text-accent-yellow font-display font-bold">6</div>
              <div className="text-[8px] text-text-dim">financial literacy</div>
            </div>
            <div className="w-[80px] h-[54px] bg-bg border border-border flex flex-col justify-center px-[10px]">
              <div className="text-[9px] text-text-muted font-bold tracking-[1px]">COST CUT</div>
              <div className="text-[18px] text-accent-purple font-display font-bold">25%</div>
              <div className="text-[8px] text-text-dim">per beneficiary</div>
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-[10px] mb-[14px]">
          <HeroLink href="mailto:vs862876@gmail.com" label="EMAIL" value="vs862876@gmail.com" icon="✉" color="orange" />
          <HeroLink href="https://www.linkedin.com/in/vaibhav-singh-finance" label="LINKEDIN" value="vaibhav-singh-finance" icon="in" color="blue" />
          <HeroLink href="https://github.com/cyphermonkey" label="GITHUB" value="cyphermonkey" icon="⌥" color="purple" />
          <HeroLink href="https://x.com/Xb42vaibha55760" label="TWITTER" value="@Xb42vaibha55760" icon="𝕏" color="cyan" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          {/* Left Panel */}
          <div className="bg-card border border-border p-[14px]">
            <div className="flex justify-between items-center mb-[14px] pb-[10px] border-b border-border">
              <span className="bg-accent-orange/10 text-accent-orange px-[6px] py-[2px] text-[10px] font-bold tracking-[1px]">ABOUT ME</span>
              <span className="text-text-muted font-mono text-[10px] tracking-[1px]">SYS:001</span>
            </div>

            <p className="text-text-dim leading-relaxed mb-[20px]">
              BCom (Hons) 2nd year at University of Delhi, Top 10%. Strategy consultant, aspiring portfolio manager and quant researcher. I build financial models, craft investor-ready roadmaps, and analyze markets at the intersection of finance and technology.
            </p>

            <div className="mb-[20px]">
              <div className="font-display font-bold text-[11px] tracking-[1px] text-text-dim mb-[8px]">PROFILE</div>
              <div className="flex flex-col gap-[4px] text-[12px]">
                <ProfileRow akey="DEGREE" aval="BCom Hons · DU · 2024–27" />
                <ProfileRow akey="STANDING" aval="★ Top 10% · First Class" color="green" />
                <ProfileRow akey="LOCATION" aval="New Delhi, India" />
                <ProfileRow akey="PHONE" aval="+91 8595102352" />
                <ProfileRow akey="STATUS" aval="Open to Opportunities" color="orange" />
              </div>
            </div>

            <div className="mb-[20px]">
              <div className="font-display font-bold text-[11px] tracking-[1px] text-text-dim mb-[8px]">FOCUS AREAS</div>
              <div className="flex flex-wrap gap-[6px]">
                <Chip text="Portfolio Mgmt" color="orange" />
                <Chip text="Asset Management" color="blue" />
                <Chip text="Equity Research" color="green" />
                <Chip text="Quant Finance" color="purple" />
                <Chip text="Business Dev" color="cyan" />
                <Chip text="DCF Modeling" color="yellow" />
                <Chip text="Startup Strategy" color="orange" />
                <Chip text="VC / PE" color="purple" />
              </div>
            </div>

            <div>
              <div className="font-display font-bold text-[11px] tracking-[1px] text-text-dim mb-[8px]">INDUSTRIES</div>
              <div className="flex flex-wrap gap-[6px]">
                <Chip text="Fintech" dim />
                <Chip text="BFSI" dim />
                <Chip text="E-commerce" dim />
                <Chip text="Quick Commerce" dim />
                <Chip text="EdTech" dim />
                <Chip text="Social Enterprise" dim />
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-card border border-border p-[14px]">
            <div className="flex justify-between items-center mb-[14px] pb-[10px] border-b border-border">
              <span className="bg-accent-green/10 text-accent-green px-[6px] py-[2px] text-[10px] font-bold tracking-[1px]">KEY METRICS</span>
              <span className="text-text-muted font-mono text-[10px] tracking-[1px]">DATA:002</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] mb-[20px]">
              <StatBox label="CLIENTS SERVED" value={5} suffix="+" sub="startup clients" colorClass="text-accent-green" delay={0.1} />
              <StatBox label="EFFICIENCY GAIN" value={15} suffix="%" sub="across engagements" colorClass="text-accent-cyan" delay={0.2} />
              <StatBox label="PITCH DECKS" value={8} suffix="+" sub="strategy documents" colorClass="text-accent-orange" delay={0.3} />
              <StatBox label="COMMUNITY REACH" value={500} suffix="+" sub="people impacted" colorClass="text-accent-blue" delay={0.4} />
              <StatBox label="WORKSHOPS" value={6} sub="financial literacy" colorClass="text-accent-yellow" delay={0.5} />
              <StatBox label="COST REDUCED" value={25} suffix="%" sub="per beneficiary" colorClass="text-accent-purple" delay={0.6} />
            </div>

            <div className="mt-8 border-t border-border pt-4">
              <div className="font-display font-bold text-[11px] tracking-[1px] text-text-dim mb-[12px]">CAPABILITIES</div>
              <div className="flex flex-col gap-4">
                <InteractiveCapabilityCard 
                  title="Financial Modeling"
                  desc="DCF Valuation, 3-Statement Modeling, Scenario & Sensitivity Analysis"
                  icon="📈"
                  color="orange"
                  delay={0.1}
                />
                <InteractiveCapabilityCard 
                  title="Research & Strategy"
                  desc="Porter's Five Forces, PESTLE, Quantitative & Statistical Analysis"
                  icon="🔍"
                  color="purple"
                  delay={0.2}
                />
              </div>
            </div>
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

// Subcomponents

function HeroLink({ href, icon, label, value, color }: { href: string; icon: string; label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    orange: "bg-accent-orange/10 text-accent-orange",
    blue: "bg-accent-blue/10 text-accent-blue",
    purple: "bg-accent-purple/10 text-accent-purple",
    cyan: "bg-accent-cyan/10 text-accent-cyan",
  };

  return (
    <Link href={href} target="_blank" className="flex items-center gap-[10px] bg-card border border-border p-[8px] pr-[16px] flex-1 min-w-[200px] hover:bg-bg-alt hover:border-border-lit transition-colors">
      <div className={`w-[36px] h-[36px] flex items-center justify-center font-display font-bold text-[18px] shrink-0 ${colorMap[color]}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="text-[9px] text-text-muted font-bold tracking-[1px]">{label}</div>
        <div className="text-[12px] font-semibold text-foreground">{value}</div>
      </div>
    </Link>
  );
}

function ProfileRow({ akey, aval, color }: { akey: string; aval: string; color?: string }) {
  const colorMap: Record<string, string> = {
    green: "text-accent-green",
    orange: "text-accent-orange",
  };

  return (
    <div className="flex border-b border-border/50 pb-[4px]">
      <span className="w-[80px] text-text-muted shrink-0">{akey}</span>
      <span className={`font-medium ${color ? colorMap[color] : "text-foreground"}`}>{aval}</span>
    </div>
  );
}

function Chip({ text, color, dim = false }: { text: string; color?: string; dim?: boolean }) {
  const colorMap: Record<string, string> = {
    orange: "text-accent-orange bg-accent-orange/10",
    blue: "text-accent-blue bg-accent-blue/10",
    green: "text-accent-green bg-accent-green/10",
    purple: "text-accent-purple bg-accent-purple/10",
    cyan: "text-accent-cyan bg-accent-cyan/10",
    yellow: "text-accent-yellow bg-accent-yellow/10",
  };

  const appliedClass = dim 
    ? "text-text-dim bg-border/40" 
    : (color ? colorMap[color] : "text-foreground bg-border");

  return (
    <span className={`px-[8px] py-[3px] text-[10px] font-semibold tracking-[0.5px] whitespace-nowrap ${appliedClass}`}>
      {text}
    </span>
  );
}

function InteractiveCapabilityCard({ title, desc, icon, color, delay }: { title: string; desc: string; icon: string; color: string; delay: number }) {
  const boundingRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const colorMap: Record<string, string> = {
    orange: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
    blue: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    green: "text-accent-green bg-accent-green/10 border-accent-green/20",
    purple: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  };

  const gradientMap: Record<string, string> = {
    orange: "rgba(255, 110, 26, 0.1)",
    blue: "rgba(46, 144, 250, 0.1)",
    green: "rgba(18, 183, 106, 0.1)",
    purple: "rgba(124, 58, 237, 0.1)",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-bg border border-border p-[14px] group/card hover:border-border-lit cursor-default"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientMap[color]}, transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex gap-[12px]">
        <div className={`w-[36px] h-[36px] flex items-center justify-center shrink-0 border ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-display font-bold text-[14px] leading-tight text-foreground mb-[4px]">{title}</h3>
          <p className="text-text-dim text-[11px] leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
