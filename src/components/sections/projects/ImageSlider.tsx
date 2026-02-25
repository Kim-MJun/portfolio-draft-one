import { Maximize2, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ProjectImage } from '@/data/resume';

interface ImageSliderProps {
  images: ProjectImage[];
  title: string;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
  onOpenFullscreen: () => void;
}

export function ImageSlider({
  images,
  title,
  currentIndex,
  onPrev,
  onNext,
  onIndexChange,
  onOpenFullscreen,
}: ImageSliderProps) {
  const hasMultiple = images.length > 1;

  return (
    <div className='relative w-full h-64 overflow-hidden bg-muted group/thumbnail'>
      {images.length > 0 ? (
        <>
          {images.map((image, i) => (
            <div
              key={i}
              className='absolute inset-0'
              style={{
                transform: `translateX(${(i - currentIndex) * 100}%)`,
                transition: 'transform 300ms ease-in-out',
              }}
            >
              <img
                src={image.src}
                alt={`${title} 이미지 ${i + 1}`}
                className={cn('w-full h-full object-cover', image.isBlur && 'blur-xs')}
              />
            </div>
          ))}

          <button
            onClick={onOpenFullscreen}
            className='absolute top-3 right-3 p-2 cursor-pointer bg-black/50 hover:bg-black/70 rounded-lg text-white opacity-0 group-hover/thumbnail:opacity-100 transition-opacity z-10'
            aria-label='이미지 전체화면 보기'
          >
            <Maximize2 className='h-5 w-5' />
          </button>

          {hasMultiple && (
            <>
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className='absolute left-2 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-opacity z-10'
                aria-label='이전 이미지'
              >
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button
                onClick={onNext}
                disabled={currentIndex === images.length - 1}
                className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-opacity z-10'
                aria-label='다음 이미지'
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </>
          )}

          {hasMultiple && (
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10'>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onIndexChange(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all cursor-pointer',
                    i === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80',
                  )}
                  aria-label={`이미지 ${i + 1}로 이동`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className='w-full h-full bg-linear-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center'>
          <Code2 className='h-24 w-24 text-primary/40' />
        </div>
      )}
    </div>
  );
}
