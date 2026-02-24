import { Github, Mail } from 'lucide-react';
import { personalInfo } from '@/data/resume';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-border bg-muted/30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='text-sm text-muted-foreground'>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className='flex items-center gap-4'>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground transition-colors'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5' />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className='text-muted-foreground hover:text-foreground transition-colors'
              aria-label='Email'
            >
              <Mail className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
