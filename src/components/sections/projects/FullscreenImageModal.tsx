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
    <div
      className='fixed inset-0 z-60 flex items-center justify-center bg-black/90'
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className='absolute top-4 right-4 p-2 cursor-pointer bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors'
        aria-label='전체화면 닫기'
      >
        <X className='h-6 w-6' />
      </button>

      {hasMultiple && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            disabled={currentIndex === 0}
            className='absolute left-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-colors'
            aria-label='이전 이미지'
          >
            <ChevronLeft className='h-6 w-6' />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            disabled={currentIndex === images.length - 1}
            className='absolute right-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-colors'
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
          'max-w-[90vw] max-h-[90vh] object-contain',
          currentImage.isBlur && 'blur-xs',
        )}
        onClick={(e) => e.stopPropagation()}
      />

      {hasMultiple && (
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                onIndexChange(i);
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all cursor-pointer',
                i === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80',
              )}
              aria-label={`이미지 ${i + 1}로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
