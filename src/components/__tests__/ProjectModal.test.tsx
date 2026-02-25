import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectModal } from '../sections/projects/ProjectModal';
import { type Project } from '@/data/resume';

// ========================================
// 테스트용 픽스처
// ========================================
const baseProject: Project = {
  id: 1,
  title: '테스트 프로젝트',
  period: '2024.01 ~ 2024.12',
  company: '테스트 회사',
  description: '테스트 프로젝트 설명입니다.',
  techStack: ['React', 'TypeScript'],
  role: '프론트엔드 1명 / 기여도 100%',
  achievements: [{ category: '성과', items: ['성과 항목'] }],
  highlights: ['하이라이트'],
};

const projectWithNoImages: Project = { ...baseProject };

const projectWithOneImage: Project = {
  ...baseProject,
  images: [{ src: '/img1.png', isBlur: false }],
};

const projectWithMultipleImages: Project = {
  ...baseProject,
  images: [
    { src: '/img1.png', isBlur: false },
    { src: '/img2.png', isBlur: false },
    { src: '/img3.png', isBlur: true },
  ],
};

describe('ProjectModal', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  const renderModal = (project: Project) =>
    render(<ProjectModal project={project} onClose={mockOnClose} />);

  // ========================================
  // 이미지 렌더링
  // ========================================
  describe('이미지 렌더링', () => {
    it('이미지가 없으면 슬라이드 img 태그가 없다', () => {
      renderModal(projectWithNoImages);
      expect(screen.queryByAltText('테스트 프로젝트 이미지 1')).not.toBeInTheDocument();
    });

    it('이미지가 있으면 img 태그가 렌더링된다', () => {
      renderModal(projectWithOneImage);
      expect(screen.getByAltText('테스트 프로젝트 이미지 1')).toBeInTheDocument();
    });

    it('isBlur가 true인 이미지에 blur-xs 클래스가 적용된다', () => {
      const project = { ...baseProject, images: [{ src: '/img.png', isBlur: true }] };
      renderModal(project);
      expect(screen.getByAltText('테스트 프로젝트 이미지 1')).toHaveClass('blur-xs');
    });

    it('isBlur가 false인 이미지에는 blur-xs 클래스가 없다', () => {
      renderModal(projectWithOneImage);
      expect(screen.getByAltText('테스트 프로젝트 이미지 1')).not.toHaveClass('blur-xs');
    });

    it('여러 이미지가 있으면 각 슬라이드 img가 모두 렌더링된다', () => {
      renderModal(projectWithMultipleImages);
      expect(screen.getByAltText('테스트 프로젝트 이미지 1')).toBeInTheDocument();
      expect(screen.getByAltText('테스트 프로젝트 이미지 2')).toBeInTheDocument();
      expect(screen.getByAltText('테스트 프로젝트 이미지 3')).toBeInTheDocument();
    });
  });

  // ========================================
  // 슬라이드 컨트롤 표시
  // ========================================
  describe('슬라이드 컨트롤 표시', () => {
    it('이미지가 1장이면 이전/다음 버튼이 표시되지 않는다', () => {
      renderModal(projectWithOneImage);
      expect(screen.queryByRole('button', { name: '이전 이미지' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: '다음 이미지' })).not.toBeInTheDocument();
    });

    it('이미지가 1장이면 인디케이터 점이 표시되지 않는다', () => {
      renderModal(projectWithOneImage);
      expect(screen.queryByRole('button', { name: '이미지 1로 이동' })).not.toBeInTheDocument();
    });

    it('이미지가 여러 장이면 이전/다음 버튼이 표시된다', () => {
      renderModal(projectWithMultipleImages);
      expect(screen.getByRole('button', { name: '이전 이미지' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '다음 이미지' })).toBeInTheDocument();
    });

    it('이미지가 여러 장이면 이미지 수만큼 인디케이터 점이 표시된다', () => {
      renderModal(projectWithMultipleImages);
      const count = projectWithMultipleImages.images!.length;
      const dots = Array.from({ length: count }, (_, i) =>
        screen.getByRole('button', { name: `이미지 ${i + 1}로 이동` }),
      );
      expect(dots).toHaveLength(count);
    });
  });

  // ========================================
  // 슬라이드 내비게이션
  // ========================================
  describe('슬라이드 내비게이션', () => {
    it('초기 상태에서 첫 번째 슬라이드가 translateX(0%)로 표시된다', () => {
      renderModal(projectWithMultipleImages);
      // 각 슬라이드 div는 img의 parentElement
      const slide1 = screen.getByAltText('테스트 프로젝트 이미지 1').parentElement!;
      expect(slide1).toHaveStyle({ transform: 'translateX(0%)' });
    });

    it('초기 상태에서 이전 버튼이 비활성화된다', () => {
      renderModal(projectWithMultipleImages);
      expect(screen.getByRole('button', { name: '이전 이미지' })).toBeDisabled();
    });

    it('마지막 슬라이드에서 다음 버튼이 비활성화된다', async () => {
      renderModal(projectWithMultipleImages);
      const user = userEvent.setup();
      const nextBtn = screen.getByRole('button', { name: '다음 이미지' });
      await user.click(nextBtn); // index 0 → 1
      await user.click(nextBtn); // index 1 → 2
      expect(nextBtn).toBeDisabled();
    });

    it('다음 버튼 클릭 시 두 번째 슬라이드가 translateX(0%)로 이동한다', async () => {
      renderModal(projectWithMultipleImages);
      const user = userEvent.setup();
      const slide1 = screen.getByAltText('테스트 프로젝트 이미지 1').parentElement!;
      const slide2 = screen.getByAltText('테스트 프로젝트 이미지 2').parentElement!;

      // 초기 상태
      expect(slide2).toHaveStyle({ transform: 'translateX(100%)' });

      await user.click(screen.getByRole('button', { name: '다음 이미지' }));

      expect(slide1).toHaveStyle({ transform: 'translateX(-100%)' });
      expect(slide2).toHaveStyle({ transform: 'translateX(0%)' });
    });

    it('이전 버튼 클릭 시 첫 번째 슬라이드로 돌아간다', async () => {
      renderModal(projectWithMultipleImages);
      const user = userEvent.setup();
      const slide1 = screen.getByAltText('테스트 프로젝트 이미지 1').parentElement!;

      await user.click(screen.getByRole('button', { name: '다음 이미지' }));
      await user.click(screen.getByRole('button', { name: '이전 이미지' }));

      expect(slide1).toHaveStyle({ transform: 'translateX(0%)' });
      expect(screen.getByRole('button', { name: '이전 이미지' })).toBeDisabled();
    });

    it('인디케이터 점 클릭 시 해당 슬라이드로 이동한다', async () => {
      renderModal(projectWithMultipleImages);
      const user = userEvent.setup();
      const slide3 = screen.getByAltText('테스트 프로젝트 이미지 3').parentElement!;

      await user.click(screen.getByRole('button', { name: '이미지 3로 이동' }));

      expect(slide3).toHaveStyle({ transform: 'translateX(0%)' });
    });
  });

  // ========================================
  // 모달 닫기
  // ========================================
  describe('모달 닫기', () => {
    it('X 버튼 클릭 시 onClose가 호출된다', async () => {
      renderModal(projectWithOneImage);
      const user = userEvent.setup();
      await user.click(screen.getByRole('button', { name: '모달 닫기' }));
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('ESC 키 입력 시 onClose가 호출된다', () => {
      renderModal(projectWithOneImage);
      // window.addEventListener('keydown', ...) 리스너에 직접 이벤트 발송
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  // ========================================
  // 전체화면
  // ========================================
  describe('전체화면', () => {
    it('전체화면 버튼 클릭 시 전체화면 닫기 버튼이 나타난다', () => {
      renderModal(projectWithOneImage);
      // opacity-0 요소도 DOM 상에는 존재하므로 fireEvent로 클릭
      fireEvent.click(screen.getByRole('button', { name: '이미지 전체화면 보기' }));
      expect(screen.getByRole('button', { name: '전체화면 닫기' })).toBeInTheDocument();
    });

    it('전체화면에서 ESC 키 입력 시 전체화면만 닫히고 onClose는 호출되지 않는다', () => {
      renderModal(projectWithOneImage);
      fireEvent.click(screen.getByRole('button', { name: '이미지 전체화면 보기' }));
      expect(screen.getByRole('button', { name: '전체화면 닫기' })).toBeInTheDocument();

      // 상태 업데이트를 act()로 감싸 React 재렌더링 보장
      act(() => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      });

      // 전체화면 닫힘
      expect(screen.queryByRole('button', { name: '전체화면 닫기' })).not.toBeInTheDocument();
      // 모달 onClose는 미호출
      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('전체화면 닫기 버튼 클릭 시 전체화면이 닫힌다', async () => {
      renderModal(projectWithOneImage);
      const user = userEvent.setup();
      fireEvent.click(screen.getByRole('button', { name: '이미지 전체화면 보기' }));
      await user.click(screen.getByRole('button', { name: '전체화면 닫기' }));
      expect(screen.queryByRole('button', { name: '전체화면 닫기' })).not.toBeInTheDocument();
    });

    it('다중 이미지 전체화면에서 이전/다음 버튼이 표시된다', () => {
      renderModal(projectWithMultipleImages);
      fireEvent.click(screen.getByRole('button', { name: '이미지 전체화면 보기' }));
      // 전체화면 내 이전/다음 버튼 (모달 내 버튼과 동일한 aria-label)
      const prevBtns = screen.getAllByRole('button', { name: '이전 이미지' });
      const nextBtns = screen.getAllByRole('button', { name: '다음 이미지' });
      // 모달 + 전체화면 = 각 2개
      expect(prevBtns).toHaveLength(2);
      expect(nextBtns).toHaveLength(2);
    });
  });

  // ========================================
  // 프로젝트 변경 시 인덱스 초기화
  // ========================================
  describe('프로젝트 변경 시 인덱스 초기화', () => {
    it('다른 프로젝트로 변경되면 슬라이드 인덱스가 0으로 초기화된다', async () => {
      // key 방식: 부모가 key를 바꾸면 unmount → remount되어 state 초기화
      const { unmount } = renderModal(projectWithMultipleImages);
      const user = userEvent.setup();

      // 인덱스를 1로 변경
      await user.click(screen.getByRole('button', { name: '다음 이미지' }));
      expect(
        screen.getByAltText('테스트 프로젝트 이미지 1').parentElement,
      ).toHaveStyle({ transform: 'translateX(-100%)' });

      // key 변경으로 인한 unmount → 새 프로젝트로 remount (실제 동작과 동일)
      unmount();
      render(<ProjectModal project={projectWithOneImage} onClose={mockOnClose} />);

      // 인덱스 0으로 초기화 — 첫 번째 슬라이드가 translateX(0%)
      expect(
        screen.getByAltText('테스트 프로젝트 이미지 1').parentElement,
      ).toHaveStyle({ transform: 'translateX(0%)' });
    });
  });
});
