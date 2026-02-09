import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../use-theme';

/**
 * matchMedia mock 헬퍼
 *
 * jsdom에는 window.matchMedia가 없어서 직접 만들어야 합니다.
 * isDark 파라미터로 "OS가 다크모드인 상황"을 시뮬레이션합니다.
 *
 * listeners 배열로 addEventListener/removeEventListener를 추적해서
 * "시스템 설정이 바뀌는 이벤트"도 테스트할 수 있습니다.
 */
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
    // MediaQueryList 인터페이스의 나머지 필수 속성들
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };

  window.matchMedia = vi.fn().mockReturnValue(mediaQuery);

  return {
    mediaQuery,
    // 시스템 설정 변경을 시뮬레이션하는 함수
    triggerChange: (newIsDark: boolean) => {
      mediaQuery.matches = newIsDark;
      listeners.forEach((listener) => listener({ matches: newIsDark }));
    },
  };
}

/**
 * 각 테스트 전에 환경을 깨끗하게 초기화합니다.
 *
 * 왜 필요한가?
 * - 테스트 A에서 localStorage에 'dark'를 저장하면
 * - 테스트 B에서도 그 값이 남아 있어서 테스트가 오염됩니다
 * - 각 테스트는 독립적이어야 합니다
 */
beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  mockMatchMedia(false); // 기본: OS는 라이트 모드
});

describe('useTheme', () => {
  // ========================================
  // 초기값 테스트
  // ========================================
  describe('초기값', () => {
    it('localStorage에 저장된 값이 없으면 "system"이 기본값이다', () => {
      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('system');
    });

    it('localStorage에 저장된 테마가 있으면 그 값을 사용한다', () => {
      localStorage.setItem('theme', 'dark');

      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('dark');
    });

    it('localStorage에 잘못된 값이 있으면 "system"으로 폴백한다', () => {
      localStorage.setItem('theme', 'invalid-value');

      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('system');
    });
  });

  // ========================================
  // setTheme 테스트
  // ========================================
  describe('setTheme', () => {
    it('테마를 변경하면 localStorage에 저장된다', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.setTheme('dark');
      });

      expect(result.current.theme).toBe('dark');
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('dark 테마로 변경하면 document에 "dark" 클래스가 추가된다', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.setTheme('dark');
      });

      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('light 테마로 변경하면 "dark" 클래스가 제거된다', () => {
      // dark로 설정 후 light로 변경
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.setTheme('dark');
      });
      act(() => {
        result.current.setTheme('light');
      });

      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });

  // ========================================
  // toggleTheme 테스트
  // ========================================
  describe('toggleTheme', () => {
    it('light → dark → system → light 순서로 순환한다', () => {
      localStorage.setItem('theme', 'light');
      const { result } = renderHook(() => useTheme());

      // light → dark
      act(() => result.current.toggleTheme());
      expect(result.current.theme).toBe('dark');

      // dark → system
      act(() => result.current.toggleTheme());
      expect(result.current.theme).toBe('system');

      // system → light
      act(() => result.current.toggleTheme());
      expect(result.current.theme).toBe('light');
    });
  });

  // ========================================
  // appliedTheme 테스트 (system 모드에서 실제 적용되는 테마)
  // ========================================
  describe('appliedTheme', () => {
    it('system 모드에서 OS가 다크모드이면 appliedTheme은 "dark"이다', () => {
      mockMatchMedia(true); // OS: 다크모드

      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('system');
      expect(result.current.appliedTheme).toBe('dark');
    });

    it('system 모드에서 OS가 라이트모드이면 appliedTheme은 "light"이다', () => {
      mockMatchMedia(false); // OS: 라이트모드

      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('system');
      expect(result.current.appliedTheme).toBe('light');
    });

    it('dark로 직접 설정하면 appliedTheme도 "dark"이다', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.setTheme('dark');
      });

      expect(result.current.appliedTheme).toBe('dark');
    });
  });

  // ========================================
  // 시스템 설정 변경 감지 테스트
  // ========================================
  describe('시스템 설정 변경 감지', () => {
    it('system 모드에서 OS 테마가 바뀌면 DOM에 반영된다', () => {
      const { triggerChange } = mockMatchMedia(false);

      renderHook(() => useTheme()); // system 모드 (기본값)

      // OS가 다크모드로 변경
      act(() => {
        triggerChange(true);
      });

      expect(document.documentElement.classList.contains('dark')).toBe(true);

      // 다시 라이트모드로 변경
      act(() => {
        triggerChange(false);
      });

      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('system 모드가 아니면 OS 변경을 감지하지 않는다', () => {
      const { triggerChange } = mockMatchMedia(false);
      const { result } = renderHook(() => useTheme());

      // light로 고정
      act(() => {
        result.current.setTheme('light');
      });

      // OS가 다크모드로 변경 → 무시되어야 함
      act(() => {
        triggerChange(true);
      });

      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });
});
