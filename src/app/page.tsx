"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatBox } from "@/components/StatBox";
import { ArrowUpRight, Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-48 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-max backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-text-dim font-medium uppercase">
              Open to Opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] text-white">
            Vaibhav <span className="text-text-muted italic">Singh.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-dim font-sans max-w-2xl leading-relaxed mt-4">
            BCom (Hons) student at the University of Delhi with a strong interest in quant trading, strategy consulting, and investment banking. I build financial models, craft investor-ready roadmaps, and leverage data-driven strategies to navigate complex markets.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <SocialLink href="mailto:vs862876@gmail.com" icon={<Mail size={18} />} label="Email" color="group-hover:text-accent-orange group-hover:border-accent-orange/30 group-hover:bg-accent-orange/10" />
            <SocialLink href="https://www.linkedin.com/in/vaibhav-singh-finance" icon={<Linkedin size={18} />} label="LinkedIn" color="group-hover:text-accent-blue group-hover:border-accent-blue/30 group-hover:bg-accent-blue/10" />
            <SocialLink href="https://github.com/cyphermonkey" icon={<Github size={18} />} label="GitHub" color="group-hover:text-accent-purple group-hover:border-accent-purple/30 group-hover:bg-accent-purple/10" />
            <SocialLink href="https://x.com/Xb42vaibha55760" icon={<Twitter size={18} />} label="Twitter" color="group-hover:text-accent-cyan group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10" />
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="col-span-1 lg:col-span-5 relative h-[500px] rounded-3xl overflow-hidden glass border-white/10"
        >
          <Image 
            src="/photo.png" 
            alt="Vaibhav Singh"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-700"
            unoptimized
          />
        </motion.div>
      </section>

      {/* Metrics Grid */}
      <section className="mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px bg-white/10 flex-1" />
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-text-muted uppercase">Key Metrics</h2>
          <div className="h-px bg-white/10 flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatBox label="Clients Served" value={5} suffix="+" sub="startup engagements" colorClass="text-accent-green" delay={0.1} />
          <StatBox label="Efficiency Gain" value={15} suffix="%" sub="avg gain across engagements" colorClass="text-accent-cyan" delay={0.2} />
          <StatBox label="Pitch Decks" value={8} suffix="+" sub="investor-ready documents" colorClass="text-accent-orange" delay={0.3} />
          <StatBox label="Community Reach" value={500} suffix="+" sub="people impacted" colorClass="text-accent-blue" delay={0.4} />
          <StatBox label="Workshops" value={6} sub="financial literacy sessions" colorClass="text-accent-yellow" delay={0.5} />
          <StatBox label="Cost Reduced" value={25} suffix="%" sub="per beneficiary" colorClass="text-accent-purple" delay={0.6} />
        </div>
      </section>

      {/* Strategic Capabilities */}
      <section className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px bg-white/10 flex-1" />
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-text-muted uppercase">Core Competencies</h2>
          <div className="h-px bg-white/10 flex-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group/grid">
          <InteractiveCapabilityCard 
            title="Financial Modeling"
            desc="DCF Valuation, Relative Valuation, 3-Statement Modeling, Financial Statement Analysis, Scenario & Sensitivity Analysis, Equity Research"
            icon="📈"
            color="orange"
            delay={0.1}
          />
          <InteractiveCapabilityCard 
            title="Technical Tools"
            desc="Advanced Excel (Financial Modeling, Pivot Tables, VBA), PowerPoint, SQL, Python (Pandas, NumPy), Power BI, Bloomberg Terminal"
            icon="⚙️"
            color="blue"
            delay={0.2}
          />
          <InteractiveCapabilityCard 
            title="Research & Strategy"
            desc="Market Research, Industry & Competitive Analysis, Porter's Five Forces, PESTLE, Quantitative Analysis, Data Visualization, Statistical Analysis"
            icon="🔍"
            color="purple"
            delay={0.3}
          />
          <InteractiveCapabilityCard 
            title="Consulting & Leadership"
            desc="Business Plan Development, Strategic Planning, Stakeholder Communication, Client Engagement, Project Management, Cross-functional Collaboration"
            icon="💼"
            color="green"
            delay={0.4}
          />
        </div>
      </section>

    </main>
  );
}

// Subcomponents

import { useState, useRef, MouseEvent } from "react";

function InteractiveCapabilityCard({ title, desc, icon, color, delay }: { title: string; desc: string; icon: string; color: string; delay: number }) {
  const boundingRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  // Radial gradient colors mapped to the accent
  const gradientMap: Record<string, string> = {
    orange: "rgba(255, 110, 26, 0.15)",
    blue: "rgba(46, 144, 250, 0.15)",
    green: "rgba(18, 183, 106, 0.15)",
    purple: "rgba(124, 58, 237, 0.15)",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden glass p-8 rounded-3xl group/card border border-white/5 transition-colors duration-500 hover:border-white/20 hover:bg-[#141417]/80 cursor-default"
    >
      {/* Interactive Spotlight using CSS masks/radial gradients */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientMap[color]}, transparent 40%)`,
        }}
      />
      
      {/* Interactive Border Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100 mix-blend-overlay"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 border ${colorMap[color]} group-hover/card:-translate-y-2 group-hover/card:scale-110 transition-all duration-500 ease-out shadow-lg`}>
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold mb-3 text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-dim text-sm leading-relaxed group-hover/card:text-white/80 transition-colors duration-300">
          {desc}
        </p>
      </div>

      {/* Decorative lines revealing on hover */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 ease-in-out" />
    </motion.div>
  );
}

function SocialLink({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className={`group flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ${color}`}
    >
      <span className="text-text-muted group-hover:text-inherit transition-colors">{icon}</span>
      <span className="font-mono text-xs font-semibold tracking-wider text-text-dim group-hover:text-white transition-colors">{label}</span>
      <ArrowUpRight className="w-3 h-3 text-text-muted opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:text-inherit transition-all duration-300" />
    </Link>
  );
}

function Chip({ text, color, dim = false }: { text: string; color?: string; dim?: boolean }) {
  const colorMap: Record<string, string> = {
    // Standardizing the tailwind colors setup in globals.css
    orange: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
    blue: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    green: "text-accent-green bg-accent-green/10 border-accent-green/20",
    purple: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
    cyan: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
    yellow: "text-accent-yellow bg-accent-yellow/10 border-accent-yellow/20",
  };

  const appliedClass = dim 
    ? "text-text-dim bg-white/5 border-white/10" 
    : (color ? colorMap[color] : "text-white bg-white/10 border-white/20");

  return (
    <span className={`px-4 py-2 rounded-full border font-mono text-xs font-medium tracking-wide ${appliedClass}`}>
      {text}
    </span>
  );
}
