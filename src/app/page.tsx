'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BackgroundRemover } from '@/components/BackgroundRemover';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ContentSection } from '@/components/ContentSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Tool Section */}
        <section id="tool" className="w-full py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <BackgroundRemover />
          </div>
        </section>

        {/* How It Works */}
        <div id="how-it-works">
          <HowItWorks />
        </div>

        {/* Features */}
        <div id="features">
          <FeaturesSection />
        </div>

        {/* Content Sections */}
        <ContentSection />

        {/* FAQ */}
        <div id="faq">
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}
