import { Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-content">Northfold</p>
          <p className="mt-3 max-w-sm text-sm text-gray-500">Get first look at new collections and stories from our workshops.</p>
          <form className="mt-5 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="h-10 flex-1 rounded-md border border-border bg-bg px-3 text-sm" />
            <Button>Subscribe</Button>
          </form>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-content">Shop</p>
          <ul className="mt-3 space-y-2 text-gray-500"><li>Furniture</li><li>Lighting</li><li>Textiles</li><li>Ceramics</li></ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-content">Company</p>
          <ul className="mt-3 space-y-2 text-gray-500"><li>Our story</li><li>Workshops</li><li>Careers</li><li>Contact</li></ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-border px-6 py-6 text-xs text-gray-400">
        <span>© 2026 Northfold ApS</span>
        <div className="flex gap-4"><Instagram className="h-4 w-4" /><Mail className="h-4 w-4" /></div>
      </div>
    </footer>
  );
}
