'use client';

import { useState, useCallback } from 'react';
import { Wand2, Download, RotateCcw, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageUploader } from '@/components/ImageUploader';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { ProcessingIndicator } from '@/components/ProcessingIndicator';
import {
  removeBackgroundFromImage,
  downloadImage,
  ProgressState,
} from '@/lib/backgroundRemoval';

type ProcessingState = 'idle' | 'uploading' | 'processing' | 'completed' | 'error';

export function BackgroundRemover() {
  const [processingState, setProcessingState] = useState<ProcessingState>('idle');
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const [processedPreview, setProcessedPreview] = useState<string>('');
  const [progress, setProgress] = useState<ProgressState | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = useCallback((file: File, previewUrl: string) => {
    setOriginalFile(file);
    setOriginalPreview(previewUrl);
    setProcessingState('uploading');
    setProcessedBlob(null);
    setProcessedPreview('');
    setError(null);
    setProgress(undefined);
  }, []);

  const handleClear = useCallback(() => {
    setOriginalFile(null);
    setOriginalPreview('');
    setProcessedBlob(null);
    setProcessedPreview('');
    setProcessingState('idle');
    setError(null);
    setProgress(undefined);
  }, []);

  const handleRemoveBackground = useCallback(async () => {
    if (!originalFile) return;

    setProcessingState('processing');
    setError(null);
    setProgress(undefined);

    try {
      const result = await removeBackgroundFromImage(originalFile, (p) => {
        setProgress(p);
      });

      setProcessedBlob(result);

      // Create preview URL for processed image
      const previewUrl = URL.createObjectURL(result);
      setProcessedPreview(previewUrl);
      setProcessingState('completed');
    } catch (err) {
      console.error('Background removal failed:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to remove background. Please try again.'
      );
      setProcessingState('error');
    }
  }, [originalFile]);

  const handleDownload = useCallback(() => {
    if (processedBlob && originalFile) {
      downloadImage(processedBlob, originalFile.name);
    }
  }, [processedBlob, originalFile]);

  const handleReset = useCallback(() => {
    handleClear();
  }, [handleClear]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Upload or Preview Section */}
      {processingState === 'idle' && (
        <ImageUploader
          onImageSelect={handleImageSelect}
          disabled={processingState === 'processing'}
        />
      )}

      {/* Image Preview with Controls */}
      {processingState === 'uploading' && originalPreview && (
        <div className="space-y-4">
          <ImageUploader
            onImageSelect={handleImageSelect}
            previewUrl={originalPreview}
            onClear={handleClear}
            disabled={processingState === 'processing'}
          />
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={handleRemoveBackground}
              className="gap-2 text-base px-8"
            >
              <Wand2 className="w-5 h-5" />
              Remove Background
            </Button>
          </div>
        </div>
      )}

      {/* Processing State */}
      {processingState === 'processing' && (
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden border-2 border-border bg-card opacity-50">
            <img
              src={originalPreview}
              alt="Processing"
              className="w-full h-auto max-h-[400px] object-contain mx-auto"
            />
          </div>
          <ProcessingIndicator progress={progress} />
        </div>
      )}

      {/* Completed State */}
      {processingState === 'completed' && processedPreview && (
        <div className="space-y-4">
          <BeforeAfterSlider
            beforeImage={originalPreview}
            afterImage={processedPreview}
            beforeLabel="Original"
            afterLabel="Background Removed"
          />

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={handleDownload}
              className="gap-2 text-base px-8"
            >
              <Download className="w-5 h-5" />
              Download PNG
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleReset}
              className="gap-2 text-base"
            >
              <RotateCcw className="w-5 h-5" />
              New Image
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Your image has been processed. Download it as a transparent PNG.
          </p>
        </div>
      )}

      {/* Error State */}
      {processingState === 'error' && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
            <p className="text-destructive font-medium">{error}</p>
          </div>

          <ImageUploader
            onImageSelect={handleImageSelect}
            previewUrl={originalPreview}
            onClear={handleClear}
            disabled={processingState === 'processing'}
          />

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={handleReset}
              className="gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Start Over
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
