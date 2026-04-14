type Person = {
  name: string;
  status: "online" | "offline" | "recent";
  actions?: React.ReactNode;
};

type VoteSideDashboardProps = {
  title: string;
  people: Person[];
};

const statusLabel: Record<Person["status"], string> = {
  online: "online",
  offline: "offline",
  recent: "recent",
};

const statusTone: Record<Person["status"], string> = {
  online: "bg-emerald-400/90",
  offline: "bg-slate-400/90",
  recent: "bg-amber-300/90",
};

export function VoteSideDashboard({ title, people }: VoteSideDashboardProps) {
  return (
    <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">{title}</p>
        <button className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
          View all
        </button>
      </div>

      <div className="mt-6 grid gap-4">
        {people.map((person) => (
          <div
            key={person.name}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
          >
            <div className="flex flex-1 items-center gap-3">
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-400 via-rose-300 to-amber-300 p-[2px]">
                <div className="h-full w-full rounded-full bg-[#0b0b12]" />
                <span
                  className={`absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border border-[#0b0b12] ${statusTone[person.status]}`}
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{person.name}</p>
                <p className="text-xs text-white/50">{statusLabel[person.status]}</p>
              </div>
            </div>
            {person.actions}
          </div>
        ))}
      </div>
    </aside>
  );
}
