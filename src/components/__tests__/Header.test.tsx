import { render, screen, waitFor } from '@testing-library/react';
import { Header } from '../layout/Header';

function mockMatchMedia(isDark: boolean) {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: isDark,
    media: '(prefers-color-scheme: dark)',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}

describe('Header', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    mockMatchMedia(false);

    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      writable: true,
      value: 1000,
    });

    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
      value: 500,
    });

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000,
    });
  });

  it('마운트 직후 현재 스크롤 위치를 기준으로 활성 섹션과 진행 바를 계산한다', async () => {
    const positions = {
      about: 700,
      experience: 420,
      projects: 200,
      education: 800,
      contact: 1200,
    };

    const getBoundingClientRectSpy = vi
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockImplementation(function (this: HTMLElement) {
        const top = positions[this.id as keyof typeof positions] ?? 1600;

        return {
          top,
          bottom: top + 100,
          left: 0,
          right: 0,
          width: 0,
          height: 100,
          x: 0,
          y: top,
          toJSON: () => ({}),
        };
      });

    render(
      <>
        <Header />
        <section id='about'>About</section>
        <section id='experience'>Experience</section>
        <section id='projects'>Projects</section>
        <section id='education'>Education</section>
        <section id='contact'>Contact</section>
      </>,
    );

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Projects' })).toHaveClass(
        'text-foreground',
      );
    });

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveClass(
      'text-muted-foreground',
    );
    expect(document.querySelector('[aria-hidden="true"][style]')).toHaveStyle({
      width: '50%',
    });

    getBoundingClientRectSpy.mockRestore();
  });
});
