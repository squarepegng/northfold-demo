import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow="Help" title="Questions, answered">
        Can't find what you're looking for? Write to hello@northfold.example.
      </SectionHeading>
      <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-surface">
        <details className="group p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-content">How long does delivery take?<ChevronDown className="h-4 w-4 text-gray-400" /></summary>
          <p className="mt-3 text-sm text-gray-500">3–5 working days in Europe. Larger furniture is delivered by appointment.</p>
        </details>
        <details className="group p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-content">Can I return something?<ChevronDown className="h-4 w-4 text-gray-400" /></summary>
          <p className="mt-3 text-sm text-gray-500">Yes, within 60 days, in its original condition. Returns are free for members.</p>
        </details>
        <details className="group p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-content">Where are your products made?<ChevronDown className="h-4 w-4 text-gray-400" /></summary>
          <p className="mt-3 text-sm text-gray-500">In small workshops in Denmark, Portugal and Lithuania that we visit every year.</p>
        </details>
      </div>
    </section>
  );
}
