import { useState } from 'react';
import { Calendar, ExternalLink, X, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/resume';

interface Project {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
  techStack: string[];
  role: string;
  achievements: string[];
  highlights: string[];
  liveUrl?: string;
  thumbnail?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between z-10'>
          <h2 className='text-xl font-bold text-foreground'>{project.title}</h2>
          <Button variant='ghost' size='icon' onClick={onClose}>
            <X className='h-5 w-5' />
          </Button>
        </div>

        {/* Thumbnail Image in Modal */}
        {project.thumbnail && (
          <div className='relative w-full h-80 overflow-hidden bg-muted'>
            <img
              src={project.thumbnail}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}

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
            <h3 className='font-semibold text-foreground mb-2'>
              프로젝트 설명
            </h3>
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
            <h3 className='font-semibold text-foreground mb-2'>주요 성과</h3>
            <ul className='space-y-2'>
              {project.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className='flex items-start gap-2 text-sm text-muted-foreground'
                >
                  <CheckCircle2 className='h-4 w-4 text-primary mt-0.5 shrink-0' />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
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
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>Projects</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            다양한 도메인에서 진행한 주요 프로젝트들입니다.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className='group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden'
              onClick={() => setSelectedProject(project)}
              data-aos='zoom-in'
              data-aos-delay={index * 100}
            >
              {/* Thumbnail Image */}
              {project.thumbnail && (
                <div className='relative w-full h-52 overflow-hidden bg-muted'>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
                </div>
              )}

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
                    <Badge
                      key={highlight}
                      variant='secondary'
                      className='text-xs'
                    >
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
                  <span className='text-xs text-muted-foreground'>
                    {project.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
