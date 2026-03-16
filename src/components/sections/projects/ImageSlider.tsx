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
    <div className='relative w-full h-64 overflow-hidden bg-muted group/thumbnail border-2 border-foreground rounded-2xl shadow-[4px_4px_0px_hsl(var(--shadow-soft))]'>
      {images.length > 0 ? (
        <>
          {images.map((image, i) => (
            <div
              key={image.src}
              className='absolute inset-0'
              style={{
                transform: `translateX(${(i - currentIndex) * 100}%)`,
                transition: 'transform 300ms ease-in-out',
              }}
            >
              <img
                src={image.src}
                alt={`${title} 이미지 ${i + 1}`}
                loading='lazy'
                decoding='async'
                className={cn(
                  'w-full h-full object-cover',
                  image.isBlur && 'blur-xs',
                )}
              />
            </div>
          ))}

          <button
            type='button'
            onClick={onOpenFullscreen}
            className='absolute top-3 right-3 p-2 cursor-pointer bg-background/90 hover:bg-secondary rounded-full text-foreground border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-soft))] opacity-100 md:opacity-0 md:group-hover/thumbnail:opacity-100 transition-all z-10'
            aria-label='이미지 전체화면 보기'
          >
            <Maximize2 className='h-5 w-5' />
          </button>

          {hasMultiple && (
            <>
              <button
                type='button'
                onClick={onPrev}
                disabled={currentIndex === 0}
                className='absolute left-2 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer bg-background/90 hover:bg-secondary disabled:opacity-40 disabled:cursor-default rounded-full text-foreground border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-soft))] transition-all z-10'
                aria-label='이전 이미지'
              >
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button
                type='button'
                onClick={onNext}
                disabled={currentIndex === images.length - 1}
                className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer bg-background/90 hover:bg-secondary disabled:opacity-40 disabled:cursor-default rounded-full text-foreground border-2 border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-soft))] transition-all z-10'
                aria-label='다음 이미지'
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </>
          )}

          {hasMultiple && (
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10'>
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type='button'
                  onClick={() => onIndexChange(i)}
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
        </>
      ) : (
        <div className='w-full h-full bg-linear-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center'>
          <Code2 className='h-24 w-24 text-primary/40' />
        </div>
      )}
    </div>
  );
}
