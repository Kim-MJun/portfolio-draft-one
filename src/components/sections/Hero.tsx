import { ArrowDown, FileDown, Github, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/resume';

export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center pt-16 relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-20'>
        <div className='text-center'>
          {/* Keywords */}
          <div className='flex items-center justify-center gap-2 mb-6'>
            {personalInfo.keywords.map((keyword) => (
              <Badge key={keyword} variant='secondary'>
                {keyword}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4'>
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
            <span className='text-foreground'>{personalInfo.name}</span>입니다.
          </h1>

          {/* Description */}
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed'>
            {personalInfo.introduction}
          </p>

          {/* Tech Stack Tags */}
          <div className='flex items-center justify-center flex-wrap gap-2 mb-8'>
            {personalInfo.heroSkills.map((skill, index) => (
              <Badge
                key={skill}
                className='animate-fade-in-up px-4 py-1.5 text-sm bg-accent/15 text-accent-text border border-accent/30 hover:-translate-y-1 hover:bg-accent/25 hover:border-accent/50 transition-all duration-200 cursor-default'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex items-center justify-center flex-wrap gap-4 mb-12'>
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

          {/* Social Links */}
          <div className='flex items-center justify-center gap-4'>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground transition-colors'
              aria-label='GitHub 프로필 (새 탭에서 열림)'
            >
              <Github className='h-6 w-6' />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className='text-muted-foreground hover:text-foreground transition-colors'
              aria-label='이메일로 연락하기'
            >
              <Mail className='h-6 w-6' />
            </a>
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
        </div>
      </div>
    </section>
  );
}
