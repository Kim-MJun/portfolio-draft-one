import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

const getSystemTheme = (): 'light' | 'dark' =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getAppliedTheme = (theme: Theme): 'light' | 'dark' =>
  theme === 'system' ? getSystemTheme() : theme;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      return saved;
    }
    return 'system';
  });

  // 테마 적용
  useEffect(() => {
    const root = document.documentElement;
    const appliedTheme = getAppliedTheme(theme);

    if (appliedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // 시스템 설정 변경 감지
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const root = document.documentElement;
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';

      if (systemTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  return { theme, setTheme, toggleTheme, appliedTheme: getAppliedTheme(theme) };
}
