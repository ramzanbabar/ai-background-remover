'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is background removal?',
    answer: 'Background removal is the process of separating the main subject of an image from its background, creating a transparent area around the subject. This technique is commonly used in e-commerce product photography, portrait editing, graphic design, and creating marketing materials. The result is a clean, professional-looking image with a transparent background that can be placed on any new background or used as a standalone element.',
  },
  {
    question: 'How does AI remove backgrounds from images?',
    answer: 'AI background removal uses deep learning models trained on millions of images to identify and separate subjects from their backgrounds. The model analyzes patterns, edges, colors, and textures to create a precise mask around the subject. Our tool uses a state-of-the-art neural network that runs directly in your browser using WebAssembly and WebGL, ensuring fast processing without uploading your images to any server.',
  },
  {
    question: 'Is this background remover really free?',
    answer: 'Yes, our background remover is completely free to use with no hidden costs, watermarks, or usage limits. There are no premium tiers or subscription requirements. You can process as many images as you need without paying anything. The tool is supported by ethical advertising and remains committed to providing free access to everyone.',
  },
  {
    question: 'Are my images private and secure?',
    answer: 'Absolutely! Your privacy is our top priority. All image processing happens directly in your browser using client-side AI technology. Your images are never uploaded to our servers or any third-party services. Once you close the tab, your images are gone. This makes our tool ideal for processing sensitive images, confidential business documents, or personal photos.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'Our background remover supports all common image formats including PNG, JPG, JPEG, and WebP. For best results, we recommend using high-quality images with good lighting and clear subject definition. The maximum file size is 5MB, which is sufficient for most web-quality images. The output is always provided as a PNG file with transparent background support.',
  },
  {
    question: 'How long does it take to remove a background?',
    answer: 'Processing time depends on your device capabilities and image size. On most modern computers and smartphones, background removal takes just 2-10 seconds. The first time you use the tool, there may be a brief delay while the AI model downloads (approximately 50MB). After that, the model is cached in your browser for much faster subsequent uses.',
  },
  {
    question: 'Can I use the processed images commercially?',
    answer: 'Yes, you can use the processed images for any purpose, including commercial projects, without attribution. Since we do not store or modify your original images, you retain full ownership and rights to your content. The tool simply provides a service to help you edit your own images.',
  },
  {
    question: 'Does it work on mobile devices?',
    answer: 'Yes, our background remover is fully responsive and works on smartphones and tablets. However, for optimal performance and faster processing, we recommend using a desktop or laptop computer with a modern browser. Mobile devices may experience slightly longer processing times due to hardware limitations.',
  },
];

export function FAQ() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our AI background remover tool.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
