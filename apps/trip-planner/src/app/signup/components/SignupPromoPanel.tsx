const highlights = [
  'Create a decision in seconds',
  'Invite your group with one link',
  'See the winning result instantly',
];

export function SignupPromoPanel() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-[#1e2392] lg:flex lg:items-center lg:justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_25%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_22%)]" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-10 text-center">
        <div className="relative h-[340px] w-full">
          <div className="absolute left-6 top-8 w-[250px] rounded-[28px] bg-white p-4 text-left text-black shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
            <div className="rounded-[20px] bg-[linear-gradient(135deg,#d9ecff_0%,#f7e8ff_100%)] p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-black/55">
                <span>Live vote</span>
                <span>18 votes</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold">Where should we go tonight?</h2>
              <div className="mt-4 space-y-2">
                <div className="rounded-xl bg-black px-3 py-2 text-sm font-medium text-white">
                  Rooftop dinner
                </div>
                <div className="rounded-xl bg-white/75 px-3 py-2 text-sm font-medium">
                  Karaoke
                </div>
                <div className="rounded-xl bg-white/75 px-3 py-2 text-sm font-medium">
                  Movie night
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-8 top-20 w-[190px] rounded-[24px] bg-[#0f1233] p-4 text-left shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Result</p>
            <p className="mt-4 text-3xl font-semibold">Rooftop</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Winner picked with the most votes from the whole group.
            </p>
          </div>

          <div className="absolute bottom-0 right-16 w-[220px] rounded-[24px] border border-white/15 bg-white/95 p-4 text-left text-black shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
              Invite link
            </p>
            <p className="mt-3 rounded-xl bg-[#f2f3f7] px-3 py-2 text-sm font-medium text-black/75">
              votera.app/invite/group
            </p>
            <p className="mt-3 text-sm text-black/55">Share once. Everyone votes from any device.</p>
          </div>
        </div>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight">Decide together</h2>
        <p className="mt-3 max-w-md text-base leading-7 text-white/70">
          Create a poll, share it with your group, and move from discussion to decision in a few
          taps.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
