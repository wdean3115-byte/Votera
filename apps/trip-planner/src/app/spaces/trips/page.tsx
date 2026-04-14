import { VoteCreateForm } from "@/app/components/vote/VoteCreateForm";
import { VoteList } from "@/app/components/vote/VoteList";
import { VoteSideDashboard } from "@/app/components/vote/VoteSideDashboard";

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b12] text-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <header className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Trips Space</p>
              <h1 className="mt-3 text-3xl font-semibold">Create a Vote</h1>
              <p className="mt-2 text-sm text-white/60">
                Create a poll for your travel crew. Add 1 to 4 options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/60">
                <span className="text-white/40">Search</span>
                <input
                  placeholder="Find people"
                  className="w-32 bg-transparent text-xs text-white outline-none placeholder:text-white/40"
                />
              </div>
              <button className="rounded-full border border-white/10 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-black">
                Add member
              </button>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <VoteCreateForm redirectTo="/spaces/tarot" />
          </div>
          <VoteSideDashboard
            title="Trip members"
            people={[
              { name: "Mugi", status: "online" },
              { name: "Naraa", status: "recent" },
              { name: "Temka", status: "offline" },
              { name: "Tsolmon", status: "online" },
              { name: "Suzu", status: "recent" },
              { name: "Enkhee", status: "offline" },
            ]}
          />
        </section>

        <VoteList
          title="Trip votes"
          description="Recent votes from your travel crew."
        />

      </div>
    </main>
  );
}
