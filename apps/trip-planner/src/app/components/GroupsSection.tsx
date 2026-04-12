type UseCase = {
  title: string;
  description: string;
  tone: string;
};

export function GroupsSection({ useCases }: { useCases: UseCase[] }) {
  return (
    <section
      id="groups"
      className="section-bg-3 relative left-1/2 min-h-[120vh] w-screen -translate-x-1/2 snap-start snap-stop-always px-10 py-24 sm:px-14 lg:px-20"
    >
      <div className="reveal text-left" data-reveal>
        <h2 className="text-5xl font-light tracking-tight sm:text-6xl">
          Works for every group
        </h2>
        <p className="mt-6 max-w-3xl text-xl text-black/70 sm:text-2xl">
          Votera helps friends, teams, and trips decide faster with simple voting and clear results.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {useCases.map((item) => (
          <div key={item.title} className={`rounded-3xl p-8 shadow-sm ${item.tone}`}>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="mt-4 text-base text-black/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
