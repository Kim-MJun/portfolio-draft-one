import { ArrowDown, FileDown, Github, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/resume';
import profileImage from '@/assets/profile.jpeg';
import { Stats } from '@/components/sections/Stats';
import { cn } from '@/lib/utils';

export function Hero() {
  const badgeStyles = [
    'bg-accent/15 text-accent-text border-foreground/50',
    'bg-secondary/20 text-foreground border-foreground/50',
    'bg-tertiary/20 text-foreground border-foreground/50',
    'bg-quaternary/20 text-foreground border-foreground/50',
  ];

  return (
    <section
      id='top'
      className='min-h-screen flex items-center justify-center pt-16 relative overflow-hidden'
    >
      <div
        className='pointer-events-none absolute -left-28 -top-24 h-64 w-64 rounded-full bg-tertiary/70 shadow-[10px_10px_0px_hsl(var(--shadow-hard))]'
        aria-hidden='true'
      />
      <div
        className='pointer-events-none absolute right-10 top-20 h-32 w-32 rounded-[38%_62%_48%_52%/42%_52%_48%_58%] bg-quaternary/60'
        aria-hidden='true'
      />
      <div
        className='pointer-events-none absolute right-0 bottom-0 h-80 w-80 opacity-20 bg-[radial-gradient(circle,_hsl(var(--foreground))_1px,_transparent_1px)] [background-size:18px_18px]'
        aria-hidden='true'
      />
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full'>
        {/* Main: Left text + Right card */}
        <div className='flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 mb-12'>
          {/* Left: Text Content */}
          <div className='flex-1 text-center md:text-left'>
            {/* Title */}
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight'>
              안녕하세요,
              <br />
              <TypeAnimation
                sequence={[
                  `${personalInfo.title}`,
                  2000,
                  `React 개발자`,
                  2000,
                  `Next.js 개발자`,
                  2000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='text-accent'
              />
              <br />
              <span className='text-foreground'>{personalInfo.name}</span>
              입니다.
            </h1>

            {/* Description */}
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed'>
              {personalInfo.introduction}
            </p>

            {/* Tech Stack Tags */}
            <div className='flex items-center justify-center md:justify-start flex-wrap gap-2 mb-8'>
              {personalInfo.heroSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  className={cn(
                    'animate-fade-in-up px-4 py-1.5 text-sm border-2 rounded-full shadow-[2px_2px_0px_hsl(var(--shadow-soft))] hover:-translate-y-1 transition-all duration-200 cursor-default',
                    badgeStyles[index % badgeStyles.length],
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='flex items-center justify-center md:justify-start flex-wrap gap-4'>
              <Button size='lg' asChild>
                <a href='#projects'>프로젝트 보기</a>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a
                  href='/resume_latest.pdf'
                  download='이력서_김민준.pdf'
                  aria-label='이력서 PDF 다운로드'
                >
                  <FileDown className='h-4 w-4' />
                  이력서 다운로드
                </a>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a href='#contact'>연락하기</a>
              </Button>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className='shrink-0'>
            <div className='bg-card border-2 border-foreground rounded-3xl shadow-[8px_8px_0px_hsl(var(--shadow-hard))] p-6 flex flex-col items-center gap-4 w-56 md:w-64'>
              <img
                src={profileImage}
                alt='김민준 프로필'
                className='w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-accent/40'
              />

              <div className='text-center'>
                <p className='font-bold text-lg text-foreground'>
                  {personalInfo.name}
                </p>
                <p className='text-sm text-muted-foreground mt-0.5'>
                  {personalInfo.title}
                </p>
              </div>

              <div className='flex flex-wrap justify-center gap-1.5'>
                {personalInfo.keywords.map((keyword) => (
                  <Badge key={keyword} variant='secondary' className='text-xs'>
                    {keyword}
                  </Badge>
                ))}
              </div>

              <div className='w-full h-px bg-border' aria-hidden='true' />

              <div className='flex items-center gap-4'>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  aria-label='GitHub 프로필 (새 탭에서 열림)'
                >
                  <Github className='h-5 w-5' />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  aria-label='이메일로 연락하기'
                >
                  <Mail className='h-5 w-5' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Stats />
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <a
          href='#about'
          className='text-muted-foreground hover:text-foreground transition-colors'
          aria-label='아래로 스크롤하기'
        >
          <ArrowDown className='h-6 w-6' />
        </a>
      </div>
    </section>
  );
}
