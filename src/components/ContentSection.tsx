'use client';

export function ContentSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* What is Background Removal */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What is Background Removal?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Background removal is a digital image processing technique that isolates the main subject of a photograph from its surrounding environment. This process creates a transparent layer around the subject, allowing it to be placed on any new background or used independently. The technique has become essential in various industries, from e-commerce product photography to professional portrait editing and creative design work.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Traditionally, background removal required skilled graphic designers who manually traced around subjects using tools like Photoshop&apos;s pen tool or lasso selection. This process was time-consuming, often taking 15-30 minutes per image, and results varied greatly depending on the designer&apos;s skill level. Complex subjects with fine details like hair, fur, or transparent objects were particularly challenging.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Modern AI-powered background removal has revolutionized this process. Machine learning models can now automatically detect subjects with remarkable accuracy, handling complex edges and semi-transparent areas that were previously difficult to mask. What once took professional designers half an hour can now be accomplished in seconds, making professional-quality background removal accessible to everyone.
          </p>
        </article>

        {/* How AI Removes Background */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            How AI Removes Backgrounds from Images
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AI background removal relies on deep learning models, specifically convolutional neural networks (CNNs), that have been trained on millions of annotated images. These models learn to recognize patterns that distinguish foreground subjects from backgrounds, including edge detection, color differentiation, texture analysis, and semantic understanding of common objects.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The process begins with the AI analyzing the image at multiple scales. It identifies the main subject by recognizing common objects (people, products, animals) and understanding spatial relationships. The model then creates a detailed segmentation mask – essentially a black and white map where white pixels represent the subject and black pixels represent the background. For areas with fine details like hair strands, the model produces soft edges (alpha values between 0 and 1) to create natural-looking transitions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our tool uses the @imgly/background-removal library, which implements a state-of-the-art segmentation model optimized for browser performance. The model runs using WebAssembly and WebGL, allowing it to execute efficiently on your device&apos;s hardware. This approach offers several advantages: complete privacy (images never leave your device), offline capability after initial model download, and no server-side processing costs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The neural network architecture includes encoder-decoder structures with attention mechanisms that help the model focus on relevant image regions. Skip connections preserve fine spatial details that might otherwise be lost during processing. The result is a precise, clean separation of subject and background that handles challenging cases like transparent objects, complex hair, and intricate product details.
          </p>
        </article>

        {/* Benefits */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Benefits of Using Our Background Remover
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Complete Privacy and Security
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike cloud-based alternatives that upload your images to remote servers, our tool processes everything locally in your browser. Your photos, product images, and sensitive documents never leave your device. This makes our tool ideal for businesses handling confidential product photos, photographers protecting client work, or anyone concerned about their digital privacy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No Cost, No Limits, No Watermarks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Many online background removers impose strict limits on free usage or add watermarks to processed images. Our tool is completely free with no usage restrictions, no hidden premium tiers, and absolutely no watermarks on your results. Process one image or one thousand – the quality and freedom remain the same.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Professional Quality Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The AI model powering our tool delivers professional-grade results comparable to manual work by skilled designers. It handles challenging subjects including fine hair details, transparent objects like glass and water, complex product edges, and subjects with similar colors to their backgrounds. The output maintains full resolution and quality, suitable for print materials, e-commerce listings, and professional presentations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Instant Processing Speed
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional background removal services can take minutes to hours, especially during peak times. Our client-side processing delivers results in seconds, limited only by your device&apos;s capabilities. There are no queues, no waiting for server availability, and no processing delays. Upload, click, and download – the entire workflow takes under a minute.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Works Offline After Initial Load
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                After the AI model downloads to your browser (approximately 50MB on first use), the tool works completely offline. This is perfect for photographers working on location, designers traveling without reliable internet, or anyone who needs to process images in areas with poor connectivity. Your productivity isn&apos;t dependent on network conditions.
              </p>
            </div>
          </div>
        </article>

        {/* Use Cases */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Common Use Cases for Background Removal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <UseCaseCard
              title="E-Commerce Product Photos"
              description="Create clean, professional product listings with consistent white or transparent backgrounds. Improve conversion rates with polished imagery."
            />
            <UseCaseCard
              title="Portrait Photography"
              description="Isolate subjects from distracting backgrounds and place them in new environments or create clean headshots for professional use."
            />
            <UseCaseCard
              title="Marketing Materials"
              description="Extract product shots and people for use in advertisements, brochures, social media posts, and promotional content."
            />
            <UseCaseCard
              title="Graphic Design"
              description="Quickly isolate elements for composites, collages, and creative projects without spending hours on manual masking."
            />
            <UseCaseCard
              title="Social Media Content"
              description="Create eye-catching profile pictures, thumbnails, and posts with removed backgrounds for a clean, professional appearance."
            />
            <UseCaseCard
              title="Presentations & Documents"
              description="Insert clean subject images into PowerPoint presentations, reports, and documents without background interference."
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
