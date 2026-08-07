import { test, expect } from '@playwright/test';

// 데스크톱 헤더의 <nav> 안에는 ThemeToggle이 한 번만 렌더링된다.
// (모바일 전용 ThemeToggle은 <nav> 밖의 별도 wrapper에 있으므로 이 스코프로 구분한다.)
const themeToggle = (page: import('@playwright/test').Page) =>
  page.getByRole('navigation');

test.describe('테마 토글', () => {
  test('기본 테마는 시스템(System)이며 새로고침 후에도 선택이 유지된다', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(
      themeToggle(page).getByRole('button', { name: '시스템 테마' }),
    ).toHaveAttribute('aria-pressed', 'true');

    await themeToggle(page).getByRole('button', { name: '다크 테마' }).click();

    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(
      themeToggle(page).getByRole('button', { name: '다크 테마' }),
    ).toHaveAttribute('aria-pressed', 'true');

    await page.reload();

    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(
      themeToggle(page).getByRole('button', { name: '다크 테마' }),
    ).toHaveAttribute('aria-pressed', 'true');
  });

  test('라이트 테마를 선택하면 dark 클래스가 제거된다', async ({ page }) => {
    await page.goto('/');

    await themeToggle(page).getByRole('button', { name: '다크 테마' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await themeToggle(page).getByRole('button', { name: '라이트 테마' }).click();

    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(
      themeToggle(page).getByRole('button', { name: '라이트 테마' }),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      themeToggle(page).getByRole('button', { name: '다크 테마' }),
    ).toHaveAttribute('aria-pressed', 'false');
  });

  test('시스템 테마 선택 시 OS 다크모드 설정을 따라간다', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');

    await themeToggle(page).getByRole('button', { name: '시스템 테마' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.emulateMedia({ colorScheme: 'light' });
    // matchMedia change 이벤트 리스너가 반영될 시간을 준다.
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('세 테마 버튼 중 하나만 활성(aria-pressed=true) 상태를 가진다', async ({
    page,
  }) => {
    await page.goto('/');

    const buttons = ['라이트 테마', '다크 테마', '시스템 테마'];
    for (const name of buttons) {
      await themeToggle(page).getByRole('button', { name }).click();

      for (const other of buttons) {
        await expect(
          themeToggle(page).getByRole('button', { name: other }),
        ).toHaveAttribute('aria-pressed', other === name ? 'true' : 'false');
      }
    }
  });

  test('저장된 다크 테마는 페이지 로드 초기(DOMContentLoaded 시점)부터 적용되어 있어야 한다 (FOUC 방지)', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('theme', 'dark');
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // index.html에 테마를 미리 적용하는 인라인 스크립트가 없다면, React가 마운트되어
    // useEffect가 실행되기 전까지는 dark 클래스가 아직 붙지 않은 상태(=한 프레임의 라이트 화면 플래시)일 수 있다.
    const hasDarkClassAtDomContentLoaded = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );

    expect(
      hasDarkClassAtDomContentLoaded,
      'DOMContentLoaded 시점에 dark 클래스가 없다면, 저장된 다크 테마 사용자가 새로고침할 때마다 잠깐 라이트 화면이 보이는 FOUC가 발생한다.',
    ).toBe(true);
  });
});
