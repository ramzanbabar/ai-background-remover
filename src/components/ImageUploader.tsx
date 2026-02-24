'use client';

import { useCallback, useState } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { validateImageFile, fileToDataUrl, formatFileSize } from '@/lib/backgroundRemoval';

interface ImageUploaderProps {
  onImageSelect: (file: File, previewUrl: string) => void;
  onClear?: () => void;
  previewUrl?: string;
  disabled?: boolean;
}

export function ImageUploader({
  onImageSelect,
  onClear,
  previewUrl,
  disabled = false,
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);
      
      const validation = validateImageFile(file);
      if (!validation.valid) {
        setError(validation.error || 'Invalid file');
        return;
      }

      try {
        const dataUrl = await fileToDataUrl(file);
        setSelectedFile(file);
        onImageSelect(file, dataUrl);
      } catch {
        setError('Failed to read the image file');
      }
    },
    [onImageSelect]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragging(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFile(file);
      }
    },
    [disabled, handleFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleClear = useCallback(() => {
    setSelectedFile(null);
    setError(null);
    onClear?.();
  }, [onClear]);

  if (previewUrl) {
    return (
      <div className="relative w-full">
        <div className="relative rounded-xl overflow-hidden border-2 border-border bg-card">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-auto max-h-[400px] object-contain mx-auto"
          />
          {!disabled && (
            <button
              onClick={handleClear}
              className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              aria-label="Remove image"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {selectedFile && (
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-medium truncate">
                {selectedFile.name}
              </p>
              <p className="text-white/70 text-xs">
                {formatFileSize(selectedFile.size)}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          'relative border-2 border-dashed rounded-xl p-8 md:p-12 transition-all duration-200 cursor-pointer',
          'hover:border-primary/50 hover:bg-accent/30',
          isDragging
            ? 'border-primary bg-primary/10 scale-[1.02]'
            : 'border-border bg-card/50',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          onChange={handleInputChange}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Upload image"
        />
        
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className={cn(
            'p-4 rounded-full bg-primary/10 transition-colors',
            isDragging && 'bg-primary/20'
          )}>
            {isDragging ? (
              <ImageIcon className="w-8 h-8 text-primary" />
            ) : (
              <Upload className="w-8 h-8 text-primary" />
            )}
          </div>
          
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              {isDragging ? 'Drop your image here' : 'Upload an image'}
            </p>
            <p className="text-sm text-muted-foreground">
              Drag and drop or click to select
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, JPEG, WEBP up to 5MB
            </p>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm text-destructive text-center">{error}</p>
      )}
    </div>
  );
}
