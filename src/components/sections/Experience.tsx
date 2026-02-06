import { Building2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/resume';

export function Experience() {
  return (
    <section id='experience' className='py-20 bg-muted/30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>
            Experience
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            다양한 도메인에서 프론트엔드 개발 경험을 쌓아왔습니다.
          </p>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2' aria-hidden='true' />

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={index * 100}
              >
                {/* Timeline dot */}
                <div className='absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 -translate-x-1/2' aria-hidden='true' />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}
                >
                  <div
                    className={`bg-background border border-border rounded-xl p-6 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}
                    >
                      <Building2 className='h-4 w-4 text-accent' />
                      <span className='font-semibold text-foreground'>
                        {exp.company}
                      </span>
                      <Badge variant='secondary' className='text-xs'>
                        {exp.type}
                      </Badge>
                    </div>

                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}
                    >
                      <Calendar className='h-4 w-4' />
                      <span>{exp.period}</span>
                    </div>

                    <p className='text-sm font-medium text-foreground mb-2'>
                      {exp.position}
                    </p>
                    <p className='text-sm text-muted-foreground mb-4'>
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}
                    >
                      {exp.projects.map((project) => (
                        <Badge
                          key={project}
                          variant='outline'
                          className='text-xs'
                        >
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className='hidden md:block md:w-1/2' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
