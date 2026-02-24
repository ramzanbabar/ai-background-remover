'use client';

export interface ProgressState {
  key: string;
  current: number;
  total: number;
  percentage: number;
}

export type ProgressCallback = (progress: ProgressState) => void;

/**
 * Removes background from an image using AI
 * This function runs entirely in the browser using @imgly/background-removal
 */
export async function removeBackgroundFromImage(
  imageFile: File,
  onProgress?: ProgressCallback
): Promise<Blob> {
  // Dynamic import to reduce initial bundle size
  const { removeBackground } = await import('@imgly/background-removal');

  const result = await removeBackground(imageFile, {
    progress: (key: string, current: number, total: number) => {
      if (onProgress) {
        const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
        onProgress({ key, current, total, percentage });
      }
    },
    model: 'small', // Use small model for faster processing
  });

  return result;
}

/**
 * Validates if file is an acceptable image format
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!acceptedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Please upload a PNG, JPG, JPEG, or WEBP image.',
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'File size must be less than 5MB.',
    };
  }

  return { valid: true };
}

/**
 * Converts a file to a data URL for display
 */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Creates a download link for the processed image
 */
export function downloadImage(blob: Blob, originalFileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  
  // Preserve original filename but add _no_bg suffix
  const nameWithoutExt = originalFileName.replace(/\.[^/.]+$/, '');
  link.download = `${nameWithoutExt}_no_bg.png`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
