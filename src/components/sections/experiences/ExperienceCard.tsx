import { Building2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type Experience } from '@/data/resume';

interface ExperienceCardProps {
  exp: Experience;
  index: number;
  isReversed: boolean;
}

export function ExperienceCard({ exp, index, isReversed }: ExperienceCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row gap-8',
        isReversed && 'md:flex-row-reverse',
      )}
      data-aos={isReversed ? 'fade-left' : 'fade-right'}
      data-aos-delay={index * 100}
    >
      {/* Timeline dot */}
      <div
        className='absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 -translate-x-1/2'
        aria-hidden='true'
      />

      {/* Content */}
      <div
        className={cn(
          'md:w-1/2 pl-8 md:pl-0',
          isReversed ? 'md:pl-8' : 'md:pr-8 md:text-right',
        )}
      >
        <div
          className={cn(
            'bg-background border border-border rounded-xl p-6',
            !isReversed && 'md:ml-auto',
          )}
        >
          <div
            className={cn('flex items-center gap-2 mb-2', !isReversed && 'md:justify-end')}
          >
            <Building2 className='h-4 w-4 text-accent' />
            <span className='font-semibold text-foreground'>{exp.company}</span>
            <Badge variant='secondary' className='text-xs'>
              {exp.type}
            </Badge>
          </div>

          <div
            className={cn(
              'flex items-center gap-2 text-sm text-muted-foreground mb-3',
              !isReversed && 'md:justify-end',
            )}
          >
            <Calendar className='h-4 w-4' />
            <span>{exp.period}</span>
          </div>

          <p className='text-sm font-medium text-foreground mb-2'>{exp.position}</p>
          <p className='text-sm text-muted-foreground mb-4'>{exp.description}</p>

          <div className={cn('flex flex-wrap gap-2', !isReversed && 'md:justify-end')}>
            {exp.projects.map((project) => (
              <Badge key={project} variant='outline' className='text-xs'>
                {project}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className='hidden md:block md:w-1/2' />
    </div>
  );
}
