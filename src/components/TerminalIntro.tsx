"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LINES = [
  "const developer = {",
  'name: "Arjun Mijar",',
  'role: "Full-Stack Developer",',
  'based_in: "Kathmandu, Nepal",',
  'stack: ["React", "Next.js", "ASP.NET Core"],',
  'focus: "building practical web applications",',
  'status: "open to opportunities",',
"};",
];


export default function TerminalIntro() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const current = LINES[visibleLines];
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18 + Math.random() * 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCharCount(0);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [charCount, visibleLines]);

  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.55,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="rounded-lg border border-border bg-bg-elevated/80 backdrop-blur-sm font-mono text-sm sm:text-base shadow-2xl shadow-black/40 w-full max-w-md">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
        <span className="ml-2 text-xs text-text-muted">arjun.js</span>
      </div>
      <div className="px-4 py-4 leading-relaxed min-h-[168px]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="text-text-muted">
            <span className="text-accent">{line}</span>
          </div>
        ))}
        {visibleLines < LINES.length && (
          <div className="text-accent">
            {LINES[visibleLines].slice(0, charCount)}
            <span ref={cursorRef} className="text-accent">
              ▍
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
