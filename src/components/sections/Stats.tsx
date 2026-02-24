import { useEffect, useRef, useState } from 'react';
import { totalProjects } from '@/data/resume';

const stats = [
  { value: 4, suffix: '년+', label: '개발 경력' },
  { value: totalProjects, suffix: '개', label: '프로젝트 완수' },
  { value: 90, suffix: '%', label: '검색속도 향상' },
  { value: 80, suffix: '%', label: '작업시간 단축' },
] as const;

function useCountUp(
  end: number,
  duration: number,
  isVisible: boolean,
  delay: number,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(end);
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, end, duration, delay]);

  return count;
}

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function StatItem({ value, suffix, label, isVisible, delay }: StatItemProps) {
  const count = useCountUp(value, 1500, isVisible, delay);

  return (
    <div className='flex flex-col items-center gap-1'>
      <p className='text-3xl md:text-4xl font-bold text-foreground leading-none'>
        <span className='tabular-nums'>{count}</span>
        <span className='text-accent'>{suffix}</span>
      </p>
      <p className='text-xs text-muted-foreground mt-1'>{label}</p>
    </div>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className='border-t border-border/60 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8'
    >
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          {...stat}
          isVisible={isVisible}
          delay={index * 150}
        />
      ))}
    </div>
  );
}
