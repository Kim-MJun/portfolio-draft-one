import { test, expect, type Page } from '@playwright/test';

// "총 N개의 프로젝트" 카운트는 메인 프로젝트 그리드에만 적용된다 (ETC 프로젝트는 필터 대상이 아님).
const getVisibleCount = async (page: Page) => {
  const text = await page
    .locator('p', { hasText: /^총\s*\d+\s*개의 프로젝트$/ })
    .innerText();
  const match = text.match(/\d+/);
  if (!match) throw new Error(`카운트 텍스트를 파싱하지 못했습니다: "${text}"`);
  return Number(match[0]);
};

// 필터는 메인 프로젝트 그리드에만 적용되고, ETC 프로젝트 그리드는 항상 고정이다.
// 두 그리드를 구분할 접근성 랜드마크가 없어 부득이하게 DOM 순서(첫 번째 .grid)로 스코프한다.
const mainProjectsGrid = (page: Page) =>
  page.locator('#projects .grid').first();

test.describe('프로젝트 필터', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Projects', exact: true })
      .click();
  });

  test('회사 필터를 선택하면 해당 회사의 프로젝트만 노출된다', async ({
    page,
  }) => {
    const totalCount = await getVisibleCount(page);

    const companyGroup = page.getByRole('group', { name: '회사별 필터' });
    const companyButtons = companyGroup.getByRole('button');
    const companyCount = await companyButtons.count();
    expect(companyCount).toBeGreaterThan(1); // '전체' + 최소 1개 회사

    const targetCompany = (await companyButtons.nth(1).textContent())!.trim();
    await companyButtons.nth(1).click();

    await expect(companyButtons.nth(1)).toHaveAttribute('aria-pressed', 'true');
    await expect(companyButtons.nth(0)).toHaveAttribute(
      'aria-pressed',
      'false',
    );

    const filteredCount = await getVisibleCount(page);
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(totalCount);

    const cards = mainProjectsGrid(page).getByRole('button', {
      name: /프로젝트 상세 보기$/,
    });
    await expect(cards).toHaveCount(filteredCount);

    // 필터링된 카드에는 선택한 회사 배지만 노출되어야 한다.
    const otherCompanyBadges = mainProjectsGrid(page).getByText(
      targetCompany,
      { exact: true },
    );
    await expect(otherCompanyBadges).toHaveCount(filteredCount);
  });

  test('회사 필터와 기술 스택 필터를 함께 적용하면 결과가 더 좁혀진다', async ({
    page,
  }) => {
    const totalCount = await getVisibleCount(page);

    const companyGroup = page.getByRole('group', { name: '회사별 필터' });
    await companyGroup.getByRole('button').nth(1).click();
    const afterCompanyCount = await getVisibleCount(page);

    const techGroup = page.getByRole('group', { name: '기술 스택 필터' });
    const techButtons = techGroup.getByRole('button');
    await techButtons.nth(1).click();
    const afterTechCount = await getVisibleCount(page);

    expect(afterTechCount).toBeLessThanOrEqual(afterCompanyCount);
    expect(afterCompanyCount).toBeLessThanOrEqual(totalCount);

    const cards = mainProjectsGrid(page).getByRole('button', {
      name: /프로젝트 상세 보기$/,
    });
    await expect(cards).toHaveCount(afterTechCount);
  });

  test('필터 초기화 버튼을 누르면 전체 목록으로 돌아간다', async ({
    page,
  }) => {
    const totalCount = await getVisibleCount(page);

    await page
      .getByRole('group', { name: '회사별 필터' })
      .getByRole('button')
      .nth(1)
      .click();
    await expect(getVisibleCount(page)).resolves.toBeLessThanOrEqual(
      totalCount,
    );

    const resetButton = page.getByRole('button', { name: '필터 초기화' });
    await expect(resetButton).toBeVisible();
    await resetButton.click();

    await expect(getVisibleCount(page)).resolves.toBe(totalCount);
    await expect(
      page
        .getByRole('group', { name: '회사별 필터' })
        .getByRole('button', { name: '전체', exact: true }),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(
      page
        .getByRole('group', { name: '기술 스택 필터' })
        .getByRole('button', { name: '전체', exact: true }),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(resetButton).not.toBeVisible();
  });

  test('회사+기술스택 조합 결과가 0개일 때 안내 메시지가 노출된다', async ({
    page,
  }) => {
    const companyGroup = page.getByRole('group', { name: '회사별 필터' });
    const companyButtons = companyGroup.getByRole('button');
    const techGroup = page.getByRole('group', { name: '기술 스택 필터' });
    const techButtons = techGroup.getByRole('button');

    const companyCount = await companyButtons.count();
    const techCount = await techButtons.count();

    let foundZeroCombo = false;

    // 기술 스택 목록은 회사와 무관하게 전체 프로젝트 기준으로 계산되므로,
    // 특정 회사를 고르면 그 회사에 없는 기술 스택 옵션도 계속 노출된다.
    // 그 조합을 고르면 결과가 0개가 되는 케이스를 찾는다.
    for (let c = 1; c < companyCount && !foundZeroCombo; c++) {
      await companyButtons.nth(c).click();
      for (let t = 1; t < techCount; t++) {
        await techButtons.nth(t).click();
        const count = await getVisibleCount(page);
        if (count === 0) {
          foundZeroCombo = true;
          break;
        }
        await techButtons.nth(0).click(); // 기술 스택 '전체'로 리셋 후 다음 조합 시도
      }
    }

    expect(
      foundZeroCombo,
      '현재 데이터에서 0개 결과가 나오는 회사+기술스택 조합을 찾지 못했습니다.',
    ).toBe(true);

    await expect(getVisibleCount(page)).resolves.toBe(0);

    // 결과가 0개일 때는 메인 프로젝트 그리드 자체가 사라지므로(빈 상태 메시지로 대체),
    // '#projects .grid'의 첫 번째 요소는 더 이상 메인 그리드를 가리키지 않는다.
    // 대신 사용자에게 안내 메시지가 노출되는지만 확인한다.
    await expect(
      page.getByText(/조건에 맞는 프로젝트가 없습니다|검색 결과가 없습니다|해당하는 프로젝트가 없습니다/),
    ).toBeVisible();
  });

  test('필터 배지는 Space 키로도 선택할 수 있어야 한다', async ({ page }) => {
    const totalCount = await getVisibleCount(page);

    const companyGroup = page.getByRole('group', { name: '회사별 필터' });
    const secondCompanyButton = companyGroup.getByRole('button').nth(1);

    await secondCompanyButton.focus();
    await page.keyboard.press('Space');

    await expect(secondCompanyButton).toHaveAttribute('aria-pressed', 'true');
    await expect(getVisibleCount(page)).resolves.toBeLessThanOrEqual(
      totalCount,
    );
  });
});
