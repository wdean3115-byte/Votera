'use client';

import { Progress } from "@/components/ui/progress";
import type { VoteOption } from "./types";

type VotingSidebarProps = {
  leading: VoteOption;
  progress: number;
  isLocked: boolean;
};

export function VotingSidebar({ leading, progress, isLocked }: VotingSidebarProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Current Leader</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">{leading.title}</p>
            <p className="text-sm text-white/60">{leading.rarity} drop</p>
          </div>
          <div className="text-3xl">{leading.emoji}</div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Round Status</p>
        <p className="mt-3 text-sm text-white/70">
          {progress}% of votes locked. Move fast - the round ends when all players lock in.
        </p>
        <div className="mt-4">
          <Progress value={progress} />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Your Status</p>
        <p className="mt-3 text-sm text-white/70">
          {isLocked ? "Vote locked. Waiting for others." : "You can still change your vote."}
        </p>
      </div>
    </div>
  );
}
