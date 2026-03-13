"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatBoxProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  sub: string;
  colorClass: string;
  delay?: number;
}

export function StatBox({ label, value, suffix = "", prefix = "", sub, colorClass, delay = 0 }: StatBoxProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 1500; // 1.5 seconds

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCurrent(Math.floor(ease * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="glass p-6 flex flex-col justify-center rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:bg-card-hover"
    >
      <div className="text-[10px] font-bold tracking-[0.2em] text-text-muted mb-2 uppercase group-hover:text-text-dim transition-colors">
        {label}
      </div>
      <div className={`text-4xl md:text-5xl font-display font-bold leading-none mb-2 ${colorClass}`}>
        {prefix}{current}{suffix}
      </div>
      <div className="text-xs text-text-muted font-mono tracking-wide">
        {sub}
      </div>
    </motion.div>
  );
}
