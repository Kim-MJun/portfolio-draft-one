import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, X, Users, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { type Project } from '@/data/resume';
import { ImageSlider } from './ImageSlider';
import { FullscreenImageModal } from './FullscreenImageModal';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const images = project.images ?? [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else {
          onClose();
        }
      }
      if (isImageFullscreen && images.length > 1) {
        if (e.key === 'ArrowLeft') setCurrentIndex((i) => Math.max(0, i - 1));
        if (e.key === 'ArrowRight') setCurrentIndex((i) => Math.min(images.length - 1, i + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageFullscreen, onClose, images.length]);

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose} />

      {/* Modal */}
      <div className='relative bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden'>
        <div className='max-h-[90vh] overflow-y-auto'>
          <div className='sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10'>
            <h2 className='text-xl font-bold text-foreground'>{project.title}</h2>
            <Button variant='ghost' size='icon' onClick={onClose} aria-label='모달 닫기'>
              <X className='h-5 w-5' />
            </Button>
          </div>

          <ImageSlider
            images={images}
            title={project.title}
            currentIndex={currentIndex}
            onPrev={goPrev}
            onNext={goNext}
            onIndexChange={setCurrentIndex}
            onOpenFullscreen={() => setIsImageFullscreen(true)}
          />

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
              <p className='text-sm text-muted-foreground leading-relaxed'>{project.description}</p>
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
                  <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                    <ExternalLink className='h-4 w-4 mr-2' />
                    서비스 바로가기
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isImageFullscreen && (
        <FullscreenImageModal
          images={images}
          title={project.title}
          currentIndex={currentIndex}
          onClose={() => setIsImageFullscreen(false)}
          onPrev={goPrev}
          onNext={goNext}
          onIndexChange={setCurrentIndex}
        />
      )}
    </div>
  );
}
