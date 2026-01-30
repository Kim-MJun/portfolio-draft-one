import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent',
      )}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16'>
          <a href='#' className='text-xl font-bold text-foreground'>
            MJ<span className='text-accent'>.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                {item.label}
              </a>
            ))}
            <Button variant='ghost' size='icon' onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center gap-2 md:hidden'>
            <Button variant='ghost' size='icon' onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className='md:hidden py-4 border-t border-border'>
            <div className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
