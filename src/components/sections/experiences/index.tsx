import { experiences } from '@/data/resume';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  return (
    <section id='experience' className='py-20 relative'>
      <div
        className='pointer-events-none absolute left-4 top-12 h-28 w-28 rounded-[30%_70%_70%_30%/40%_40%_60%_60%] bg-tertiary/20'
        aria-hidden='true'
      />
      <div
        className='pointer-events-none absolute right-10 bottom-8 h-24 w-24 rounded-full bg-secondary/25 shadow-[6px_6px_0px_hsl(var(--shadow-soft))]'
        aria-hidden='true'
      />
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
          <div
            className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/30 md:-translate-x-1/2'
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
