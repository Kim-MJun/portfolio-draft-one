import { test, expect } from '@playwright/test';

test.describe('프로젝트 외부 링크', () => {
  test('GitHub 프로필 링크가 정상 응답을 반환한다', async ({ page, request }) => {
    await page.goto('/');
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true })
      .click();

    const githubLink = page.getByRole('link', {
      name: 'github.com/Kim-MJun',
    });
    const href = await githubLink.getAttribute('href');
    expect(href).toBeTruthy();

    const response = await request.get(href!);
    expect(
      response.status(),
      `${href} 응답 코드: ${response.status()}`,
    ).toBe(200);
  });

  test('모든 프로젝트 카드의 라이브 데모 링크가 깨지지 않았다', async ({
    page,
    request,
  }) => {
    await page.goto('/');
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Projects', exact: true })
      .click();

    const cards = page.getByRole('button', {
      name: /프로젝트 상세 보기$/,
    });
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);

    const checkedUrls: string[] = [];

    for (let i = 0; i < cardCount; i++) {
      await cards.nth(i).click();

      const liveLink = page.getByRole('link', { name: '서비스 바로가기' });
      if (await liveLink.count() > 0) {
        const href = await liveLink.getAttribute('href');
        expect(href).toBeTruthy();

        if (!checkedUrls.includes(href!)) {
          checkedUrls.push(href!);
          const response = await request.get(href!);
          expect(
            response.status(),
            `${href} 응답 코드: ${response.status()}`,
          ).toBe(200);
        }
      }

      await page.getByRole('button', { name: '모달 닫기' }).click();
    }

    // 실제로 확인된 라이브 데모 링크가 최소 1개는 있어야 한다 (누락 검증용)
    expect(checkedUrls.length).toBeGreaterThan(0);
  });

  test('이력서 PDF 다운로드 링크가 정상적으로 PDF 파일을 반환한다', async ({
    page,
    request,
  }) => {
    await page.goto('/');

    const resumeLink = page.getByRole('link', {
      name: '이력서 PDF 다운로드',
    });
    const href = await resumeLink.getAttribute('href');
    expect(href).toBeTruthy();

    const response = await request.get(href!);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });
});
