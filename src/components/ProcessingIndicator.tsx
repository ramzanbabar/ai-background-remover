'use client';

import { Loader2, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { ProgressState } from '@/lib/backgroundRemoval';

interface ProcessingIndicatorProps {
  progress?: ProgressState;
  message?: string;
}

export function ProcessingIndicator({ progress, message }: ProcessingIndicatorProps) {
  const percentage = progress?.percentage ?? 0;
  
  const getStageMessage = () => {
    if (message) return message;
    if (!progress) return 'Initializing AI model...';
    
    switch (progress.key) {
      case 'fetch':
        return 'Downloading AI model...';
      case 'compute:inference':
        return 'Processing image with AI...';
      case 'encode':
        return 'Encoding result...';
      default:
        return 'Removing background...';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl bg-card border border-border shadow-lg">
      <div className="flex flex-col items-center gap-6">
        {/* Animated icon */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping opacity-20">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>

        {/* Progress content */}
        <div className="w-full space-y-3">
          <p className="text-center font-medium text-foreground">
            {getStageMessage()}
          </p>
          
          <div className="space-y-2">
            <Progress value={percentage} className="h-2" />
            <p className="text-xs text-center text-muted-foreground">
              {percentage}% complete
            </p>
          </div>
        </div>

        {/* Info text */}
        <p className="text-xs text-muted-foreground text-center max-w-xs">
          First time loading may take a moment as the AI model downloads (~50MB).
          Subsequent uses will be much faster.
        </p>
      </div>
    </div>
  );
}
