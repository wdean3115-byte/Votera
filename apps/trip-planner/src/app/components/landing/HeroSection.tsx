import { TarotOptionCard } from "../voting/TarotOptionCard";

export function HeroSection() {
  const tarotOptions = [
    { id: "sun", title: "", emoji: "SUN", votes: 12, rarity: "Custom", rank: "Q", sigil: "sun" },
    { id: "bolt", title: "", emoji: "BOLT", votes: 8, rarity: "Custom", rank: "K", sigil: "bolt" },
  ] as const;

  return (
    <section className="hero-bg relative left-1/2 mt-0 min-h-[120vh] w-screen -translate-x-1/2 snap-start snap-stop-always overflow-hidden rounded-none px-10 pb-24 pt-36 sm:px-14 lg:px-20 lg:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.1),transparent_50%)]" />

      <div className="relative grid min-h-[70vh] items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal text-white delay-100" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
            Votera for groups
          </p>
          <h1 className="mt-6 text-7xl font-light leading-[0.88] tracking-tight sm:text-[88px] lg:text-[112px]">
            Make group decisions feel effortless
          </h1>
          <p className="mt-7 max-w-2xl text-2xl leading-9 text-white/82 sm:text-[30px] sm:leading-[1.35]">
            Votera helps friends, teams, and trips decide faster with simple voting and clear results.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-[0_14px_40px_rgba(255,255,255,0.16)]">
              Start deciding
            </button>
            <button className="rounded-full border border-white/60 px-8 py-4 text-base font-semibold text-white">
              See how it works
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            className="reveal relative rounded-[32px] border border-white/15 bg-black/25 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] delay-150"
            data-reveal
          >
            <div className="mb-5 flex items-center justify-between text-white/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Live decision
                </p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Choose the outcome
                </h2>
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                In desicion
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tarotOptions.map((opt, index) => (
                <TarotOptionCard
                  key={opt.id}
                  option={opt}
                  percent={index === 0 ? 58 : 42}
                  active={index === 0}
                  onSelect={() => {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
