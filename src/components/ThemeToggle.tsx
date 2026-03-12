import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface ThemeButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  activeClassName: string;
}

function ThemeButton({
  icon,
  label,
  isActive,
  onClick,
  activeClassName,
}: ThemeButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex items-center justify-center h-[30px] w-[30px] rounded-full border-2 border-transparent transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer',
        'hover:border-foreground/60 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--shadow-soft))]',
        isActive
          ? cn(
              'text-foreground border-foreground shadow-[2px_2px_0px_hsl(var(--shadow-hard))]',
              activeClassName,
            )
          : 'text-muted-foreground',
      )}
      aria-label={`${label} 테마`}
      aria-pressed={isActive}
    >
      {icon}
    </button>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex items-center gap-1 p-[3px] bg-card border-2 border-foreground rounded-full shadow-[3.5px_3.5px_0px_hsl(var(--shadow-soft))]'>
      <ThemeButton
        icon={<Sun className='h-[13px] w-[13px]' />}
        label='라이트'
        isActive={theme === 'light'}
        onClick={() => setTheme('light')}
        activeClassName='bg-tertiary'
      />
      <ThemeButton
        icon={<Moon className='h-[13px] w-[13px]' />}
        label='다크'
        isActive={theme === 'dark'}
        onClick={() => setTheme('dark')}
        activeClassName='bg-secondary'
      />
      <ThemeButton
        icon={<Monitor className='h-[13px] w-[13px]' />}
        label='시스템'
        isActive={theme === 'system'}
        onClick={() => setTheme('system')}
        activeClassName='bg-quaternary'
      />
    </div>
  );
}
