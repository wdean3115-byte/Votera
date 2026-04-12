export function CtaSection() {
  return (
    <section
      id="trips"
      className="cta-bg relative left-1/2 min-h-[120vh] w-screen -translate-x-1/2 snap-start snap-stop-always overflow-hidden px-10 py-24 sm:px-14 lg:px-20"
    >
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="reveal reveal-visible w-full max-w-sm rounded-[40px] bg-white px-10 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:px-12 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/5">
            <span className="text-3xl">W</span>
          </div>
          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Your world to create
          </h2>
          <button className="mt-8 w-full rounded-full bg-black px-10 py-4 text-base font-semibold text-white">
            Get started
          </button>
          <p className="mt-6 text-sm text-black/60">
            Already have an account? <span className="font-semibold text-black">Log in</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <img className="h-12 w-auto" src="/google-play.png" alt="Get it on Google Play" />
            <img className="h-12 w-auto" src="/app-store.png" alt="Download on the App Store" />
          </div>
        </div>
      </div>
    </section>
  );
}
