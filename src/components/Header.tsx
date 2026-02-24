'use client';

import { Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground leading-tight">
              AI Background Remover
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Remove backgrounds instantly
            </span>
          </div>
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6 mr-4">
            <a href="#tool" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tool
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
