'use client';

import React, { useMemo, useState, useEffect } from "react";
import { GameBackground } from "./voting/GameBackground";
import { TarotOptionCard } from "./voting/TarotOptionCard";
import { initialOptions, RANKS, SIGILS } from "./voting/data";
import type { VoteOption } from "./voting/types";

export default function UserVotingCard() {
  const [options, setOptions] = useState(initialOptions);
  const [selected, setSelected] = useState<string | null>(null);

  const totalVotes = useMemo(() => options.reduce((s, o) => s + o.votes, 0), [options]);

  // selection only; no lock action in this view

  useEffect(() => {
    const raw = localStorage.getItem("votera:lastVote");
    if (!raw) return;

    try {
      const parsed: { title: string; options: string[] } = JSON.parse(raw);
      if (!parsed?.options?.length) return;

      const nextOptions: VoteOption[] = parsed.options.slice(0, 4).map((title, index) => ({
        id: `local-${index + 1}`,
        title,
        emoji: SIGILS[index].toUpperCase(),
        votes: 0,
        rarity: "Custom",
        rank: RANKS[index],
        sigil: SIGILS[index],
      }));

      setOptions(nextOptions);
      setSelected(null);
    } catch {
      // ignore parse errors
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07070c] text-white">
      <GameBackground />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-6 py-12">
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt) => {
            const percent = Math.round((opt.votes / totalVotes) * 100);
            const active = selected === opt.id;

            return (
              <TarotOptionCard
                key={opt.id}
                option={opt}
                percent={percent}
                active={active}
                onSelect={() => setSelected(opt.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
