import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Modules from '@/components/sections/Modules';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="modules">
          <Modules />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTA />
        <div id="footer">
          <Footer />
        </div>
      </main>
    </>
  );
}
