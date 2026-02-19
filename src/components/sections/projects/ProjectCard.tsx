import { ExternalLink, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type Project } from '@/data/resume';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <Card
      className='group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden'
      onClick={() => onClick(project)}
      data-aos='zoom-in'
      data-aos-delay={index * 100}
      tabIndex={0}
      role='button'
      aria-label={`${project.title} 프로젝트 상세 보기`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    >
      {/* Thumbnail Image */}
      <div className='relative w-full h-52 overflow-hidden bg-muted'>
        {project.images?.[0] ? (
          <img
            src={project.images[0].src}
            alt={project.title}
            className={cn(
              'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
              project.images[0].isBlur && 'blur-xs',
            )}
          />
        ) : (
          <div className='w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center'>
            <Code2 className='h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300' />
          </div>
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
      </div>

      <CardHeader>
        <div className='flex items-center justify-between mb-2'>
          <Badge variant='outline' className='text-xs'>
            {project.company}
          </Badge>
          {project.liveUrl && (
            <ExternalLink className='h-4 w-4 text-muted-foreground' />
          )}
        </div>
        <CardTitle className='text-lg group-hover:text-primary transition-colors'>
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-1 mb-4'>
          {project.highlights.map((highlight) => (
            <Badge key={highlight} variant='secondary' className='text-xs'>
              {highlight}
            </Badge>
          ))}
        </div>

        <div className='flex flex-wrap gap-1'>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className='text-xs text-muted-foreground'>
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className='text-xs text-muted-foreground'>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className='mt-4 pt-4 border-t border-border'>
          <span className='text-xs text-muted-foreground'>{project.period}</span>
        </div>
      </CardContent>
    </Card>
  );
}
