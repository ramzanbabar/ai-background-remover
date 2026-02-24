'use client';

import { 
  Sparkles, 
  Zap, 
  Shield, 
  Download, 
  Clock, 
  Smartphone,
  Globe,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI-Powered Technology',
    description: 'Our advanced machine learning model accurately detects and removes backgrounds from any image, preserving fine details like hair and transparent objects.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Results',
    description: 'Get your background-free image in seconds. No waiting in queues or processing delays. The AI works directly in your browser for immediate results.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '100% Private & Secure',
    description: 'Your images never leave your device. All processing happens locally in your browser using WebAssembly and WebGL. No data is uploaded to any server.',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'High-Quality Downloads',
    description: 'Download your processed images as transparent PNGs with full resolution support. Perfect for e-commerce, design projects, and social media.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'No Registration Required',
    description: 'Start removing backgrounds immediately without creating an account. No email verification, no passwords, no hassle. Just upload and go.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Works on All Devices',
    description: 'Our responsive design works perfectly on desktop, tablet, and mobile devices. Remove backgrounds anywhere, anytime, from any device.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Works Offline',
    description: 'After the initial AI model download, the tool works completely offline. No internet connection needed for subsequent uses.',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Always Free',
    description: 'No hidden fees, no premium tiers, no watermarks. Use the tool as much as you want, completely free of charge, forever.',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Background Remover?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our tool the best choice for removing image backgrounds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
