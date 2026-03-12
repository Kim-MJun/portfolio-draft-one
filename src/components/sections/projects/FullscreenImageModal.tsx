import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ProjectImage } from '@/data/resume';

interface FullscreenImageModalProps {
  images: ProjectImage[];
  title: string;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
}

export function FullscreenImageModal({
  images,
  title,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onIndexChange,
}: FullscreenImageModalProps) {
  const hasMultiple = images.length > 1;
  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <div className='fixed inset-0 z-60 flex items-center justify-center bg-foreground/80 relative'>
      <button
        type='button'
        className='absolute inset-0 cursor-pointer'
        onClick={onClose}
        aria-label='전체화면 배경 닫기'
      />
      <button
        type='button'
        onClick={onClose}
        className='absolute top-4 right-4 z-20 p-2 cursor-pointer bg-background/90 hover:bg-secondary rounded-full text-foreground border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-soft))] transition-all'
        aria-label='전체화면 닫기'
      >
        <X className='h-6 w-6' />
      </button>

      {hasMultiple && (
        <>
          <button
            type='button'
            onClick={() => {
              onPrev();
            }}
            disabled={currentIndex === 0}
            className='absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer bg-background/90 hover:bg-secondary disabled:opacity-40 disabled:cursor-default rounded-full text-foreground border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-soft))] transition-all'
            aria-label='이전 이미지'
          >
            <ChevronLeft className='h-6 w-6' />
          </button>
          <button
            type='button'
            onClick={() => {
              onNext();
            }}
            disabled={currentIndex === images.length - 1}
            className='absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer bg-background/90 hover:bg-secondary disabled:opacity-40 disabled:cursor-default rounded-full text-foreground border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-soft))] transition-all'
            aria-label='다음 이미지'
          >
            <ChevronRight className='h-6 w-6' />
          </button>
        </>
      )}

      <img
        src={currentImage.src}
        alt={`${title} 이미지 ${currentIndex + 1}`}
        className={cn(
          'max-w-[90vw] max-h-[90vh] object-contain relative z-20',
          currentImage.isBlur && 'blur-xs',
        )}
      />

      {hasMultiple && (
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
          {images.map((image, i) => (
            <button
              key={image.src}
              type='button'
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange(i);
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all cursor-pointer border border-foreground/40',
                i === currentIndex
                  ? 'bg-secondary w-4 shadow-[1px_1px_0px_hsl(var(--shadow-soft))]'
                  : 'bg-background/80 hover:bg-background',
              )}
              aria-label={`이미지 ${i + 1}로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
