import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from '../ThemeToggle';

// 2단계에서 사용한 것과 동일한 matchMedia mock
function mockMatchMedia(isDark: boolean) {
  const listeners: Array<(e: { matches: boolean }) => void> = [];

  const mediaQuery = {
    matches: isDark,
    media: '(prefers-color-scheme: dark)',
    addEventListener: vi.fn((_, handler) => listeners.push(handler)),
    removeEventListener: vi.fn((_, handler) => {
      const index = listeners.indexOf(handler);
      if (index > -1) listeners.splice(index, 1);
    }),
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };

  window.matchMedia = vi.fn().mockReturnValue(mediaQuery);
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  mockMatchMedia(false);
});

describe('ThemeToggle', () => {
  /**
   * screen.getByRole('button', { name: '...' })
   *
   * 이건 aria-label 값으로 버튼을 찾는 것입니다.
   * ThemeToggle의 각 버튼에 aria-label="라이트 테마" 등이 설정되어 있으므로
   * 접근성 속성을 그대로 활용해서 테스트할 수 있습니다.
   */
  it('3개의 테마 버튼이 렌더링된다', () => {
    render(<ThemeToggle />);

    expect(screen.getByRole('button', { name: '라이트 테마' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '다크 테마' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '시스템 테마' })).toBeInTheDocument();
  });

  it('초기 상태에서 시스템 버튼이 활성화되어 있다', () => {
    render(<ThemeToggle />);

    // aria-pressed: 접근성 속성으로 "이 버튼이 눌린 상태인지" 표현
    expect(screen.getByRole('button', { name: '시스템 테마' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: '라이트 테마' })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: '다크 테마' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('다크 버튼을 클릭하면 활성화 상태가 변경된다', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: '다크 테마' }));

    expect(screen.getByRole('button', { name: '다크 테마' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: '시스템 테마' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('다크 버튼 클릭 시 document에 dark 클래스가 추가된다', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: '다크 테마' }));

    // 컴포넌트 클릭 → useTheme 훅 → DOM 변경까지 전체 흐름 검증
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('라이트 버튼 클릭 시 dark 클래스가 제거된다', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    // 먼저 다크로 변경
    await user.click(screen.getByRole('button', { name: '다크 테마' }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // 다시 라이트로 변경
    await user.click(screen.getByRole('button', { name: '라이트 테마' }));
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('테마 변경이 localStorage에 저장된다', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: '다크 테마' }));

    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
