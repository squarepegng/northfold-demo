import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <p className="eyebrow">Autumn collection</p>
        <h1 className="mt-4 text-4xl font-bold text-content">Homeware made to last a lifetime</h1>
        <p className="mt-4 text-lg text-gray-500">Simple, honest pieces for the rooms you live in. Designed in Copenhagen, made by small workshops across Europe.</p>
        <div className="mt-7 flex items-center gap-3">
          <Button size="lg">Shop the collection <ArrowRight className="h-4 w-4" /></Button>
          <Button variant="ghost" size="lg">Our story</Button>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
          <Star className="h-4 w-4 text-yellow-500" />
          <span>4.9 from 2,000+ reviews</span>
        </div>
      </div>
      <div className="rounded-lg bg-gray-100 p-[18px]">
        <img src="/hero.svg" alt="A linen-covered armchair beside a ceramic lamp" className="w-full rounded-md" />
      </div>
    </section>
  );
}
