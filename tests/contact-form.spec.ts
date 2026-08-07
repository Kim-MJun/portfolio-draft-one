import { test, expect } from '@playwright/test';

test.describe('연락처 폼', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true })
      .click();
    await page.getByRole('button', { name: '이메일 보내기' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('빈 값으로 제출하면 필수 입력 유효성 검사 메시지가 노출된다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('button', { name: '전송하기' }).click();

    await expect(dialog.getByText('이름을 입력해주세요')).toBeVisible();
    await expect(dialog.getByText('이메일을 입력해주세요')).toBeVisible();
    await expect(dialog.getByText('제목을 입력해주세요')).toBeVisible();
    await expect(dialog.getByText('메시지를 입력해주세요')).toBeVisible();
  });

  test('잘못된 이메일 형식은 유효성 검사 메시지가 노출된다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByLabel('이름', { exact: false }).fill('홍길동');
    await dialog.getByLabel('이메일', { exact: false }).fill('not-an-email');
    await dialog.getByLabel('제목', { exact: false }).fill('문의합니다');
    await dialog
      .getByLabel('메시지', { exact: false })
      .fill('안녕하세요, 협업 관련 문의드립니다.');

    await dialog.getByRole('button', { name: '전송하기' }).click();

    await expect(
      dialog.getByText('올바른 이메일 주소를 입력해주세요'),
    ).toBeVisible();
  });

  test('10자 미만 메시지는 최소 길이 유효성 검사 메시지가 노출된다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByLabel('이름', { exact: false }).fill('홍길동');
    await dialog.getByLabel('이메일', { exact: false }).fill('test@example.com');
    await dialog.getByLabel('제목', { exact: false }).fill('문의합니다');
    await dialog.getByLabel('메시지', { exact: false }).fill('짧은메시지');

    await dialog.getByRole('button', { name: '전송하기' }).click();

    await expect(dialog.getByText('최소 10자 이상 입력해주세요')).toBeVisible();
  });

  test('모든 값을 올바르게 입력하면 유효성 검사 에러 없이 전송이 시도된다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByLabel('이름', { exact: false }).fill('홍길동');
    await dialog.getByLabel('이메일', { exact: false }).fill('test@example.com');
    await dialog.getByLabel('제목', { exact: false }).fill('협업 제안');
    await dialog
      .getByLabel('메시지', { exact: false })
      .fill('안녕하세요, 협업 관련하여 문의드립니다. 잘 부탁드립니다.');

    await dialog.getByRole('button', { name: '전송하기' }).click();

    // 클라이언트 측 유효성 검사는 모두 통과해야 하므로 필수값 에러 메시지가 남아있지 않아야 한다
    await expect(dialog.getByText('이름을 입력해주세요')).not.toBeVisible();
    await expect(dialog.getByText('이메일을 입력해주세요')).not.toBeVisible();
    await expect(dialog.getByText('제목을 입력해주세요')).not.toBeVisible();
    await expect(dialog.getByText('메시지를 입력해주세요')).not.toBeVisible();
    await expect(
      dialog.getByText('올바른 이메일 주소를 입력해주세요'),
    ).not.toBeVisible();

    // 실제 전송은 EmailJS 환경변수/네트워크에 의존하므로 성공 또는 실패 토스트 중 하나가 뜨는 것으로
    // "제출 시도가 이루어졌다"만 확인한다 (외부 서비스 성공 여부까지 단정하지 않음).
    await expect(
      page.getByText(/메일이 성공적으로 전송되었습니다|메일 전송에 실패했습니다/),
    ).toBeVisible({ timeout: 10000 });
  });

  test('취소 버튼을 누르면 모달이 닫힌다', async ({ page }) => {
    await page.getByRole('dialog').getByRole('button', { name: '취소' }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('전송 중에는 Esc를 눌러도 모달이 닫히지 않아야 한다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByLabel('이름', { exact: false }).fill('홍길동');
    await dialog.getByLabel('이메일', { exact: false }).fill('test@example.com');
    await dialog.getByLabel('제목', { exact: false }).fill('협업 제안');
    await dialog
      .getByLabel('메시지', { exact: false })
      .fill('안녕하세요, 협업 관련하여 문의드립니다. 잘 부탁드립니다.');

    await dialog.getByRole('button', { name: '전송하기' }).click();
    // 전송 중(로딩 스피너) 상태를 확인한 직후 바로 Esc를 눌러본다.
    await expect(dialog.getByText('전송 중...')).toBeVisible();
    await page.keyboard.press('Escape');

    // 전송 중에 모달이 닫히면 사용자가 입력한 내용과 요청 결과를 잃어버릴 수 있으므로,
    // 전송이 끝나기 전까지는 모달이 유지되어야 한다.
    await expect(
      dialog,
      '전송 중에 Esc로 모달이 닫히면 진행 중인 요청 컨텍스트가 유실됩니다.',
    ).toBeVisible();
  });
});
