'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { VoteCreateForm } from "@/app/components/vote/VoteCreateForm";
import { VoteList } from "@/app/components/vote/VoteList";
import { VoteSideDashboard } from "@/app/components/vote/VoteSideDashboard";

export default function FriendsPage() {
  const [searchName, setSearchName] = useState("");
  const [people, setPeople] = useState([
    { name: "Agi", status: "online" as const },
    { name: "Namu", status: "recent" as const },
    { name: "Zaya", status: "offline" as const },
    { name: "Temu", status: "online" as const },
    { name: "Saraa", status: "recent" as const },
    { name: "Bataa", status: "offline" as const },
  ]);

  const searchResults = useMemo(() => {
    const q = searchName.trim().toLowerCase();
    if (!q) return [];
    return [
      { name: "Agi", status: "online" as const },
      { name: "Namu", status: "recent" as const },
      { name: "Zaya", status: "offline" as const },
      { name: "Temu", status: "online" as const },
      { name: "Saraa", status: "recent" as const },
      { name: "Bataa", status: "offline" as const },
    ].filter((person) => person.name.toLowerCase().includes(q));
  }, [searchName]);

  const handleAddFriend = () => {
    const name = searchName.trim();
    if (!name) return;
    if (people.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
      setSearchName("");
      return;
    }
    setPeople((prev) => [{ name, status: "recent" }, ...prev]);
    setSearchName("");
  };

  const handleRemoveFriend = (name: string) => {
    setPeople((prev) => prev.filter((p) => p.name !== name));
  };

  useEffect(() => {
    const stored = localStorage.getItem("votera:friends");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setPeople(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("votera:friends", JSON.stringify(people));
  }, [people]);

  return (
    <main className="min-h-screen bg-[#0b0b12] text-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <header className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Friends Space</p>
              <h1 className="mt-3 text-3xl font-semibold">Create a Vote</h1>
              <p className="mt-2 text-sm text-white/60">
                Create a poll for your friends. Add 1 to 4 options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/60">
                <span className="text-white/40">Search</span>
                <input
                  placeholder="Find people"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-32 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
                />
              </div>
              <button
                onClick={handleAddFriend}
                className="rounded-full border border-white/10 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-black"
              >
                Add friend
              </button>
            </div>
          </div>
        </header>

        {searchResults.length > 0 && (
          <section className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Search results</p>
              <span className="text-xs text-white/50">{searchResults.length} found</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {searchResults.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-400 via-rose-300 to-amber-300 p-[2px]">
                      <div className="h-full w-full rounded-full bg-[#0b0b12]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{person.name}</p>
                      <p className="text-xs text-white/50">{person.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/user/profile"
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        setSearchName(person.name);
                        handleAddFriend();
                      }}
                      className="rounded-full border border-white/10 bg-white/90 px-3 py-1 text-xs uppercase tracking-[0.3em] text-black"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <VoteCreateForm redirectTo="/spaces/tarot" sourceLabel="Friends" participantCount={people.length} />
          </div>
          <VoteSideDashboard
            title="Friends in this space"
            people={people.map((person) => ({
              ...person,
              actions: (
                <button
                  onClick={() => handleRemoveFriend(person.name)}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white"
                >
                  Remove
                </button>
              ),
            }))}
          />
        </section>

        <VoteList
          title="Friends votes"
          description="Other people’s votes in this space."
        />

      </div>
    </main>
  );
}
