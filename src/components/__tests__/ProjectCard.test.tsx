import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectCard } from '../sections/projects/ProjectCard';
import { type Project } from '@/data/resume';

const mockProject: Project = {
  id: 1,
  title: '테스트 프로젝트',
  period: '2024.01 ~ 2024.12',
  company: '테스트 회사',
  description: '테스트 설명',
  techStack: ['React', 'TypeScript'],
  role: '프론트엔드 1명',
  achievements: [],
  highlights: ['하이라이트'],
};

describe('ProjectCard', () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  // ========================================
  // 이미지 렌더링
  // ========================================
  describe('이미지 렌더링', () => {
    it('images가 없으면 썸네일 이미지 대신 플레이스홀더가 표시된다', () => {
      render(<ProjectCard project={mockProject} index={0} onClick={mockOnClick} />);
      // img 태그 없음 — Code2 SVG 플레이스홀더만 표시
      expect(screen.queryByAltText('테스트 프로젝트')).not.toBeInTheDocument();
    });

    it('images[0]이 있으면 썸네일 이미지를 렌더링한다', () => {
      const project = {
        ...mockProject,
        images: [{ src: '/test.png', isBlur: false }],
      };
      render(<ProjectCard project={project} index={0} onClick={mockOnClick} />);
      const img = screen.getByAltText('테스트 프로젝트');
      expect(img).toHaveAttribute('src', '/test.png');
    });

    it('isBlur가 true이면 blur-xs 클래스가 적용된다', () => {
      const project = {
        ...mockProject,
        images: [{ src: '/test.png', isBlur: true }],
      };
      render(<ProjectCard project={project} index={0} onClick={mockOnClick} />);
      expect(screen.getByAltText('테스트 프로젝트')).toHaveClass('blur-xs');
    });

    it('isBlur가 false이면 blur-xs 클래스가 없다', () => {
      const project = {
        ...mockProject,
        images: [{ src: '/test.png', isBlur: false }],
      };
      render(<ProjectCard project={project} index={0} onClick={mockOnClick} />);
      expect(screen.getByAltText('테스트 프로젝트')).not.toHaveClass('blur-xs');
    });
  });

  // ========================================
  // 인터랙션
  // ========================================
  describe('인터랙션', () => {
    it('카드 클릭 시 onClick 핸들러가 프로젝트 데이터와 함께 호출된다', async () => {
      render(<ProjectCard project={mockProject} index={0} onClick={mockOnClick} />);
      const user = userEvent.setup();
      await user.click(
        screen.getByRole('button', { name: '테스트 프로젝트 프로젝트 상세 보기' }),
      );
      expect(mockOnClick).toHaveBeenCalledWith(mockProject);
    });

    it('Enter 키 입력 시 onClick 핸들러가 호출된다', () => {
      render(<ProjectCard project={mockProject} index={0} onClick={mockOnClick} />);
      const card = screen.getByRole('button', { name: '테스트 프로젝트 프로젝트 상세 보기' });
      // fireEvent: userEvent와 달리 합성 클릭 이벤트 없이 keydown만 발생
      fireEvent.keyDown(card, { key: 'Enter' });
      expect(mockOnClick).toHaveBeenCalledWith(mockProject);
    });
  });
});
