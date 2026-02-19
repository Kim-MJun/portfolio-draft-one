import { useState, useEffect } from 'react';
import {
  Calendar,
  ExternalLink,
  X,
  Users,
  CheckCircle2,
  Maximize2,
  Code2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type Project } from '@/data/resume';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const images = project.images ?? [];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else {
          onClose();
        }
      }
      if (isImageFullscreen && hasMultiple) {
        if (e.key === 'ArrowLeft') setCurrentIndex((i) => Math.max(0, i - 1));
        if (e.key === 'ArrowRight') setCurrentIndex((i) => Math.min(images.length - 1, i + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageFullscreen, onClose, hasMultiple, images.length]);

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden'>
        <div className='max-h-[90vh] overflow-y-auto'>
          <div className='sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10'>
            <h2 className='text-xl font-bold text-foreground'>
              {project.title}
            </h2>
            <Button variant='ghost' size='icon' onClick={onClose} aria-label='모달 닫기'>
              <X className='h-5 w-5' />
            </Button>
          </div>

          {/* Image Slider */}
          <div className='relative w-full h-64 overflow-hidden bg-muted group/thumbnail'>
            {images.length > 0 ? (
              <>
                {/* Slides */}
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
                      alt={`${project.title} 이미지 ${i + 1}`}
                      className={cn(
                        'w-full h-full object-cover',
                        image.isBlur && 'blur-xs',
                      )}
                    />
                  </div>
                ))}

                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsImageFullscreen(true)}
                  className='absolute top-3 right-3 p-2 cursor-pointer bg-black/50 hover:bg-black/70 rounded-lg text-white opacity-0 group-hover/thumbnail:opacity-100 transition-opacity z-10'
                  aria-label='이미지 전체화면 보기'
                >
                  <Maximize2 className='h-5 w-5' />
                </button>

                {/* Prev / Next Buttons */}
                {hasMultiple && (
                  <>
                    <button
                      onClick={goPrev}
                      disabled={currentIndex === 0}
                      className='absolute left-2 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-opacity z-10'
                      aria-label='이전 이미지'
                    >
                      <ChevronLeft className='h-5 w-5' />
                    </button>
                    <button
                      onClick={goNext}
                      disabled={currentIndex === images.length - 1}
                      className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 cursor-pointer bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-opacity z-10'
                      aria-label='다음 이미지'
                    >
                      <ChevronRight className='h-5 w-5' />
                    </button>
                  </>
                )}

                {/* Dot Indicators */}
                {hasMultiple && (
                  <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10'>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={cn(
                          'w-2 h-2 rounded-full transition-all cursor-pointer',
                          i === currentIndex
                            ? 'bg-white w-4'
                            : 'bg-white/50 hover:bg-white/80',
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

          <div className='p-6 space-y-6'>
            {/* Meta info */}
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                {project.period}
              </div>
              <div className='flex items-center gap-1'>
                <Users className='h-4 w-4' />
                {project.role}
              </div>
            </div>

            {/* Highlights */}
            <div className='flex flex-wrap gap-2'>
              {project.highlights.map((highlight) => (
                <Badge key={highlight}>{highlight}</Badge>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className='font-semibold text-foreground mb-2'>프로젝트 설명</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className='font-semibold text-foreground mb-2'>기술 스택</h3>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant='secondary'>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className='space-y-4'>
                {project.achievements.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h3 className='font-bold text-accent mb-2'>{group.category}</h3>
                    <ul className='space-y-1.5'>
                      {group.items.map((item, index) => (
                        <li
                          key={index}
                          className='flex items-start gap-2 text-sm text-muted-foreground'
                        >
                          <CheckCircle2 className='h-4 w-4 text-primary mt-0.5 shrink-0' />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Live URL */}
            {project.liveUrl && (
              <div className='pt-4 border-t border-border'>
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='h-4 w-4 mr-2' />
                    서비스 바로가기
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isImageFullscreen && images[currentIndex] && (
        <div
          className='fixed inset-0 z-60 flex items-center justify-center bg-black/90'
          onClick={() => setIsImageFullscreen(false)}
        >
          <button
            onClick={() => setIsImageFullscreen(false)}
            className='absolute top-4 right-4 p-2 cursor-pointer bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors'
            aria-label='전체화면 닫기'
          >
            <X className='h-6 w-6' />
          </button>

          {/* Fullscreen Prev/Next */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                disabled={currentIndex === 0}
                className='absolute left-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-colors'
                aria-label='이전 이미지'
              >
                <ChevronLeft className='h-6 w-6' />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                disabled={currentIndex === images.length - 1}
                className='absolute right-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-default rounded-lg text-white transition-colors'
                aria-label='다음 이미지'
              >
                <ChevronRight className='h-6 w-6' />
              </button>
            </>
          )}

          <img
            src={images[currentIndex].src}
            alt={`${project.title} 이미지 ${currentIndex + 1}`}
            className={cn(
              'max-w-[90vw] max-h-[90vh] object-contain',
              images[currentIndex].isBlur && 'blur-xs',
            )}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Fullscreen Dot Indicators */}
          {hasMultiple && (
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all cursor-pointer',
                    i === currentIndex
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/80',
                  )}
                  aria-label={`이미지 ${i + 1}로 이동`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
