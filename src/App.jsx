import { Nav } from '@/sections/Nav';
import { Hero } from '@/sections/Hero';
import { Logos } from '@/sections/Logos';
import { Features } from '@/sections/Features';
import { Products } from '@/sections/Products';
import { Pricing } from '@/sections/Pricing';
import { Testimonials } from '@/sections/Testimonials';
import { Faq } from '@/sections/Faq';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Products />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
