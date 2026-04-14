type VoteListProps = {
  title: string;
  description: string;
};

const mockVotes = [
  {
    id: "vote-1",
    title: "Weekend plan?",
    options: ["Hiking", "Movie night", "Food crawl"],
    total: 28,
  },
  {
    id: "vote-2",
    title: "Office lunch pick",
    options: ["Sushi", "Burgers", "Salad", "Hot pot"],
    total: 19,
  },
  {
    id: "vote-3",
    title: "Trip destination",
    options: ["Jeju", "Bali", "Hokkaido"],
    total: 42,
  },
];

export function VoteList({ title, description }: VoteListProps) {
  return (
    <section className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">{title}</p>
          <p className="mt-2 text-sm text-white/60">{description}</p>
        </div>
        <button className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
          See all
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockVotes.map((vote) => (
          <article
            key={vote.id}
            className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold">{vote.title}</h3>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">Options</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
              {vote.options.map((opt) => (
                <span key={opt} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {opt}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/50">{vote.total} votes</p>
          </article>
        ))}
      </div>
    </section>
  );
}
