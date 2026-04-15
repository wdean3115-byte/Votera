'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type SavedVote = {
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
  if (ms <= 0) return "Ended";

  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function UserPage() {
  const router = useRouter();
  const [voteHistory, setVoteHistory] = useState<SavedVote[]>([]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const raw = localStorage.getItem("votera:lastVote");
    const rawHistory = localStorage.getItem("votera:voteHistory");

    try {
      const parsedHistory = JSON.parse(rawHistory ?? "[]");
      if (Array.isArray(parsedHistory)) {
        setVoteHistory(parsedHistory);
      }
    } catch {
      // ignore parse errors
    }

    if (!raw) return;
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const openVote = (vote: SavedVote) => {
    localStorage.setItem("votera:lastVote", JSON.stringify(vote));
    router.push("/spaces/tarot");
  };

  const handleDeleteVote = (voteToDelete: SavedVote) => {
    const nextHistory = voteHistory.filter(
      (vote) =>
        !(
          vote.createdAt === voteToDelete.createdAt &&
          vote.title === voteToDelete.title &&
          vote.sourceLabel === voteToDelete.sourceLabel
        )
    );

    setVoteHistory(nextHistory);
    localStorage.setItem("votera:voteHistory", JSON.stringify(nextHistory));

    const rawActiveVote = localStorage.getItem("votera:lastVote");
    if (!rawActiveVote) return;

    try {
      const activeVote: SavedVote = JSON.parse(rawActiveVote);
      const deletingActiveVote =
        activeVote.createdAt === voteToDelete.createdAt &&
        activeVote.title === voteToDelete.title &&
        activeVote.sourceLabel === voteToDelete.sourceLabel;

      if (deletingActiveVote) {
        if (nextHistory[0]) {
          localStorage.setItem("votera:lastVote", JSON.stringify(nextHistory[0]));
        } else {
          localStorage.removeItem("votera:lastVote");
        }
        return;
      }
    } catch {
      if (nextHistory[0]) {
        localStorage.setItem("votera:lastVote", JSON.stringify(nextHistory[0]));
      } else {
        localStorage.removeItem("votera:lastVote");
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b12] text-white">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[160px]" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-400/20 blur-[180px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-10 lg:grid-cols-[260px_1fr] lg:px-6">
          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] lg:sticky lg:top-6 lg:self-start">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-400 via-rose-300 to-amber-300 p-[2px]">
                <div className="h-full w-full rounded-full bg-[#0b0b12]" />
              </div>
              <div>
                <p className="text-sm font-semibold">Votera</p>
                <p className="text-xs text-white/50">@user</p>
              </div>
            </div>
            <nav className="mt-8 space-y-2 text-sm text-white/70">
              {["Home", "Profile", "History", "Trips"].map((item) => (
                <button
                  key={item}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-left transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            <header className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-6">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-400 via-rose-300 to-amber-300 p-[2px]">
                    <div className="h-full w-full rounded-full bg-[#0b0b12]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-semibold">Tushi</h1>
                    </div>
                    <p className="text-sm text-white/60">Creative traveler · Decision maker</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">Friends 128</span>
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">Trips 12</span>
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1">Spaces 5</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/user/profile"
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
                  >
                    Edit profile
                  </Link>
                </div>
              </div>
            </header>

            <section className="rounded-[28px] border border-white/10 bg-gradient-to-br from-amber-300/10 via-white/5 to-transparent p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.38em] text-amber-200/65">Vote Ready</p>
              </div>

              {voteHistory.length > 0 && (
                <div className="mt-6 space-y-3">
                  {voteHistory.map((vote) => (
                    <div
                      key={`${vote.createdAt}-${vote.title}`}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4"
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/55">
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
                          {vote.status === "ended" || (vote.expiresAt ?? vote.createdAt + 30 * 60 * 1000) <= now
                            ? "Ended"
                            : formatRemainingTime((vote.expiresAt ?? vote.createdAt + 30 * 60 * 1000) - now)}
                        </span>
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">
                          {(vote.optionVotes ?? []).reduce((sum, option) => sum + option.votes, 0)}/
                          {Math.max(1, vote.participantCount ?? 1)} voted
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-amber-100/65">
                            {vote.sourceLabel || "Unknown space"}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-white">{vote.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => openVote(vote)}
                            className="rounded-full border border-white/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black"
                          >
                            Open vote
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteVote(vote)}
                            className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:border-white/25 hover:bg-white/10"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <h2 className="text-sm uppercase tracking-[0.35em] text-white/50">Dashboard</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <Link href="/spaces/friends" className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/30 hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Friends</p>
                    <p className="mt-3 text-lg font-semibold">128</p>
                  </Link>
                  <Link href="/spaces/office" className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/30 hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Office</p>
                    <p className="mt-3 text-lg font-semibold">3 teams</p>
                  </Link>
                  <Link href="/spaces/trips" className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-white/30 hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Trips</p>
                    <p className="mt-3 text-lg font-semibold">12</p>
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <h2 className="text-sm uppercase tracking-[0.35em] text-white/50">History</h2>
                <div className="mt-6 space-y-3">
                  {[
                    { label: "Past votes", value: "24" },
                    { label: "Results saved", value: "18" },
                    { label: "Shared polls", value: "7" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                    >
                      <span className="text-sm">{item.label}</span>
                      <span className="text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {["Friends", "Office", "Trips", "Decision Cards", "Moodboard", "Saved"].map((label) => (
                <div
                  key={label}
                  className="group h-44 rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  <div className="flex h-full flex-col justify-between p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">{label}</p>
                    <div className="h-20 rounded-2xl border border-white/10 bg-black/40" />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
