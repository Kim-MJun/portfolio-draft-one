import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 812 } });

test.describe('모바일 뷰포트(375px) 레이아웃', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('가로 스크롤(레이아웃 깨짐)이 발생하지 않는다', async ({ page }) => {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('데스크톱 네비게이션 대신 햄버거 메뉴가 노출된다', async ({ page }) => {
    await expect(
      page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }),
    ).toBeHidden();

    await expect(page.getByRole('button', { name: '메뉴 열기' })).toBeVisible();
  });

  test('햄버거 메뉴를 열면 모바일 내비게이션으로 각 섹션에 접근할 수 있다', async ({
    page,
  }) => {
    await page.getByRole('button', { name: '메뉴 열기' }).click();

    const mobileNav = page.locator('#mobile-navigation');
    await expect(mobileNav).toBeVisible();
    await expect(mobileNav.getByRole('link', { name: 'Contact', exact: true })).toBeVisible();

    await mobileNav.getByRole('link', { name: 'Contact', exact: true }).click();

    await expect(page).toHaveURL(/#contact$/);
    // 클릭 시 메뉴가 자동으로 닫힌다
    await expect(page.locator('#mobile-navigation')).toBeHidden();
  });

  test('Hero 섹션의 주요 콘텐츠가 뷰포트 안에서 잘리지 않고 보인다', async ({
    page,
  }) => {
    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();

    const box = await heroHeading.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(375 + 1);
  });

  test('프로젝트 카드가 1열로 쌓이며 뷰포트 밖으로 넘치지 않는다', async ({
    page,
  }) => {
    await page.getByRole('button', { name: '메뉴 열기' }).click();
    await page
      .locator('#mobile-navigation')
      .getByRole('link', { name: 'Projects', exact: true })
      .click();

    const firstCard = page
      .getByRole('button', { name: /프로젝트 상세 보기$/ })
      .first();
    await expect(firstCard).toBeVisible();

    const box = await firstCard.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeLessThanOrEqual(375);
  });

  test('연락처 폼 모달이 모바일 화면 안에 맞게 표시된다', async ({ page }) => {
    await page.getByRole('button', { name: '메뉴 열기' }).click();
    await page
      .locator('#mobile-navigation')
      .getByRole('link', { name: 'Contact', exact: true })
      .click();

    await page.getByRole('button', { name: '이메일 보내기' }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    const box = await dialog.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeLessThanOrEqual(375);
  });

  test('모바일 메뉴를 연 채로 데스크톱 너비로 리사이즈하면 모바일 메뉴가 남아있지 않는다', async ({
    page,
  }) => {
    await page.getByRole('button', { name: '메뉴 열기' }).click();
    await expect(page.locator('#mobile-navigation')).toBeVisible();

    await page.setViewportSize({ width: 1280, height: 800 });

    await expect(page.locator('#mobile-navigation')).toBeHidden();
    await expect(
      page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: '메뉴 닫기' })).toBeHidden();
  });
});
