"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Education() {
  return (
    <main className="min-h-screen pt-24 pb-48 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold tracking-widest uppercase mb-6">
          Top 10%
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
          Education & Contact.
        </h1>
        <p className="text-text-dim font-sans text-lg max-w-2xl">
          Academic background and channels for collaboration, internships, or strategy consulting engagements.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Education Card 1 */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="glass rounded-3xl p-8 relative overflow-hidden group hover:bg-card-hover transition-colors duration-300"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold text-white mb-1">Bachelor of Commerce (Hons)</h2>
            <h3 className="text-accent-cyan font-medium mb-1">University of Delhi</h3>
            <div className="font-mono text-[10px] tracking-widest text-text-muted">2024 – 2027 · Currently Enrolled</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest text-text-muted">STANDING</span>
              <span className="text-sm text-accent-green font-medium">Top 10% · First Class with Distinction</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest text-text-muted">STREAM</span>
              <span className="text-sm text-text-dim">Commerce with Specialization in Finance</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest text-text-muted">COURSEWORK</span>
              <span className="text-sm text-text-dim leading-relaxed">Financial Analysis, Corporate Finance, Managerial Economics, Statistics, Cost Accounting, Business Law</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            <span className="px-3 py-1 font-mono text-[10px] tracking-wider bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-full">TOP 10%</span>
            <span className="px-3 py-1 font-mono text-[10px] tracking-wider bg-accent-blue/10 border border-accent-blue/20 text-accent-blue rounded-full">FIRST CLASS</span>
          </div>
        </motion.div>

        {/* Education Card 2 */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="glass rounded-3xl p-8 relative overflow-hidden group hover:bg-card-hover transition-colors duration-300"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold text-white mb-1">Senior Secondary (CBSE)</h2>
            <h3 className="text-text-dim font-medium mb-1">Kendriya Vidyalaya, Janakpuri</h3>
            <div className="font-mono text-[10px] tracking-widest text-text-muted">Passed 2024</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest text-text-muted">STREAM</span>
              <span className="text-sm text-text-dim">Commerce with Mathematics</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest text-text-muted">SUBJECTS</span>
              <span className="text-sm text-text-dim">Accountancy, Business Studies, Economics, Mathematics, English</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
            <span className="px-3 py-1 font-mono text-[10px] tracking-wider bg-white/5 border border-white/10 text-text-dim rounded-full">CBSE BOARD</span>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">Connect with Vaibhav</h3>
            <p className="text-text-muted text-sm">Open to internships, consulting opportunities, and finance roles.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-[10px] font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            Available Now
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactCard href="mailto:vs862876@gmail.com" icon={<Mail />} label="EMAIL" value="vs862876@gmail.com" color="orange" />
          <ContactCard href="https://www.linkedin.com/in/vaibhav-singh-finance" icon={<Linkedin />} label="LINKEDIN" value="vaibhav-singh-finance" color="blue" />
          <ContactCard href="https://github.com/cyphermonkey" icon={<Github />} label="GITHUB" value="cyphermonkey" color="purple" />
          <ContactCard href="https://x.com/Xb42vaibha55760" icon={<Twitter />} label="TWITTER" value="@Xb42vaibha55760" color="cyan" />
        </div>
      </motion.div>

    </main>
  );
}

function ContactCard({ href, icon, label, value, color }: { href: string; icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group`}
    >
      <div className={`w-12 h-12 rounded-xl bg-accent-${color}/10 border border-accent-${color}/20 text-accent-${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="overflow-hidden">
        <div className="font-mono text-[10px] tracking-widest text-text-muted mb-1">{label}</div>
        <div className="text-sm font-medium text-white truncate">{value}</div>
      </div>
    </Link>
  );
}
