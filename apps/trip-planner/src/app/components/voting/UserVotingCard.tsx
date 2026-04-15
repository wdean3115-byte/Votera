'use client';

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameBackground } from "./GameBackground";
import { TarotOptionCard } from "./TarotOptionCard";
import { initialOptions, RANKS, SIGILS } from "./data";
import type { VoteOption } from "./types";

type UserVotingCardProps = {
  embedded?: boolean;
};

type StoredVote = {
  title: string;
  options: string[];
  sourceLabel?: string;
  participantCount?: number;
  expiresAt?: number;
  createdAt: number;
  optionVotes?: { id: string; votes: number }[];
  selectedOptionId?: string | null;
  status?: "active" | "ended";
};

function formatRemainingTime(ms: number) {
  if (ms <= 0) return "00:00";

  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function UserVotingCard({ embedded = false }: UserVotingCardProps) {
  const router = useRouter();
  const [options, setOptions] = useState(initialOptions);
  const [selected, setSelected] = useState<string | null>(null);
  const [voteTitle, setVoteTitle] = useState("Choose your path");
  const [participantCount, setParticipantCount] = useState(1);
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60 * 1000);

  const totalVotes = useMemo(() => options.reduce((s, o) => s + o.votes, 0), [options]);
  const isEnded = (expiresAt !== null && timeLeft <= 0) || totalVotes >= participantCount;

  // selection only; no lock action in this view

  useEffect(() => {
    const raw = localStorage.getItem("votera:lastVote");
    if (!raw) return;

    try {
      const parsed: StoredVote = JSON.parse(raw);
      if (!parsed?.options?.length) return;

      const nextOptions: VoteOption[] = parsed.options.slice(0, 4).map((title, index) => ({
        id: `local-${index + 1}`,
        title,
        emoji: SIGILS[index].toUpperCase(),
        votes: parsed.optionVotes?.find((item) => item.id === `local-${index + 1}`)?.votes ?? 0,
        rarity: "Custom",
        rank: RANKS[index],
        sigil: SIGILS[index],
      }));

      setVoteTitle(parsed.title?.trim() || "Choose your path");
      setParticipantCount(Math.max(1, parsed.participantCount ?? 1));
      setExpiresAt(parsed.expiresAt ?? parsed.createdAt + 30 * 60 * 1000);
      setTimeLeft(Math.max(0, (parsed.expiresAt ?? parsed.createdAt + 30 * 60 * 1000) - Date.now()));
      setOptions(nextOptions);
      setSelected(parsed.selectedOptionId ?? null);
    } catch {
      // ignore parse errors
    }
  }, []);

  useEffect(() => {
    if (expiresAt === null) return;

    const updateTimer = () => {
      setTimeLeft(Math.max(0, expiresAt - Date.now()));
    };

    updateTimer();
    const intervalId = window.setInterval(updateTimer, 1000);

    return () => window.clearInterval(intervalId);
  }, [expiresAt]);

  const persistVote = (nextOptions: VoteOption[], nextSelected: string | null, nextStatus: "active" | "ended") => {
    const raw = localStorage.getItem("votera:lastVote");
    if (!raw) return;

    try {
      const parsed: StoredVote = JSON.parse(raw);
      const nextVote: StoredVote = {
        ...parsed,
        optionVotes: nextOptions.map((option) => ({ id: option.id, votes: option.votes })),
        selectedOptionId: nextSelected,
        status: nextStatus,
      };

      localStorage.setItem("votera:lastVote", JSON.stringify(nextVote));

      const rawHistory = localStorage.getItem("votera:voteHistory");
      const parsedHistory = JSON.parse(rawHistory ?? "[]");
      if (Array.isArray(parsedHistory)) {
        const nextHistory = parsedHistory.map((vote: StoredVote) =>
          vote.createdAt === nextVote.createdAt ? nextVote : vote
        );
        localStorage.setItem("votera:voteHistory", JSON.stringify(nextHistory));
      }
    } catch {
      // ignore parse errors
    }
  };

  const handleSelect = (optionId: string) => {
    if (isEnded) return;

    const nextOptions = options.map((option) => {
        if (option.id === selected && selected !== optionId) {
          return { ...option, votes: Math.max(0, option.votes - 1) };
        }

        if (option.id === optionId) {
          return {
            ...option,
            votes: selected === optionId ? option.votes : option.votes + 1,
          };
        }

        return option;
      });
    const nextTotalVotes = nextOptions.reduce((sum, option) => sum + option.votes, 0);
    const nextStatus: "active" | "ended" =
      (expiresAt !== null && expiresAt <= Date.now()) || nextTotalVotes >= participantCount ? "ended" : "active";

    setOptions(nextOptions);
    setSelected(optionId);
    persistVote(nextOptions, optionId, nextStatus);

    if (!embedded) {
      window.setTimeout(() => {
        router.push("/user");
      }, 5000);
    }
  };

  return (
    <div className={`relative overflow-hidden text-white ${embedded ? "rounded-[32px] border border-white/10 bg-[#07070c]/80 shadow-[0_24px_80px_rgba(0,0,0,0.35)]" : "min-h-screen bg-[#07070c]"}`}>
      {!embedded && <GameBackground />}

      <div className={`relative mx-auto flex ${embedded ? "w-full px-4 py-8 sm:px-6" : "min-h-screen max-w-5xl items-center px-6 py-12"}`}>
        <div className="w-full">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-amber-200/60">Generated Vote</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[0.04em] text-white sm:text-4xl">{voteTitle}</h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
              <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2">
                {isEnded ? "Ended" : `${formatRemainingTime(timeLeft)} left`}
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2">
                {totalVotes}/{participantCount} voted
              </div>
            </div>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt) => {
            const percent = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
            const active = selected === opt.id;

            return (
              <TarotOptionCard
                key={opt.id}
                option={opt}
                percent={percent}
                active={active}
                onSelect={() => handleSelect(opt.id)}
              />
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
