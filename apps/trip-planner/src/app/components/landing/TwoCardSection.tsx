type Step = {
  title: string;
  description: string;
};

export function TwoCardSection({
  steps,
  replies,
}: {
  steps: Step[];
  replies: string[];
}) {
  return (
    <section
      id="how"
      className="section-bg-1 relative left-1/2 mt-0 min-h-[120vh] w-screen -translate-x-1/2 snap-start snap-stop-always px-10 py-24 sm:px-14 lg:px-20"
    >
      <div className="reveal grid gap-6" data-reveal>
        <div className="rounded-[28px] bg-white/90 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          <h2 className="text-6xl font-light leading-[0.92] tracking-tight sm:text-7xl">
            Creators. Fans. Nothing in between.
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-black/70 sm:text-2xl">
            Create a decision, let everyone vote, and get one clear answer.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-black/10 bg-[#f6f3ee] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-black/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-black/50">Group chat</p>
            <span className="rounded-full bg-[#e7f7ff] px-3 py-1 text-xs font-semibold uppercase text-black/60">
              New
            </span>
          </div>
          <h3 className="text-2xl font-semibold">Your plans, all in one thread</h3>
          <div className="mt-6 space-y-3">
            {replies.map((reply) => (
              <div
                key={reply}
                className="rounded-2xl border border-black/10 bg-[#f6f3ee] px-4 py-3 text-sm"
              >
                {reply}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
