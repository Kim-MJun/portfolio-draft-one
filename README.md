# Portfolio - 김민준

5년차 웹 프론트엔드 개발자 포트폴리오 사이트

## Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Package Manager**: pnpm

## Features

- 라이트/다크 테마 지원
- 반응형 디자인 (Mobile, Tablet, Desktop)
- 프로젝트 상세 모달
- 스크롤 기반 네비게이션

## Getting Started

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui 컴포넌트
│   ├── layout/      # Header, Footer
│   └── sections/    # 페이지 섹션 컴포넌트
├── hooks/           # 커스텀 훅
├── lib/             # 유틸리티
└── data/            # 이력서 데이터
```

## License

MIT
