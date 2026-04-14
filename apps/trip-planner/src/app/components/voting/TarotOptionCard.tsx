'use client';

import { Progress } from "@/components/ui/progress";
import type { VoteOption } from "./types";

type TarotOptionCardProps = {
  option: VoteOption;
  percent: number;
  active: boolean;
  onSelect: () => void;
};

export function TarotOptionCard({ option, percent, active, onSelect }: TarotOptionCardProps) {
  const renderSigil = () => {
    switch (option.sigil) {
      case "sun":
        return (
          <svg viewBox="0 0 120 160" className="h-full w-full text-[#4a4439]">
            <circle cx="60" cy="70" r="22" fill="currentColor" opacity="0.18" />
            <circle cx="60" cy="70" r="12" fill="currentColor" opacity="0.35" />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * Math.PI) / 4;
              const x1 = 60 + Math.cos(angle) * 20;
              const y1 = 70 + Math.sin(angle) * 20;
              const x2 = 60 + Math.cos(angle) * 34;
              const y2 = 70 + Math.sin(angle) * 34;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.35"
                />
              );
            })}
            <rect x="30" y="110" width="60" height="18" rx="9" fill="currentColor" opacity="0.12" />
          </svg>
        );
      case "bolt":
        return (
          <svg viewBox="0 0 120 160" className="h-full w-full text-[#4a4439]">
            <path
              d="M66 20 L36 88 H58 L50 140 L88 70 H66 Z"
              fill="currentColor"
              opacity="0.35"
            />
            <rect x="30" y="110" width="60" height="18" rx="9" fill="currentColor" opacity="0.12" />
          </svg>
        );
      case "gem":
        return (
          <svg viewBox="0 0 120 160" className="h-full w-full text-[#4a4439]">
            <polygon points="60,24 88,52 72,116 48,116 32,52" fill="currentColor" opacity="0.35" />
            <polygon points="60,24 76,52 60,52 44,52" fill="currentColor" opacity="0.18" />
            <rect x="30" y="110" width="60" height="18" rx="9" fill="currentColor" opacity="0.12" />
          </svg>
        );
      case "seed":
        return (
          <svg viewBox="0 0 120 160" className="h-full w-full text-[#4a4439]">
            <path
              d="M60 36 C40 36 30 56 30 74 C30 96 44 118 60 124 C76 118 90 96 90 74 C90 56 80 36 60 36 Z"
              fill="currentColor"
              opacity="0.35"
            />
            <path d="M60 50 L60 118" stroke="currentColor" strokeWidth="2" opacity="0.25" />
            <rect x="30" y="110" width="60" height="18" rx="9" fill="currentColor" opacity="0.12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onSelect}
      className={`group relative aspect-[3/5] w-full overflow-hidden rounded-[28px] border p-4 text-left transition ${
        active
          ? "border-amber-300/80 shadow-[0_0_40px_rgba(251,191,36,0.45)] ring-2 ring-amber-300/60"
          : "border-white/10 hover:border-white/30"
      }`}
    >
      {active && (
        <>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-amber-300/30 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute inset-0 opacity-35 animate-gradient bg-[radial-gradient(circle_at_20%_20%,rgba(236,201,75,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.28),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.22),transparent_45%)]" />
        </>
      )}
      <div className="absolute inset-0 bg-[#f5efe1]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.55),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-2 rounded-[22px] border-2 border-[#c4b8a2]" />
      <div className="pointer-events-none absolute inset-3 rounded-[18px] border-2 border-[#e7dcc7]" />
      <div className="pointer-events-none absolute left-4 top-4 text-sm font-semibold text-[#2b2a26]">
        {option.rank}
      </div>
      <div className="pointer-events-none absolute right-4 bottom-4 rotate-180 text-sm font-semibold text-[#2b2a26]">
        {option.rank}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_25%_30%,rgba(0,0,0,0.18),transparent_38%),radial-gradient(circle_at_75%_70%,rgba(0,0,0,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(0deg,rgba(68,60,48,0.15)_0,rgba(68,60,48,0.15)_1px,transparent_1px,transparent_3px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-12 [background-image:repeating-linear-gradient(90deg,rgba(68,60,48,0.1)_0,rgba(68,60,48,0.1)_1px,transparent_1px,transparent_4px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
      </div>
      {active && (
        <div className="absolute right-5 top-5 rotate-3 rounded-full border-2 border-[#2b2a26] bg-[#f4efe2] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#2b2a26] shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
          Selected
        </div>
      )}

      <div className="relative flex h-full flex-col justify-between font-serif text-[#2b2a26]">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#2b2a26]/70">&nbsp;</h3>
          </div>
        </div>

                        <div className="mt-4 flex flex-1 items-center justify-center">
                          <div className="flex h-36 w-24 items-center justify-center rounded-[18px] border border-[#c9bfae] bg-[#e9e0cf] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]">
                            {renderSigil()}
                          </div>
                        </div>

        <div className="mt-4">
          <div className="text-center text-[11px] uppercase tracking-[0.35em] text-[#5c564b]">
            Arcana
          </div>
          <div className="mt-2 rounded-full border border-[#c9bfae] px-3 py-1 text-center text-[11px] uppercase tracking-[0.4em] text-[#4a4439]">
            Decision
          </div>
        </div>

        <div className="mt-4">
          <Progress value={percent} />
        </div>
      </div>
    </button>
  );
}
