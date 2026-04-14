'use client';

export function GameBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,220,0.12),_transparent_60%)]" />
      <div className="absolute -left-56 top-8 h-[26rem] w-[26rem] rounded-full bg-amber-300/20 blur-[180px] animate-float-slow" />
      <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-400/20 blur-[190px] animate-float" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-300/15 blur-[190px] animate-float-slow" />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(18,12,20,0.95),rgba(10,10,18,0.92))]" />
      <div className="absolute inset-0 opacity-35 animate-gradient bg-[radial-gradient(circle_at_20%_20%,rgba(236,201,75,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.22),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.18),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:48px_48px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.08),transparent,rgba(255,255,255,0.08))]" />
    </div>
  );
}
