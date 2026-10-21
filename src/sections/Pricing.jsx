import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/SectionHeading';

export function Pricing() {
  return (
    <section id="membership" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Membership" title="Join the Northfold Club">
        Early access to new collections, free repairs and members-only prices.
      </SectionHeading>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="font-semibold text-content">Friend</h3>
          <p className="mt-2 text-3xl font-bold text-content">Free</p>
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Newsletter and journal</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Birthday gift</li>
          </ul>
          <Button variant="outline" className="mt-8 w-full">Join free</Button>
        </div>
        <div className="card border-2 border-primary">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-content">Member</h3>
            <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">Popular</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-content">€6<span className="text-base font-normal text-gray-500">/month</span></p>
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Everything in Friend</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> 10% off every order</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Free repairs</li>
          </ul>
          <Button className="mt-8 w-full">Become a member</Button>
        </div>
        <div className="card">
          <h3 className="font-semibold text-content">Patron</h3>
          <p className="mt-2 text-3xl font-bold text-content">€19<span className="text-base font-normal text-gray-500">/month</span></p>
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Everything in Member</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Early access to drops</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary" /> Studio visits</li>
          </ul>
          <Button variant="outline" className="mt-8 w-full">Become a patron</Button>
        </div>
      </div>
    </section>
  );
}
