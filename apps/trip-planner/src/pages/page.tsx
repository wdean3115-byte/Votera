export default function LandingPage() {
const replies=[
  "I don't care",
  "You choose",
  "Anything is fine",
  "Not that place",
];
const steps=[
  {
  title: "Crate decision",
  description: "Start with one simple question and a few clear choices",
  },
  {
    title: "Vote together",
    description: "Everyone makes one clear choice whiout endless back and forth",
  },
{
  title: "Get the result",
  description: "See one final answer and move on with confidence",
},
];
const useCases=[
  {
    title: "Friends",
    description:"Stop arguing about where to eat and decide in a few taps.",
   tone: "bg-[#ffd7c7]"
  },
  {
    title: "Office",
    description:"Make quick team decisions without messy chat threads.",
   tone: 'bg-[#dce8ff]',
  },
  {
    title: "Trip",
    description:"'Choose stays, food, and plans, then export final decisions later.",
    tone: 'bg-[#f4efe8]',
  },
];
const options=[
 { emoji: '🍜', label: 'Ramen' },
    { emoji: '🍔', label: 'Burger' },
    { emoji: '🍕', label: 'Pizza' },
];
return (
    <div className="min-h-screen  bg-[#fff8f1] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-balck/5 bg-[#fff8f1]/90 backdrop-blur">
       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px10" >
        <div className="text-xl font-bold tracking-tight">Votera</div>
        <nav className="hidden items-center gap-8 text-sm text black/70 md:flex">
        <a href="how" className="transition hover:text-black">How it works</a>
        <a href="#groups" className="transition hover:text-black">Groups</a>
        <a href="trips#" className="transition hover:text-black">Trips</a>
        <a href="#" className="transition hover:text-black">Sign in</a>
        </nav>
        <button className=" rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 "> Get Started
        </button>
       </div>
      </header>
      <main>
        <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-gull border border-black/10 bg-white px-4 text-sm font medium shadow-sm">
            One vote. One answer</p>
            <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Make group desitions without the chaos
            </h1>
            <p className="mt-6 max-w-xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Votera helps freinds,teams , and trips decide faster with simple voting and clear results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-black px-6 py-2 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                Start deciding
              </button>
              <button className="rounded-full border border-black px-6 py-3 text-base font-semibold transition hover:bg-white">
                See how it works
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full bg-[#ffd7c7] blur-2xl md:block" />
            <div className="absolute -right-2 bottom-10 hidden h-28 w-28 rounded-full bg-[#dce8ff] blur-2xl md:block" />
            <div className=" relative rounded-[30px] border border-black/10 bg-white p-6 shadow-[#dce8ff] blur-2xl md:block">
            <div className="mb-5 flex items-start justify-between gap-4 ">
              <div>
                <p className="text-sm text-black/45">Live decision</p>
                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">What should we eat?</h2>
              </div>
              <span className="rounded-full bg-[#fff1e8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/70">
              Votera</span>
            </div>



            </div>
            


          </div>

        </section>
      </main>


    </div>
  );
}