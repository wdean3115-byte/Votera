export function Footer() {
  return (
    <footer
      id="resources"
      className="relative left-1/2 mt-0 w-screen -translate-x-1/2 snap-start bg-black py-16 text-sm text-white/70"
    >
      <div className="mx-auto grid w-full max-w-none gap-10 px-12 md:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-16">
        <div className="lg:flex-1">
          <p className="text-sm font-semibold text-white">Features</p>
          <div className="mt-4 space-y-2 text-white/55">
            <p>Create on your terms</p>
            <p>Where real community thrives</p>
            <p>Grow your community</p>
          </div>
        </div>
        <div className="lg:flex-1">
          <p className="text-sm font-semibold text-white">Resources</p>
          <div className="mt-4 space-y-2 text-white/55">
            <p>Help Center & FAQ</p>
            <p>Partners & integrations</p>
            <p>Mobile</p>
          </div>
        </div>
        <div className="lg:flex-1">
          <p className="text-sm font-semibold text-white">Company</p>
          <div className="mt-4 space-y-2 text-white/55">
            <p>About</p>
            <p>Terms of Use</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
            <p>Brand assets</p>
          </div>
        </div>
        <div className="lg:flex-1">
          <p className="text-sm font-semibold text-white">Votera</p>
          <div className="mt-4 space-y-2 text-white/55">
            <p>Start a decision</p>
            <p>Group voting</p>
            <p>Trip planning</p>
            <p>Team alignment</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-none gap-6 border-t border-white/10 px-12 pt-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-wide text-white/70">
            English (United States)
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-wide text-white/70">
            Монгол
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
          <span>X</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>YouTube</span>
          <span>LinkedIn</span>
        </div>
        <div className="flex items-center justify-start text-white/60 lg:justify-end">
          © Votera
        </div>
      </div>
    </footer>
  );
}
