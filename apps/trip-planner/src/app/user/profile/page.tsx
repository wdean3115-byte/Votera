export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#0f0f12]">
      <div className="mx-auto w-full max-w-3xl px-5 py-12">
        <header className="flex items-center justify-between border-b border-black/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/50">Profile</p>
            <h1 className="mt-2 text-3xl font-semibold">Edit profile</h1>
            <p className="mt-1 text-sm text-black/60">Update your username, avatar, and preferences.</p>
          </div>
          <button className="rounded-full border border-black/10 bg-black px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
            Save
          </button>
        </header>

        <section className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="grid gap-6 sm:grid-cols-[140px_1fr]">
            <div className="flex flex-col items-center gap-3">
              <div className="h-28 w-28 rounded-full border border-black/10 bg-gradient-to-br from-fuchsia-300 via-rose-200 to-amber-200 p-[2px]">
                <div className="h-full w-full rounded-full bg-white" />
              </div>
              <button className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.3em] text-black/70">
                Change
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-black/50">Username</label>
                <input
                  placeholder="Username"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-black/50">Bio</label>
                <textarea
                  placeholder="Write a short bio..."
                  className="min-h-[110px] w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-black/50">Email</label>
                  <input
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-black/50">Phone</label>
                  <input
                    placeholder="+976 9999 9999"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-black/50">
                <span className="rounded-full border border-black/10 bg-white px-3 py-1">Dark mode</span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1">Notifications</span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1">Auto-join</span>
              </div>
              <button className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/90">
                Save changes
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
