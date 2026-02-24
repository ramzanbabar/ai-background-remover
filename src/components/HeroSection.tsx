'use client';

import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          <Sparkles className="w-4 h-4" />
          AI-Powered Background Removal
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Remove Image Background{' '}
          <span className="text-primary">Online Free</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Instantly remove backgrounds from your images using advanced AI technology.
          100% free, no signup required. Works entirely in your browser.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <FeaturePill icon={<Zap className="w-4 h-4" />} text="Instant Processing" />
          <FeaturePill icon={<Shield className="w-4 h-4" />} text="100% Private" />
          <FeaturePill icon={<Globe className="w-4 h-4" />} text="Works Offline" />
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
      {icon}
      {text}
    </div>
  );
}
