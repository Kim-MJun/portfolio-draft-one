import { render, screen } from '@testing-library/react';
import { Hero } from '../sections/Hero';

// TypeAnimation은 jsdom에서 동작하지 않으므로 단순 텍스트로 대체
vi.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence }: { sequence: (string | number)[] }) => (
    <span>{sequence[0]}</span>
  ),
}));

describe('Hero - 이력서 다운로드', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('이력서 다운로드 링크가 렌더링된다', () => {
    const link = screen.getByRole('link', { name: '이력서 PDF 다운로드' });
    expect(link).toBeInTheDocument();
  });

  it('올바른 PDF 경로를 가리킨다', () => {
    const link = screen.getByRole('link', { name: '이력서 PDF 다운로드' });
    expect(link).toHaveAttribute('href', '/resume_latest.pdf');
  });

  it('download 속성이 설정되어 있다', () => {
    const link = screen.getByRole('link', { name: '이력서 PDF 다운로드' });
    expect(link).toHaveAttribute('download');
  });

  it('버튼 텍스트에 "이력서 다운로드"가 표시된다', () => {
    expect(screen.getByText('이력서 다운로드')).toBeInTheDocument();
  });
});
