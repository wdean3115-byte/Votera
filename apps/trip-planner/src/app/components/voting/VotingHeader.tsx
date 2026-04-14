'use client';

import { Button } from "@/components/ui/button";

type VotingHeaderProps = {
  activePlayers: number;
  totalPlayers: number;
  disabled: boolean;
  onLock: () => void;
  title: string;
};

export function VotingHeader({ activePlayers, totalPlayers, disabled, onLock, title }: VotingHeaderProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-white/10 bg-gradient-to-r from-white/5 via-transparent to-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/45">Game Round 04</p>
        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-white/60">Choose the winning action. One vote per player.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70">
          {activePlayers} voting - {totalPlayers} total
        </div>
        <Button onClick={onLock} disabled={disabled} className="rounded-full px-6">
          Lock vote
        </Button>
      </div>
    </div>
  );
}
