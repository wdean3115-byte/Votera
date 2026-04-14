'use client';

import type { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const socialButtons = [
  { label: 'Continue with Google', icon: 'G' },
  { label: 'Continue with Apple', icon: 'A' },
  { label: 'Continue with Facebook', icon: 'f' },
];

export function LoginForm() {
  const router = useRouter();

  const handleContinue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/user');
  };

  const handleSocial = () => {
    router.push('/user');
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-xs text-center">
        <Link href="/" className="mx-auto inline-flex items-center gap-3 px-1 py-1 transition hover:scale-105">
          <span className="text-4xl font-semibold tracking-tight text-white">Votera</span>
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white">Log in or sign up</h1>

        <div className="mt-8 space-y-3">
          {socialButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              onClick={handleSocial}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/95"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {button.icon}
              </span>
              {button.label}
            </button>
          ))}
        </div>

        <div className="my-5 flex items-center gap-4 text-xs text-white/35">
          <div className="h-px flex-1 bg-white/10" />
          <span>or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form className="space-y-3" onSubmit={handleContinue}>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/30"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-white/75 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Continue
          </button>
        </form>

        <a
          className="mt-5 inline-block text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
          href="#"
        >
          Need help signing in?
        </a>

        <p className="mt-10 text-center text-[11px] leading-5 text-white/35">
          By signing up, you are creating a Votera account and agree to the Terms and Privacy
          Policy.
        </p>
      </div>
    </section>
  );
}
