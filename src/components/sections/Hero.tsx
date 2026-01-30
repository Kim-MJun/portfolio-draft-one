import { ArrowDown, Github, Mail } from 'lucide-react';
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
            <span className='text-accent'>{personalInfo.experience}</span>{' '}
            {personalInfo.title}
            <br />
            <span className='text-foreground'>{personalInfo.name}</span>입니다.
          </h1>

          {/* Description */}
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed'>
            {personalInfo.introduction}
          </p>

          {/* CTA Buttons */}
          <div className='flex items-center justify-center gap-4 mb-12'>
            <Button size='lg' asChild>
              <a href='#projects'>프로젝트 보기</a>
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
            >
              <Github className='h-6 w-6' />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              <Mail className='h-6 w-6' />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
            <a
              href='#about'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              <ArrowDown className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
