import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="journal" className="bg-primary py-20 text-primary-fg">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        <figure className="rounded-xl bg-white/10 p-6">
          <Quote className="h-6 w-6 opacity-60" />
          <blockquote className="mt-4 text-lg">The Halde chair is the best thing we bought for the new flat. Two years on it still looks brand new.</blockquote>
          <figcaption className="mt-4 text-sm opacity-70">Sofie, Aarhus</figcaption>
        </figure>
        <figure className="rounded-xl bg-white/10 p-6">
          <Quote className="h-6 w-6 opacity-60" />
          <blockquote className="mt-4 text-lg">Beautiful, simple and actually built to last. Delivery was quick and the packaging was all paper.</blockquote>
          <figcaption className="mt-4 text-sm opacity-70">James, London</figcaption>
        </figure>
        <figure className="rounded-xl bg-white/10 p-6">
          <Quote className="h-6 w-6 opacity-60" />
          <blockquote className="mt-4 text-lg">They repaired a lamp I bought four years ago, for free. That is how a shop should work.</blockquote>
          <figcaption className="mt-4 text-sm opacity-70">Marta, Berlin</figcaption>
        </figure>
      </div>
    </section>
  );
}
