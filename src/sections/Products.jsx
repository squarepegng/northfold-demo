import { Heart } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/SectionHeading';

const PRODUCTS = [
  { name: 'Halde Lounge Chair', price: '€690', img: '/chair.svg', tag: 'bestseller' },
  { name: 'Kiln Table Lamp', price: '€185', img: '/lamp.svg', tag: 'new' },
  { name: 'Strand Stoneware Vase', price: '€64', img: '/vase.svg', tag: 'limited' },
  { name: 'Fjell Wool Throw', price: '€120', img: '/throw.svg', tag: 'sale' },
];

export function Products() {
  return (
    <section id="shop" className="bg-surface-2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="The shop" title="Bestsellers this season">
          Our most loved pieces, back in stock.
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group rounded-xl bg-white p-4 shadow-card">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img src={p.img} alt={p.name} className="aspect-square w-full object-cover" />
                <button className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-500" aria-label="Save"><Heart className="h-4 w-4" /></button>
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium text-content">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.price}</p>
                </div>
                <Tag kind={p.tag} />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline">View all products</Button>
        </div>
      </div>
    </section>
  );
}
