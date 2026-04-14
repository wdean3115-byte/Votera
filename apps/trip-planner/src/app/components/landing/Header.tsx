'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-black/70' : 'bg-black/35'
      }`}
    >
      <div
        className={`mx-auto grid w-full grid-cols-[1fr_auto_1fr] items-center px-6 text-white transition-all duration-300 sm:px-8 lg:px-12 ${
          isScrolled ? 'py-4' : 'py-7'
        }`}
      >
        <nav className="hidden items-center gap-10 text-lg font-medium text-white/85 md:flex">
          <a className="transition hover:text-white" href="#how">
            How it works
          </a>
          <a className="transition hover:text-white" href="#groups">
            Features
          </a>
          <a className="transition hover:text-white" href="#resources">
            Resources
          </a>
          <button className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            Updates
          </button>
        </nav>

        <Link
          href="/"
          className="relative flex h-20 w-[220px] items-center justify-center sm:h-24 sm:w-[260px]"
        >
          <img
            className={`absolute h-24 w-auto object-contain brightness-0 contrast-200 drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all duration-300 sm:h-28 ${
              isScrolled ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100'
            }`}
            src="/logo.png"
            alt="Votera"
          />
          <span
            className={`absolute text-[30px] font-semibold tracking-tight text-white transition-all duration-300 ${
              isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
            }`}
          >
            Votera
          </span>
        </Link>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/login"
            className={`rounded-full border border-white/35 px-6 text-base font-medium text-white/90 transition-all hover:border-white/55 hover:text-white ${
              isScrolled ? 'py-3' : 'py-3.5'
            }`}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className={`rounded-full bg-white px-6 text-base font-semibold text-black transition-all hover:bg-white/90 ${
              isScrolled ? 'py-3' : 'py-3.5'
            }`}
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
