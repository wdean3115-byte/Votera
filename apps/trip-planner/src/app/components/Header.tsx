export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full items-center px-6 py-4 text-white">
        <nav className="hidden flex-1 items-center gap-6 text-sm font-medium text-white/80 md:flex">
          <a className="transition hover:text-white" href="#how">
            Creators
          </a>
          <a className="transition hover:text-white" href="#groups">
            Features
          </a>
          <a className="transition hover:text-white" href="#resources">
            Resources
          </a>
          <button className="rounded-full border border-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90">
            Updates
          </button>
        </nav>

        <div className="text-lg font-semibold tracking-tight">Votera</div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <button className="rounded-full border border-white/35 px-4 py-2 text-sm font-medium text-white/90">
            Log in
          </button>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
