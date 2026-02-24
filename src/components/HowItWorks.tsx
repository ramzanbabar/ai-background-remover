'use client';

import { Upload, Wand2, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Upload className="w-8 h-8" />,
    title: 'Upload Your Image',
    description: 'Drag and drop your image or click to select a file. We support PNG, JPG, JPEG, and WebP formats up to 5MB. Your image is processed entirely in your browser.',
  },
  {
    number: '02',
    icon: <Wand2 className="w-8 h-8" />,
    title: 'AI Removes Background',
    description: 'Our advanced AI model analyzes your image and precisely separates the subject from the background. The process takes just seconds and handles complex edges like hair and transparent objects.',
  },
  {
    number: '03',
    icon: <Download className="w-8 h-8" />,
    title: 'Download Result',
    description: 'Preview your background-free image with our comparison slider, then download it as a high-quality transparent PNG. Use it anywhere - presentations, websites, or design projects.',
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-16 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Remove backgrounds in three simple steps. No technical skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-8" />
              )}

              <div className="text-center space-y-4">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="p-4 rounded-xl bg-card border border-border text-primary">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
