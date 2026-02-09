import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactFormModal } from '../ContactFormModal';

/**
 * emailjs 모듈 전체를 mock으로 교체합니다.
 *
 * ContactFormModal은 emailjs.send()를 호출하는데,
 * 테스트에서 실제 이메일을 보내면 안 되니까
 * "호출은 되지만 실제로는 아무것도 안 하는" 가짜로 바꿉니다.
 *
 * vi.mock()은 파일 최상단에 위치해야 합니다 (호이스팅됨).
 */
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
  },
}));

// sonner의 toast도 mock — 실제 토스트 UI를 렌더링하지 않기 위해
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe('ContactFormModal', () => {
  // 테스트용 헬퍼: 모달을 열린 상태로 렌더링
  const renderModal = () => {
    const onOpenChange = vi.fn();
    render(<ContactFormModal open={true} onOpenChange={onOpenChange} />);
    return { onOpenChange };
  };

  // ========================================
  // 렌더링 테스트
  // ========================================
  it('모달이 열리면 폼 필드 4개와 전송 버튼이 보인다', () => {
    renderModal();

    // screen.getByLabelText → <label>과 연결된 input을 찾음
    expect(screen.getByLabelText(/이름/)).toBeInTheDocument();
    expect(screen.getByLabelText(/이메일/)).toBeInTheDocument();
    expect(screen.getByLabelText(/제목/)).toBeInTheDocument();
    expect(screen.getByLabelText(/메시지/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '전송하기' })).toBeInTheDocument();
  });

  // ========================================
  // 유효성 검증 테스트 — 빈 폼 제출
  // ========================================
  it('빈 폼을 제출하면 모든 필수 필드에 에러 메시지가 표시된다', async () => {
    renderModal();

    // userEvent: 실제 사용자처럼 클릭 이벤트를 발생시킴
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: '전송하기' }));

    // waitFor: react-hook-form의 비동기 유효성 검증이 끝날 때까지 대기
    // role="alert"로 에러 메시지를 찾음 (접근성 속성을 활용한 검색)
    await waitFor(() => {
      const alerts = screen.getAllByRole('alert');
      expect(alerts.length).toBeGreaterThanOrEqual(4);
    });

    expect(screen.getByText('이름을 입력해주세요')).toBeInTheDocument();
    expect(screen.getByText('이메일을 입력해주세요')).toBeInTheDocument();
    expect(screen.getByText('제목을 입력해주세요')).toBeInTheDocument();
    expect(screen.getByText('메시지를 입력해주세요')).toBeInTheDocument();
  });

  // ========================================
  // 유효성 검증 테스트 — 잘못된 이메일 형식
  // ========================================
  it('잘못된 이메일 형식을 입력하면 에러 메시지가 표시된다', async () => {
    renderModal();

    const user = userEvent.setup();

    // user.type: 실제 사용자가 키보드로 한 글자씩 입력하는 것을 시뮬레이션
    await user.type(screen.getByLabelText(/이메일/), 'invalid-email');
    await user.click(screen.getByRole('button', { name: '전송하기' }));

    await waitFor(() => {
      expect(screen.getByText('올바른 이메일 주소를 입력해주세요')).toBeInTheDocument();
    });
  });

  // ========================================
  // 유효성 검증 테스트 — 메시지 최소 길이
  // ========================================
  it('메시지가 10자 미만이면 에러 메시지가 표시된다', async () => {
    renderModal();

    const user = userEvent.setup();

    // 다른 필드는 채우고, 메시지만 짧게 입력
    await user.type(screen.getByLabelText(/이름/), '홍길동');
    await user.type(screen.getByLabelText(/이메일/), 'test@test.com');
    await user.type(screen.getByLabelText(/제목/), '문의');
    await user.type(screen.getByLabelText(/메시지/), '짧은글');
    await user.click(screen.getByRole('button', { name: '전송하기' }));

    await waitFor(() => {
      expect(screen.getByText('최소 10자 이상 입력해주세요')).toBeInTheDocument();
    });
  });

  // ========================================
  // 정상 제출 테스트
  // ========================================
  it('모든 필드를 올바르게 입력하면 emailjs.send가 호출된다', async () => {
    const emailjs = await import('@emailjs/browser');
    const { onOpenChange } = renderModal();

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/이름/), '홍길동');
    await user.type(screen.getByLabelText(/이메일/), 'test@example.com');
    await user.type(screen.getByLabelText(/제목/), '채용 문의');
    await user.type(screen.getByLabelText(/메시지/), '안녕하세요, 채용 관련 문의드립니다.');
    await user.click(screen.getByRole('button', { name: '전송하기' }));

    await waitFor(() => {
      // emailjs.send가 호출되었는지 검증
      expect(emailjs.default.send).toHaveBeenCalled();
      // 모달이 닫혔는지 검증 (onOpenChange(false) 호출)
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });
});
