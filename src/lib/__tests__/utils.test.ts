import { cn } from '../utils';

describe('cn() 유틸리티', () => {
  // 기본 동작: 여러 클래스를 하나로 합침
  it('여러 클래스명을 하나로 합친다', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
  });

  // 조건부 클래스: falsy 값은 무시됨
  it('falsy 값(undefined, null, false)은 무시한다', () => {
    expect(cn('px-4', undefined, null, false, 'py-2')).toBe('px-4 py-2');
  });

  // Tailwind 충돌 해결: 같은 속성이면 뒤의 것이 우선
  it('충돌하는 Tailwind 클래스는 뒤의 것이 우선한다', () => {
    // px-4와 px-6은 같은 padding-x 속성 → px-6이 우선
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });

  // 조건부 객체 문법 (clsx 기능)
  it('객체 문법으로 조건부 클래스를 적용한다', () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn('base', { 'bg-blue-500': isActive, 'opacity-50': isDisabled }))
      .toBe('base bg-blue-500');
  });

  // 인자 없이 호출하면 빈 문자열
  it('인자가 없으면 빈 문자열을 반환한다', () => {
    expect(cn()).toBe('');
  });
});
