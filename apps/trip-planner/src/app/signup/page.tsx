import { SignupForm } from './components/SignupForm';
import { SignupPromoPanel } from './components/SignupPromoPanel';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#17181d] text-white">
      <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        <SignupForm />
        <SignupPromoPanel />
      </div>
    </main>
  );
}
