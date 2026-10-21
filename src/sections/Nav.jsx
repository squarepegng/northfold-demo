import { ShoppingBag, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl text-content">Northfold</a>
        <nav className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
          <a href="#shop">Shop</a>
          <a href="#story">Our story</a>
          <a href="#journal">Journal</a>
          <a href="#faq">Help</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button className="p-2 text-gray-500" aria-label="Cart"><ShoppingBag className="h-5 w-5" /></button>
          <Button size="sm" className="hidden md:inline-flex">Sign in</Button>
          <button className="p-2 md:hidden" aria-label="Menu"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}
