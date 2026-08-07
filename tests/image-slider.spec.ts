import { test, expect, type Locator } from '@playwright/test';

// 이미지 3장을 가진 프로젝트('OO국제공항 사이버보안 자동화 포탈 고도화')로 슬라이더 동작을 검증한다.
const PROJECT_TITLE = 'OO국제공항 사이버보안 자동화 포탈 고도화';

// 슬라이더는 모든 이미지를 항상 DOM에 렌더링하고 translateX로 위치만 바꾸므로,
// alt 텍스트만으로는 "현재 보이는 이미지"를 구분할 접근성 정보가 없다.
// 실제로 화면에 보이는 이미지인지는 각 이미지 wrapper의 translateX(0%) 여부로 판단한다.
const isCurrentSlide = async (image: Locator) => {
  const transform = await image.evaluate(
    (img) => (img.parentElement as HTMLElement).style.transform,
  );
  return transform === 'translateX(0%)';
};

test.describe('프로젝트 이미지 슬라이더', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Projects', exact: true })
      .click();
    await page
      .getByRole('button', { name: `${PROJECT_TITLE} 프로젝트 상세 보기` })
      .click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('다음/이전 버튼으로 이미지를 순회하고 양 끝에서 버튼이 비활성화된다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    const nextButton = dialog.getByRole('button', { name: '다음 이미지' });
    const prevButton = dialog.getByRole('button', { name: '이전 이미지' });

    await expect(isCurrentSlide(dialog.getByAltText(`${PROJECT_TITLE} 이미지 1`))).resolves.toBe(
      true,
    );
    await expect(prevButton).toBeDisabled();

    await nextButton.click();
    await expect(isCurrentSlide(dialog.getByAltText(`${PROJECT_TITLE} 이미지 2`))).resolves.toBe(
      true,
    );

    await nextButton.click();
    await expect(isCurrentSlide(dialog.getByAltText(`${PROJECT_TITLE} 이미지 3`))).resolves.toBe(
      true,
    );
    await expect(nextButton).toBeDisabled();

    await prevButton.click();
    await expect(isCurrentSlide(dialog.getByAltText(`${PROJECT_TITLE} 이미지 2`))).resolves.toBe(
      true,
    );
    await expect(nextButton).toBeEnabled();
  });

  test('하단 인디케이터(dot)를 클릭하면 해당 이미지로 바로 이동한다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');

    await dialog.getByRole('button', { name: '이미지 3로 이동' }).click();
    await expect(isCurrentSlide(dialog.getByAltText(`${PROJECT_TITLE} 이미지 3`))).resolves.toBe(
      true,
    );

    await dialog.getByRole('button', { name: '이미지 1로 이동' }).click();
    await expect(isCurrentSlide(dialog.getByAltText(`${PROJECT_TITLE} 이미지 1`))).resolves.toBe(
      true,
    );
  });

  test('전체화면 보기를 열고 화살표 키/Esc로 탐색 및 닫기가 동작한다', async ({
    page,
  }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('button', { name: '이미지 전체화면 보기' }).click();

    const fullscreenCloseButton = page.getByRole('button', {
      name: '전체화면 닫기',
    });
    await expect(fullscreenCloseButton).toBeVisible();
    await expect(page.getByAltText(`${PROJECT_TITLE} 이미지 1`).last()).toBeVisible();

    await page.keyboard.press('ArrowRight');
    await expect(page.getByAltText(`${PROJECT_TITLE} 이미지 2`).last()).toBeVisible();

    await page.keyboard.press('ArrowRight');
    await expect(page.getByAltText(`${PROJECT_TITLE} 이미지 3`).last()).toBeVisible();

    await page.keyboard.press('ArrowLeft');
    await expect(page.getByAltText(`${PROJECT_TITLE} 이미지 2`).last()).toBeVisible();

    // 전체화면에서 Esc는 전체화면만 닫고, 프로젝트 모달은 유지되어야 한다.
    await page.keyboard.press('Escape');
    await expect(fullscreenCloseButton).not.toBeVisible();
    await expect(dialog).toBeVisible();

    // 모달에서 다시 Esc를 누르면 모달이 닫힌다.
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('전체화면 배경을 클릭하면 닫힌다', async ({ page }) => {
    const dialog = page.getByRole('dialog');
    await dialog.getByRole('button', { name: '이미지 전체화면 보기' }).click();

    // 배경 버튼은 뷰포트 전체를 덮지만, 가운데 확대 이미지가 더 높은 z-index로 겹쳐 있어
    // 기본 클릭 위치(중앙)는 이미지에 가로막힌다. 이미지가 없는 모서리를 클릭한다.
    await page
      .getByRole('button', { name: '전체화면 배경 닫기' })
      .click({ position: { x: 10, y: 10 } });

    await expect(
      page.getByRole('button', { name: '전체화면 닫기' }),
    ).not.toBeVisible();
    await expect(dialog).toBeVisible();
  });
});
