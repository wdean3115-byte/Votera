'use client';

import { CtaSection } from './components/CtaSection';
import { DarkSection } from './components/DarkSection';
import { Footer } from './components/Footer';
import { GroupsSection } from './components/GroupsSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TwoCardSection } from './components/TwoCardSection';
import { useReveal } from './components/useReveal';

export default function LandingPage() {
  useReveal();

  const replies = ["I don't care", 'You choose', 'Anything is fine', 'Not that place'];

  const steps = [
    {
      title: 'Create a decision',
      description: 'Start with one simple question and a few clear choices.',
    },
    {
      title: 'Vote together',
      description: 'Everyone makes one clear choice without endless back-and-forth.',
    },
    {
      title: 'Get the result',
      description: 'One vote. One answer.',
    },
  ];

  const useCases = [
    {
      title: 'Friends',
      description: 'Stop arguing about where to eat and decide in a few taps.',
      tone: 'bg-[#ffd7c7]',
    },
    {
      title: 'Office',
      description: 'Make quick team decisions without messy chat threads.',
      tone: 'bg-[#dce8ff]',
    },
    {
      title: 'Trips',
      description: 'Choose stays, food, and plans, then export final decisions later.',
      tone: 'bg-[#f4efe8]',
    },
  ];

  const options = [
    { emoji: '🍜', label: 'Ramen' },
    { emoji: '🍔', label: 'Burger' },
    { emoji: '🍕', label: 'Pizza' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#0b0b0b]">
      <Header />

      <main className="w-full max-w-none px-12 pb-0 snap-y snap-proximity scroll-smooth">
        <HeroSection options={options} />
        <TwoCardSection steps={steps} replies={replies} />
        <DarkSection />
        <GroupsSection useCases={useCases} />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
