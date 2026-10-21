import { Leaf, Truck, ShieldCheck, Recycle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export function Features() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Why Northfold" title="Made slowly, built to stay">
        Every piece is made from natural materials by people paid fairly for their craft.
      </SectionHeading>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card">
          <Leaf className="h-6 w-6 text-primary" />
          <h3 className="mt-4 font-semibold text-content">Natural materials</h3>
          <p className="mt-2 text-sm text-gray-500">Oak, linen, wool and stoneware. Nothing you would not want in your home.</p>
        </div>
        <div className="card">
          <Truck className="h-6 w-6 text-primary" />
          <h3 className="mt-4 font-semibold text-content">Free delivery</h3>
          <p className="mt-2 text-sm text-gray-500">On every order over €80, carbon-neutral and in recycled packaging.</p>
        </div>
        <div className="card">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <h3 className="mt-3 font-semibold text-content">10-year guarantee</h3>
          <p className="mt-2 text-sm text-gray-500">If it breaks from normal use, we repair or replace it.</p>
        </div>
        <div className="card">
          <Recycle className="h-6 w-6 text-primary" />
          <h3 className="mt-4 font-semibold text-content">Take-back scheme</h3>
          <p className="mt-2 text-sm text-gray-600">Send old pieces back and we give them a second life.</p>
        </div>
      </div>
    </section>
  );
}
