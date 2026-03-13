"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "OVERVIEW" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/skills", label: "SKILLS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/education", label: "EDUCATION" },
];

export function FloatingNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="glass-pill rounded-full px-2 py-2 flex items-center justify-between gap-1 overflow-x-auto max-w-[90vw] md:max-w-none hide-scrollbar">
        <Link 
          href="/" 
          className="flex-shrink-0 px-4 py-2 font-display font-bold text-accent-orange text-sm tracking-widest uppercase pr-6 border-r border-white/10"
        >
          VS/
        </Link>
        <div className="flex px-2 gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wider transition-colors duration-200 ${
                  isActive ? "text-accent-orange" : "text-text-dim hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav_indicator"
                    className="absolute inset-0 bg-accent-orange/10 border border-accent-orange/20 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
