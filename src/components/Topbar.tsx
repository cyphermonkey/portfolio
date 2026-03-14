"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Topbar() {
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Topbar live clock
    const updateTime = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      const s = String(d.getSeconds()).padStart(2, '0');
      const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
      const day = days[d.getDay()];
      setTime(`${h}:${m}:${s} ${day}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center h-[36px] px-[14px] bg-[#070709] border-b border-border sticky top-0 z-[200] gap-[10px]">
      <div className="font-display font-extrabold text-[15px] text-accent-orange tracking-[1px] shrink-0">
        VS.
      </div>
      <div className="w-px h-[18px] bg-border" />
      <nav className="flex gap-[2px]">
        <NavLink href="/" active={pathname === '/'} title="OVERVIEW" />
        <NavLink href="/experience" active={pathname === '/experience'} title="EXPERIENCE" />
        <NavLink href="/skills" active={pathname === '/skills'} title="SKILLS" />
        <NavLink href="/projects" active={pathname === '/projects'} title="PROJECTS" />
        <NavLink href="/education" active={pathname === '/education'} title="EDUCATION" />
      </nav>
      <div className="flex-1" />
      <div className="text-text-muted text-[11px] tracking-[1px] hidden sm:block">
        {time}
      </div>
      <div className="w-px h-[18px] bg-border hidden sm:block" />
      <div className="flex items-center gap-[5px] text-[10px] text-accent-green tracking-[0.5px]">
        <div className="w-[6px] h-[6px] rounded-full bg-accent-green animate-pulse" />
        ONLINE
      </div>
    </div>
  );
}

function NavLink({ href, active, title }: { href: string; active: boolean; title: string }) {
  return (
    <Link 
      href={href}
      className={`px-[12px] py-[5px] text-[11px] font-medium tracking-[0.8px] rounded-[3px] transition-colors duration-100 ${
        active 
          ? "bg-accent-orange/10 text-accent-orange" 
          : "text-text-dim hover:bg-card hover:text-foreground"
      }`}
    >
      {title}
    </Link>
  );
}
