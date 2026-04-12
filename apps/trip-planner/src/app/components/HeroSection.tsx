type Option = {
  emoji: string;
  label: string;
};

export function HeroSection({ options }: { options: Option[] }) {
  return (
    <section className="hero-bg relative left-1/2 mt-0 min-h-[120vh] w-screen -translate-x-1/2 snap-start snap-stop-always overflow-hidden rounded-none px-10 pb-24 pt-28 sm:px-14 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.1),transparent_50%)]" />

      <div className="relative grid min-h-[70vh] items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-rise text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Votera for groups
          </p>
          <h1 className="mt-6 text-6xl font-light leading-[0.9] tracking-tight sm:text-7xl lg:text-[92px]">
            Complete creative control
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80 sm:text-2xl">
            Votera helps friends, teams, and trips decide faster with simple voting and clear results.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
              Start deciding
            </button>
            <button className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white">
              See how it works
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="animate-fade-up-delay relative rounded-[28px] border border-black/10 bg-white/95 p-6 text-black shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  Live decision
                </p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Where should we eat?
                </h2>
              </div>
              <span className="rounded-full bg-[#fff1e8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/70">
                Votera
              </span>
            </div>

            <div className="space-y-3">
              {options.map((option, index) => (
                <button
                  key={option.label}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${
                    index === 1
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 bg-[#faf6f1] text-black'
                  }`}
                >
                  <span className="flex items-center gap-3 text-lg font-semibold">
                    <span>{option.emoji}</span>
                    <span>{option.label}</span>
                  </span>
                  <span className="text-sm opacity-70">Vote</span>
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-up-delay-long absolute -right-8 -top-6 hidden w-56 rounded-3xl bg-white/95 p-4 text-sm text-black shadow-[0_20px_40px_rgba(0,0,0,0.2)] lg:block">
            <p className="font-semibold">Decision closed</p>
            <p className="mt-1 text-black/60">Burger won with 4 votes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
