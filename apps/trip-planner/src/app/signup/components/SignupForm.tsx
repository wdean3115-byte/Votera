'use client';

import type { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const socialButtons = [
  { label: 'Continue with Google', icon: 'G' },
  { label: 'Continue with Apple', icon: 'A' },
  { label: 'Continue with Facebook', icon: 'f' },
];

export function SignupForm() {
  const router = useRouter();

  const handleContinue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/user');
  };

  const handleSocial = () => {
    router.push('/user');
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
      <Link
        href="/"
        className="absolute left-6 top-6 transition hover:opacity-90 sm:left-10 lg:left-16"
      >
        <span className="text-2xl font-semibold tracking-tight text-white">Votera</span>
      </Link>

      <div className="w-full max-w-md">
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Start making decisions faster
        </h1>
        <p className="mt-4 max-w-sm text-base leading-7 text-white/65">
          Create polls, gather votes, and give every group one clear answer without the endless
          back-and-forth.
        </p>

        <div className="mt-10 space-y-3">
          {socialButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              onClick={handleSocial}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/95"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                {button.icon}
              </span>
              {button.label}
            </button>
          ))}
        </div>

        <div className="my-6 flex items-center gap-4 text-sm text-white/35">
          <div className="h-px flex-1 bg-white/10" />
          <span>or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form className="space-y-3" onSubmit={handleContinue}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/8 px-5 py-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/30"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Continue
          </button>
        </form>

        <div className="mt-5 text-center">
          <Link
            href="/login"
            className="text-sm text-white/55 underline underline-offset-4 transition hover:text-white"
          >
            Already have an account? Log in
          </Link>
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-white/35">
          By signing up, you agree to the Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
