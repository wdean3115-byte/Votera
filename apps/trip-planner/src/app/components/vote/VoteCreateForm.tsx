'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

type VoteCreateFormProps = {
  redirectTo?: string;
  sourceLabel?: string;
  participantCount?: number;
};

export function VoteCreateForm({ redirectTo, sourceLabel, participantCount = 1 }: VoteCreateFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);

  const filled = options.map((opt) => opt.trim()).filter(Boolean);
  const canCreate = title.trim().length > 0 && filled.length >= 1 && filled.length <= 4;

  const handleCreate = () => {
    if (!canCreate) return;

    const payload = {
      title: title.trim(),
      options: filled.slice(0, 4),
      sourceLabel: sourceLabel?.trim() || "Unknown space",
      participantCount: Math.max(1, participantCount),
      expiresAt: Date.now() + 30 * 60 * 1000,
      createdAt: Date.now(),
    };

    localStorage.setItem("votera:lastVote", JSON.stringify(payload));

    const rawHistory = localStorage.getItem("votera:voteHistory");
    let voteHistory: typeof payload[] = [];

    try {
      const parsed = JSON.parse(rawHistory ?? "[]");
      if (Array.isArray(parsed)) {
        voteHistory = parsed;
      }
    } catch {
      // ignore parse errors
    }

    const nextHistory = [payload, ...voteHistory].slice(0, 6);
    localStorage.setItem("votera:voteHistory", JSON.stringify(nextHistory));

    if (redirectTo) router.push(redirectTo);
  };

  return (
    <form className="space-y-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Vote title"
        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/30"
      />
      {options.map((value, index) => (
        <input
          key={index}
          value={value}
          onChange={(e) => {
            const next = [...options];
            next[index] = e.target.value;
            setOptions(next);
          }}
          placeholder={`Option ${index + 1}`}
          className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/30"
        />
      ))}
      <button
        type="button"
        disabled={!canCreate}
        onClick={handleCreate}
        className="w-full rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Create vote
      </button>
    </form>
  );
}
