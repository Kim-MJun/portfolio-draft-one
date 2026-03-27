import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-4'>
      <div className='text-center'>
        <div className='inline-block border-2 border-foreground bg-card shadow-[8px_8px_0px_hsl(var(--shadow-soft))] rounded-xl px-10 py-12 mb-8'>
          <p className='text-8xl font-black text-foreground leading-none'>404</p>
        </div>
        <h1 className='text-2xl font-bold text-foreground mb-3'>
          페이지를 찾을 수 없습니다
        </h1>
        <p className='text-muted-foreground mb-8'>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Button asChild className='border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--shadow-soft))]'>
          <Link to='/'>
            <House className='h-4 w-4 mr-2' />
            홈으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  );
}
