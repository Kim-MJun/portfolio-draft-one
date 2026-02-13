import { experiences } from '@/data/resume';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  return (
    <section id='experience' className='py-20 bg-muted/30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>Experience</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            다양한 도메인에서 프론트엔드 개발 경험을 쌓아왔습니다.
          </p>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div
            className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2'
            aria-hidden='true'
          />

          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={index}
                isReversed={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
