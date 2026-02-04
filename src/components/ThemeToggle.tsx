import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface ThemeButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ThemeButton({ icon, label, isActive, onClick }: ThemeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center p-1.5 rounded-md transition-all cursor-pointer',
        'hover:bg-muted',
        isActive
          ? 'bg-muted-foreground/50 text-foreground'
          : 'text-muted-foreground',
      )}
      aria-label={label}
    >
      {icon}
    </button>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex items-center gap-0.5 p-0.5 bg-muted rounded-md'>
      <ThemeButton
        icon={<Sun className='h-3.5 w-3.5' />}
        label='라이트'
        isActive={theme === 'light'}
        onClick={() => setTheme('light')}
      />
      <ThemeButton
        icon={<Moon className='h-3.5 w-3.5' />}
        label='다크'
        isActive={theme === 'dark'}
        onClick={() => setTheme('dark')}
      />
      <ThemeButton
        icon={<Monitor className='h-3.5 w-3.5' />}
        label='시스템'
        isActive={theme === 'system'}
        onClick={() => setTheme('system')}
      />
    </div>
  );
}
