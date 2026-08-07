import { test, expect } from '@playwright/test';

const sections = [
  { name: 'About', hash: '#about', heading: 'About' },
  { name: 'Experience', hash: '#experience', heading: 'Experience' },
  { name: 'Projects', hash: '#projects', heading: 'Projects' },
  { name: 'Education', hash: '#education', heading: 'Education' },
  { name: 'Contact', hash: '#contact', heading: 'Contact' },
];

test.describe('메인 네비게이션', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  for (const section of sections) {
    test(`상단 nav의 "${section.name}" 링크가 해당 섹션으로 이동한다`, async ({
      page,
    }) => {
      await page
        .getByRole('navigation')
        .getByRole('link', { name: section.name, exact: true })
        .click();

      await expect(page).toHaveURL(new RegExp(`\\${section.hash}$`));
      await expect(
        page.getByRole('heading', { name: section.heading, level: 2 }),
      ).toBeInViewport();
    });
  }

  test('로고를 클릭하면 최상단(Hero) 섹션으로 이동한다', async ({ page }) => {
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true })
      .click();
    await expect(page).toHaveURL(/#contact$/);

    await page.getByRole('link', { name: 'MJ.' }).click();

    await expect(page).toHaveURL(/#top$/);
    await expect(page.locator('#top')).toBeInViewport();
  });

  test('문서 맨 아래까지 스크롤하면 Contact nav 링크가 활성 상태로 표시된다', async ({
    page,
  }) => {
    const contactLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true });
    const aboutLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'About', exact: true });

    await page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );

    // 활성 nav 항목은 aria-current 없이 text-foreground 클래스로만 표시된다.
    // ('hover:text-foreground'도 문자열로는 'text-foreground'를 포함하므로 단어 경계로 정확히 매칭한다.)
    const activeClass = /(?:^|\s)text-foreground(?:\s|$)/;
    await expect(contactLink).toHaveClass(activeClass);
    await expect(aboutLink).not.toHaveClass(activeClass);
  });

  test('존재하지 않는 경로로 이동하면 404 페이지가 노출되고 홈으로 돌아갈 수 있다', async ({
    page,
  }) => {
    await page.goto('/no-such-page');

    await expect(
      page.getByRole('heading', { name: '페이지를 찾을 수 없습니다' }),
    ).toBeVisible();

    await page.getByRole('link', { name: '홈으로 돌아가기' }).click();

    await expect(page).toHaveURL('/');
    await expect(
      page.getByRole('heading', { name: '문제를 원리부터', exact: false }),
    ).toBeVisible();
  });
});
