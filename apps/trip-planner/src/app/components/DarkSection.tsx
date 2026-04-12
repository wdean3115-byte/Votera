export function DarkSection() {
  return (
    <section className="section-bg-2 relative left-1/2 mt-0 min-h-[120vh] w-screen -translate-x-1/2 snap-start snap-stop-always px-10 py-24 text-left text-white sm:px-14 lg:px-20">
      <div className="reveal" data-reveal>
        <h2 className="text-5xl font-light tracking-tight sm:text-6xl">
          Turning plans into action
        </h2>
        <p className="mt-6 max-w-3xl text-xl text-white/70 sm:text-2xl">
          More messages. More opinions. No decision. Votera keeps momentum moving.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">More ways to decide</h3>
            <p className="mt-2 text-sm text-white/70">
              Create simple polls, ranked votes, or quick tap decisions for any group.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Unlock growth</h3>
            <p className="mt-2 text-sm text-white/70">
              Keep teams aligned, reduce back-and-forth, and make progress visible.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Built for trips</h3>
            <p className="mt-2 text-sm text-white/70">
              From meals to activities, resolve decisions before you even arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
