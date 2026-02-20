import '@testing-library/jest-dom/vitest';

// jsdom에서 미지원 브라우저 API 모킹
vi.stubGlobal(
  'IntersectionObserver',
  class {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    takeRecords = vi.fn();
    root = null;
    rootMargin = '';
    thresholds = [];
  },
);
