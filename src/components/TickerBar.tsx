"use client";

import { motion } from "framer-motion";

export type TickerItem = {
  key: string;
  value: string;
};

export function TickerBar({ label, color, items }: { label: string; color: string; items: TickerItem[] }) {
  const colorMap: Record<string, string> = {
    orange: "bg-accent-orange",
    blue: "bg-accent-blue",
    green: "bg-accent-green",
    yellow: "bg-accent-yellow",
    purple: "bg-accent-purple",
    cyan: "bg-accent-cyan",
  };

  const bgClass = colorMap[color] || "bg-accent-orange";

  // Duplicate items array a few times so the track is wide enough to infinitely scroll gracefully
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <div className="h-[26px] bg-[#070709] border-b border-border overflow-hidden flex items-center">
      <div className={`${bgClass} text-black text-[9px] font-bold px-[10px] tracking-[1.5px] h-full flex items-center shrink-0 uppercase relative z-10 shadow-[2px_0_5px_rgba(0,0,0,0.5)]`}>
        {label}
      </div>
      <div className="overflow-hidden flex-1 flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 50, 
              ease: "linear" 
            } 
          }}
        >
          {scrollItems.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-[6px] px-[16px] text-[11px] shrink-0">
              <span className="text-text-muted uppercase">{item.key}</span>
              <span className="text-foreground font-semibold">{item.value}</span>
              {i !== scrollItems.length - 1 && (
                <span className="text-border-lit mx-[4px]">{"//"}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
