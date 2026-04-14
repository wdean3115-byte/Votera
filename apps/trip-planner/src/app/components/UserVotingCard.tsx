import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// mock current user
const CURRENT_USER = "Tushi";

const initialPlayers = [
  { id: 1, name: "Agi", status: "locked" },
  { id: 2, name: "Namu", status: "locked" },
  { id: 3, name: "Tushi", status: "voting" },
  { id: 4, name: "Zaya", status: "locked" },
  { id: 5, name: "Temu", status: "idle" },
  { id: 6, name: "Anu", status: "locked" },
  { id: 7, name: "Bataa", status: "voting" },
  { id: 8, name: "Saraa", status: "locked" },
  { id: 9, name: "Mugi", status: "idle" },
  { id: 10, name: "Ebo", status: "locked" },
];

const initialOptions = [
  { id: "alpha", title: "Option Alpha", emoji: "🔥", votes: 4, rarity: "Epic" },
  { id: "beta", title: "Option Beta", emoji: "⚡", votes: 3, rarity: "Rare" },
  { id: "gamma", title: "Option Gamma", emoji: "💎", votes: 2, rarity: "Legendary" },
  { id: "delta", title: "Option Delta", emoji: "🌿", votes: 1, rarity: "Common" },
];

function statusTone(status: string) {
  if (status === "locked") return "bg-emerald-400/20 text-emerald-300";
  if (status === "voting") return "bg-amber-400/20 text-amber-200";
  return "bg-white/10 text-slate-300";
}

export default function UserVotingCard() {
  const [players, setPlayers] = useState(initialPlayers);
  const [options, setOptions] = useState(initialOptions);
  const [selected, setSelected] = useState<string | null>(null);

  const totalVotes = useMemo(() => options.reduce((s, o) => s + o.votes, 0), [options]);
  const lockedCount = players.filter((p) => p.status === "locked").length;
  const progress = Math.round((lockedCount / players.length) * 100);

  const leading = options.reduce((prev, curr) => (curr.votes > prev.votes ? curr : prev));

  const handleVote = () => {
    if (!selected) return;

    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === selected ? { ...opt, votes: opt.votes + 1 } : opt
      )
    );

    setPlayers((prev) =>
      prev.map((p) =>
        p.name === CURRENT_USER ? { ...p, status: "locked" } : p
      )
    );
  };

  return (
    <div className="min-h-screen p-6 text-white bg-black">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <Card className="bg-white/5">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-3">Players</h2>

            <Progress value={progress} />
            <p className="text-sm mt-2">{lockedCount}/{players.length} locked</p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {players.map((p) => (
                <div key={p.id} className={`p-2 rounded ${statusTone(p.status)}`}>
                  <p className="text-sm">{p.name}</p>
                  <p className="text-xs">{p.status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold">Universal Decision</h1>
            <p className="text-sm text-gray-400">1 user = 1 vote</p>

            <div className="grid gap-3 mt-6">
              {options.map((opt) => {
                const percent = Math.round((opt.votes / totalVotes) * 100);
                const active = selected === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    className={`p-4 rounded border ${active ? "border-cyan-400" : "border-white/10"}`}
                  >
                    <div className="flex justify-between">
                      <span>{opt.emoji} {opt.title}</span>
                      <span>{opt.votes} ({percent}%)</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-sm text-gray-400">Leading</p>
                <p className="font-bold">{leading.title}</p>
              </div>

              <Button onClick={handleVote} disabled={!selected}>
                Lock vote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
