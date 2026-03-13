"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Financial Modeling",
      sub: "VALUATION · ANALYSIS · FORECASTING",
      icon: "📊",
      colorStyles: {
        bg10: "bg-accent-orange/10",
        border20: "border-accent-orange/20",
        text: "text-accent-orange",
        fill: "bg-accent-orange"
      },
      skills: [
        { name: "DCF Valuation", pct: 88 },
        { name: "3-Statement Modeling", pct: 85 },
        { name: "Financial Statement Analysis", pct: 85 },
        { name: "Relative Valuation", pct: 82 },
        { name: "Scenario & Sensitivity", pct: 80 },
        { name: "Equity Research", pct: 78 },
      ]
    },
    {
      title: "Tech Tools",
      sub: "EXCEL · PYTHON · SQL · POWER BI",
      icon: "⚙",
      colorStyles: {
        bg10: "bg-accent-yellow/10",
        border20: "border-accent-yellow/20",
        text: "text-accent-yellow",
        fill: "bg-accent-yellow"
      },
      skills: [
        { name: "Excel (VBA, Pivot, Modeling)", pct: 92 },
        { name: "PowerPoint", pct: 88 },
        { name: "Python (Pandas, NumPy)", pct: 70 },
        { name: "SQL", pct: 65 },
        { name: "Power BI", pct: 62 },
        { name: "Bloomberg Terminal", pct: 50 },
      ]
    },
    {
      title: "Research & Analysis",
      sub: "MARKET RESEARCH · FRAMEWORKS",
      icon: "🔍",
      colorStyles: {
        bg10: "bg-accent-blue/10",
        border20: "border-accent-blue/20",
        text: "text-accent-blue",
        fill: "bg-accent-blue"
      },
      skills: [
        { name: "Market Research", pct: 90 },
        { name: "Competitive Analysis", pct: 88 },
        { name: "Porter's Five Forces", pct: 85 },
        { name: "PESTLE Analysis", pct: 82 },
        { name: "Quantitative Analysis", pct: 75 },
        { name: "Data Visualization", pct: 72 },
      ]
    },
    {
      title: "Consulting",
      sub: "STRATEGY · CLIENT MGMT · DELIVERY",
      icon: "💼",
      colorStyles: {
        bg10: "bg-accent-green/10",
        border20: "border-accent-green/20",
        text: "text-accent-green",
        fill: "bg-accent-green"
      },
      skills: [
        { name: "Business Plan Development", pct: 88 },
        { name: "Strategic Planning", pct: 85 },
        { name: "Stakeholder Communication", pct: 82 },
        { name: "Client Engagement", pct: 80 },
        { name: "Cross-functional Collab", pct: 80 },
        { name: "Project Management", pct: 78 },
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-48 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-[10px] font-bold tracking-widest uppercase mb-6">
          24 Skills · 4 Categories
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
          Skills & Tools.
        </h1>
        <p className="text-text-dim font-sans text-lg max-w-2xl">
          A blend of hardcore financial analysis, modern data tools, and strategic consulting frameworks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group hover:bg-card-hover transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-2xl ${cat.colorStyles.bg10} border ${cat.colorStyles.border20} ${cat.colorStyles.text} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">{cat.title}</h2>
                <div className="font-mono text-[10px] tracking-wider text-text-muted mt-1 uppercase">{cat.sub}</div>
              </div>
            </div>

            {/* List */}
            <div className="flex flex-col gap-5">
              {cat.skills.map((skill, sIdx) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <div className="w-32 md:w-48 text-xs font-medium text-text-dim shrink-0">{skill.name}</div>
                  
                  {/* Progress Bar Track */}
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden shrink-0">
                    {/* Progress Bar Fill */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                      className={`h-full ${cat.colorStyles.fill} rounded-full`}
                    />
                  </div>
                  
                  <div className="w-8 text-right font-mono text-[10px] font-bold text-text-muted shrink-0">
                    {skill.pct}%
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
