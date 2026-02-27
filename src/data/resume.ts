// 이미지 import (Vite가 빌드 시 올바르게 처리하도록)
import apec2025Thumbnail from '@/assets/APEC2025_thumbnail.png';
import apchubThumbnail from '@/assets/apchub_thumbnail.png';
import apchub2025Two from '@/assets/apchub_two.png';
import cybercrimeThumbnail from '@/assets/cybercrime_thumbnail.png';
import incheonThumbnail from '@/assets/incheon_thumbnail.png';
import incheonTwo from '@/assets/incheon_two.png';
import incheonThree from '@/assets/incheon_three.png';
import locationThumbnail from '@/assets/location_thumbnail.jpg';
import apexescThumbnail from '@/assets/apexesc_thumbnail.png';
import dokdoThumbnail from '@/assets/dokdo_thumbnail.png';
import olidaThumbnail from '@/assets/olida_thumbnail.png';
import naonThumbnail from '@/assets/naon_thumbnail.png';
import batangThumbnail from '@/assets/batang_thumbnail.png';
import sosThumbnail from '@/assets/sos_thumbnail.jpeg';
import sokhamThumbnail from '@/assets/sokham_thumbnail.webp';
import sokhamTwo from '@/assets/sokham_two.webp';

export interface AchievementCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  type: string;
  description: string;
  projects: string[];
}

export interface ProjectImage {
  src: string;
  isBlur: boolean;
}

export interface Project {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
  techStack: string[];
  role: string;
  achievements: AchievementCategory[];
  highlights: string[];
  metric?: string;
  liveUrl?: string;
  images?: ProjectImage[];
}

export const personalInfo = {
  name: '김민준',
  nameEn: 'Kim Minjun',
  title: '웹 프론트엔드 개발자',
  email: 'balam14774@gmail.com',
  phone: '+82 10-3383-6553',
  github: 'https://github.com/Kim-MJun',
  keywords: ['열정', '소통', '유연함'],
  heroSkills: [
    'React',
    'Next.js',
    'TypeScript',
    'Sass',
    'Tailwind CSS',
    'TanStack Query',
    'Zustand',
    'Git',
    'Slack',
    'Notion',
  ],
  introduction: `소통과 협업을 바탕으로, 보안 관제부터 업무 자동화까지 다양한 도메인에서 React/Next.js로 비즈니스 가치를 만들어온 개발자입니다.`,
};

export const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Vite', level: 85 },
  ],
  styling: [
    { name: 'Tailwind CSS', level: 85 },
    { name: 'SASS', level: 90 },
    { name: 'Ant Design', level: 90 },
    { name: 'styled-components', level: 85 },
  ],
  stateManagement: [
    { name: 'Zustand', level: 85 },
    { name: 'TanStack Query', level: 85 },
    { name: 'Redux', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 75 },
    { name: 'NestJS', level: 70 },
    { name: 'Prisma', level: 75 },
  ],
  database: [
    { name: 'MySQL', level: 75 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MariaDB', level: 70 },
    { name: 'ElasticSearch', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'AWS EC2', level: 70 },
    { name: 'Figma', level: 75 },
  ],
  specialties: [
    { name: 'Cesium (3D GIS)', level: 80 },
    { name: 'WebSocket', level: 80 },
    { name: 'HLS.js', level: 75 },
  ],
};

export const experiences: Experience[] = [
  {
    company: '에이치디에스(주)',
    position: '기업부설연구소 연구원',
    period: '2024.11 ~ 재직중',
    type: '계약직',
    description: "국책과제 'AI기반 전영역 경비안전 기술' 개발",
    projects: [
      'APEC 2025 통합 관제 시스템',
      'APEC 2025 경비안전 관제 백오피스',
      '위치정보 사업자 관리 백오피스',
    ],
  },
  {
    company: '지피다(주)',
    position: '개발2팀 사원',
    period: '2021.04 ~ 2024.10 (3년 7개월)',
    type: '정규직',
    description: '소프트웨어 사업부 소속, 보안 시스템 및 웹사이트 개발',
    projects: [
      '인천국제공항 사이버보안 자동화 포탈 고도화',
      '사이버범죄 연관분석 시스템 고도화',
      '법인세무 자동화 시스템 솔루션',
      'APC-Hub 홈페이지',
      '자사 웹사이트 개발',
      '불법촬영물 유포탐지 및 피해자 자원 시스템 고도화',
      '시각화&대시보드 솔루션 프로젝트',
      '3D 가상공간 마켓플레이스 웹사이트 개발(NFT)',
      '독도의용수비대 기념사업회 웹사이트',
      '현장조사 지원 시스템',
      ' AI기반 사이버아동 성범죄추적 및 탐지시스템 유지보수',
    ],
  },
];

export const mainProjects: Project[] = [
  {
    id: 1,
    title: 'APEC 2025 경비안전 관제 시스템',
    period: '2025.02 ~ 2025.09',
    company: '에이치디에스(주)',
    description:
      '2025 APEC 정상회의 행사장 통합 관제 시스템. Cesium 3D GIS 지도에서 CCTV·로봇 등 수백 대 장비의 실시간 모니터링과 AI 이벤트 감지 시 즉각적인 HLS 스트리밍 연동을 담당했습니다.',
    techStack: [
      'React',
      'TypeScript',
      'Cesium',
      'Zustand',
      'TanStack Query',
      'WebSocket',
      'HLS.js',
    ],
    role: '프론트엔드 엔지니어 5명 / 개인 기여도 30%',
    achievements: [
      {
        category: 'GIS 지도 핵심 기능',
        items: [
          'Cesium 3D GIS 기반 장비별 Entity 노드 시스템 아키텍처 설계 및 구현',
          'CCTV 시야각(FOV) 시각화 컴포넌트 자체 개발로 장비 배치 현황 직관화',
          '로봇 등 이동체 실시간 위치 추적 및 인터랙티브 팝업 기능 구현',
          '이벤트 강조 애니메이션으로 관제 요원 상황 인지 속도 향상',
          // 'Cesium semiMajorAxis 렌더링 버그 원인 분석 및 자체 해결',
        ],
      },
      {
        category: '실시간 스트리밍 연동',
        items: [
          'WebSocket 기반 AI 이벤트 감지 → 자동 스트리밍 연동 로직 설계 및 구현',
          'HLS.js 활용 다중 장비 실시간 영상 스트리밍 동시 처리',
          'Bounding Box 기반 AI 객체 탐지 결과 영상 오버레이 기능 개발',
        ],
      },
      {
        category: '아키텍처 & 공통 모듈',
        items: [
          'Zustand 기반 전역 상태 관리 스토어 9개 설계로 상태 흐름 일관성 확보',
          'WebSocket·Cesium 연동 등 재사용 가능한 커스텀 훅 9개 개발',
          '장비목록 DnD(Drag and Drop) UI 및 사용자 경험 최적화',
          '세션 에러 핸들링 및 인증 플로우 구현',
        ],
      },
      {
        category: '성과',
        items: [
          'API 호출 추상화·UI 로직 분리·외부 라이브러리 통합 등 관심사별 커스텀 훅 9 개 설계 - 기능 추가 시컴포넌트 수정 없이 훅 교체만으로 대응 가능한 구조 구현 -> 이후 기능 추가 요청 시 평균 개발 소요시간 단축',
          'Cesium 3D GIS 지도 위 장비별 Entity 노드 시스템 구축 및 CCTV 시야각(FOV) 시각화',
          'WebSocket + HLS.js 기반 AI 이벤트 감지 시 실시간 스트리밍 자동 연동',
          '관제 요원의 상황 인지 속도 개선 및 즉각적 대응 체계 구축',
        ],
      },
    ],
    highlights: ['3D GIS', '실시간 스트리밍', 'AI 이벤트 감지'],
    metric: 'APEC 정상회의 관제',
    images: [{ src: apec2025Thumbnail, isBlur: true }],
  },
  {
    id: 2,
    title: '사이버범죄 연관분석 시스템 고도화',
    period: '2023.09 ~ 2024.01',
    company: '지피다(주)',
    description:
      '데이터 기하급수적 증가로 인한 시스템 성능 저하 및 서비스 중단 현상 해결을 위한 고도화 프로젝트. ElasticSearch 도입을 주도하여 검색 응답시간 90% 단축을 달성했습니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Ant Design',
      'ElasticSearch',
      'MariaDB',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      {
        category: 'Frontend 마이그레이션',
        items: [
          'React → Next.js 전체 마이그레이션 및 UI/UX 리뉴얼',
          'Python 검색 알고리즘을 ElasticSearch로 전환 주도 개발',
          '검색 알고리즘 기반 시각화 그래프 기능 개선',
          '성능 개선을 위한 기존 코드 리팩토링',
        ],
      },
      {
        category: 'Backend 마이그레이션',
        items: [
          'Java SpringBoot → Next.js API 마이그레이션',
          'Python API → Next.js API 마이그레이션',
          'MongoDB → MariaDB 마이그레이션 (NoSQL → RDB 전환)',
        ],
      },
      {
        category: '성과',
        items: [
          'MongoDB 의 비정형 데이터 구조로 검색 오작동 및 서비스 중단이 반복되는 문제 진단 -> MariaDB 로 전환하여 데이터 정형화 및 안정성 확보',
          'Python 검색 알고리즘의 서비스 중단 현상으로 레거시 코드 유지보수 불가 판단 -> ElasticSearch 도입으로 응답시간 90% 단축',
          'React + Java SpringBoot 이원화 구조를 Next.js 로 통합하여 단일 언어 기반 유지보수 효율화',
          '전체 UI/UX 리뉴얼 진행 -> UI 개선으로 실무 담당자 업무 편의성 향상',
        ],
      },
    ],
    highlights: ['성능 최적화 90%', 'ElasticSearch', '마이그레이션'],
    metric: '검색속도 90% 단축',
    images: [{ src: cybercrimeThumbnail, isBlur: true }],
  },
  {
    id: 3,
    title: '인천국제공항 사이버보안 자동화 포탈 고도화',
    period: '2024.02 ~ 2024.10',
    company: '지피다(주)',
    description:
      '인천국제공항 내 보안 유지 업무 개선 및 증가하는 공사로 인한 보안요구 사항 처리를 위한 시스템 고도화 프로젝트. 공사 프로세스 기반 커스텀 결재라인 기능을 주도적으로 설계·개발하여 업무 효율성을 크게 향상시켰습니다.',
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Ant Design',
      'MariaDB',
      'Docker',
      'Server Actions',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          '공사 프로세스 기반 커스텀 결재라인 설계 및 개발 주도',
          '결재 알림 및 메일 전송 기능 개발',
          'Excel 및 한글 파일 템플릿 문서를 HTML/JSX로 퍼블리싱',
          'JWT 토큰 + 쿠키 기반 유저 인증 시스템 구현',
          '재사용성을 고려한 공용 컴포넌트 개발',
        ],
      },
      {
        category: 'Backend 개발',
        items: [
          'Next.js 14 Server Actions 활용한 풀스택 개발',
          'Prisma 벤치마킹한 공용 CRUD 라이브러리 자체 개발',
          'DB 설계 및 스키마 작성 (dbdiagram 활용)',
          '공사 결재라인 스키마 및 기능 플로우 설계',
        ],
      },
      {
        category: '성과',
        items: [
          '부서별 결재 구조가 상이한 문제 파악 -> 유연한 커스텀 결재라인 설계 및 개발 주도, DB 스키마·알림 플로우까지 일괄 설계 -> 결재 처리 과정에서 발생하던 수작업 프로세스 및 소요시간 단축',
          '별도 백엔드 서버 없이 빠르게 개발해야하는 내부 시스템 특성 판단 -> Next.js14 Server Actions 채택으로 인프라 비용 절감 및 프론트엔드 개발자가 풀스택으로 커버하는 구조 구현 -> 별도 백엔드 서버 운영 비용 없이 프로젝트 납품 완료',
          'Prisma Client API 를 벤치마킹한 공용 CRUD 라이브러리 설계·개발 -> 메서드 체이닝 방식의 쿼리빌더와 고수준 CRUD API 를 2 계층으로 분리, TypeScript 제네릭 기반 타입 안전한 SQL 추상화 구현 -> 신규 API 개발 시 보일러플레이트 코드 감소로 개발 속도 향상',
          'JWT + 쿠키 기반 인증 시스템 구현 -> 공항 보안 감사 기준 충족',
        ],
      },
    ],
    highlights: ['커스텀 결재라인', '풀스택 개발', '폐쇄망 배포'],
    metric: '인천공항 보안 포탈',
    images: [
      { src: incheonThumbnail, isBlur: true },
      { src: incheonTwo, isBlur: true },
      { src: incheonThree, isBlur: true },
    ],
  },
  {
    id: 4,
    title: '법인세무 자동화 시스템 솔루션',
    period: '2023.05 ~ 2023.09',
    company: '지피다(주)',
    description:
      '기존 Excel 기반 세무 업무를 웹 기반 자동화 시스템으로 전환하는 프로젝트. PDF 데이터 자동 추출 및 통계 자동 계산 기능을 개발하여 작업 시간을 80% 이상 단축시켰습니다.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AWS EC2'],
    role: '프론트엔드 엔지니어 2명 / 개인 기여도 50%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          '원천징수부 PDF 파일 업로드 시 필요 데이터만 추출해 자동 DB화 로직 개발',
          '자동 DB화된 데이터 기반 인원 및 금액 통계 자동화 기능 구현',
          'Excel 수식 → 웹 기반 자동 계산 알고리즘으로 전환',
          '관리자/작업자 권한별 기능 및 페이지 접근 제어 알고리즘 개발',
        ],
      },
      {
        category: 'Backend & 인프라',
        items: [
          'Next.js API + Prisma + PostgreSQL 기반 데이터 관리 시스템 구축',
          'ER다이어그램 및 Prisma Schema 활용한 DB 스키마 설계',
          'AWS EC2 + PM2를 활용한 무중단 배포 환경 구축',
        ],
      },
      {
        category: '성과',
        items: [
          '원천징수부 PDF 파일 데이터 자동 추출 및 DB 화 알고리즘 개발 -> 수작업 데이터 입력 과정 완전 자동화',
          'Prisma + PostgreSQL 기반 DB 스키마 설계 및 API 개발',
          'AWS EC2 + PM2 무중단 배포 환경 구축 -> 배포 시 서비스 중단 없이 업데이트 가능한 운영 환경 확보',
          '작업 시간 80% 이상 단축 및 세무 작업 정확성 보장',
        ],
      },
    ],
    highlights: ['작업 시간 80% 단축', 'PDF 자동 파싱', '무중단 배포'],
    metric: '작업시간 80% 단축',
    images: [
      { src: sokhamThumbnail, isBlur: false },
      { src: sokhamTwo, isBlur: false },
    ],
  },
  {
    id: 5,
    title: '아·태 사이버범죄 역량강화 허브(APC-Hub) 홈페이지',
    period: '2021.12 ~ 2023.12',
    company: '지피다(주)',
    description:
      'B2G 사업으로 아시아·태평양 사이버범죄 역량강화 허브 홈페이지를 3년간 지속적으로 개발·고도화한 프로젝트. 비대면 온라인 교육 시스템과 부정방지 로직을 주도적으로 개발했습니다.',
    techStack: ['Next.js', 'SASS', 'MariaDB', 'Strapi', 'Figma'],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      {
        category: '온라인 교육 시스템',
        items: [
          'plyr-react 모듈 활용한 비대면 온라인 교육 시스템 개발',
          '교육 완료 후 퀴즈, 설문조사 및 수료증 발급 기능 개발',
          '교육 진행현황 실시간 추적 기능 구현',
          '강의 순서 지정 및 퀴즈 문항 랜덤배치 로직 개발',
        ],
      },
      {
        category: 'UI/UX & 성능 최적화',
        items: [
          'Desktop, Tablet, Mobile 반응형 UI/UX 대대적 리뉴얼',
          '페이지별 SSR, SSG 최적화로 로딩 속도 개선',
          '홈페이지 UI/UX 개선 및 모바일 반응형 강화',
        ],
      },
      {
        category: '보안 & 인증 강화',
        items: [
          '비대면 온라인 교육 수강 부정방지 로직 자체 개발',
          'Google reCAPTCHA 기반 보안 인증 시스템 개선',
          '비밀번호 5회 오류 시 접근제한 기능 개발',
        ],
      },
      {
        category: '성과',
        items: [
          '부정수강 방지 로직으로 클라이언트 만족도 및 안정성 향상',
          'UI/UX 리팩토링으로 시스템 응답 속도 및 사용자 경험 개선',
          '폐쇄망 환경 배포 및 3년간 안정적 운영',
        ],
      },
    ],
    highlights: ['온라인 교육 시스템', '실서비스 운영', 'B2G 사업'],
    metric: 'B2G · 3년 운영',
    liveUrl: 'https://apc-hub.org/',
    images: [
      { src: apchubThumbnail, isBlur: false },
      { src: apchub2025Two, isBlur: false },
    ],
  },
];

export const etcProjects: Project[] = [
  {
    id: 101,
    title: '위치정보 사업자 관리 백오피스',
    period: '2025.02 ~ 2025.03',
    company: '에이치디에스(주)',
    description:
      '위치기반 서비스 사업자를 위한 관리자 백오피스 시스템. 프로젝트 마감을 위해 서포트로 투입하여 앱 배포 관리 및 임시 사용자 관리 기능 개발 담당.',
    techStack: ['React', 'TypeScript', 'TanStack Query', 'Ant Design', 'Vite'],
    role: '프론트엔드 5명 / 기여도 15%',
    achievements: [
      {
        category: '앱 배포 관리 시스템',
        items: [
          'APK/IPA 바이너리 파일 업로드 및 버전 관리 기능 구현',
          'FormData + Query Parameter 조합한 multipart API 설계로 백엔드 스펙 호환성 확보',
          '기획 변경에 따른 리팩토링 수행 (코드량 40% 감소)',
        ],
      },
      {
        category: '임시 사용자 계정 관리',
        items: [
          '삭제 시 빈 페이지 방지를 위한 페이지네이션 오프셋 자동 보정 로직 구현',
          '수정 시 변경된 필드만 서버에 전송하는 최적화 적용 (불필요한 API 호출 방지)',
        ],
      },
      {
        category: '성과',
        items: [
          '기획 변경 대응 시 기존 대비 코드량 40% 감소로 유지보수성 개선',
        ],
      },
    ],
    highlights: ['백오피스', '앱 배포 관리'],
    metric: '코드량 40% 감소',
    images: [{ src: locationThumbnail, isBlur: false }],
  },
  {
    id: 102,
    title: '자사 웹사이트 개발',
    period: '2023.01 ~ 2023.03',
    company: '지피다(주)',
    description:
      '자사 웹사이트 전면 리뉴얼 프로젝트. Next.js와 Notion API를 활용해 현대적인 디자인과 클라우드 기반 인프라로 전환하여 관리 효율성과 성능을 크게 개선했습니다.',
    techStack: ['Next.js', 'Notion API', 'Figma', 'styled-components'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 50%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          '기존 딱딱한 웹사이트를 현대적인 디자인 및 직관적인 UI/UX로 개선',
          'Next.js CSR, SSR 등 페이지별 최적 렌더링 도입',
          'Notion API를 이용한 웹사이트 데이터 연동 개발',
        ],
      },
      {
        category: '관리자 시스템 구축',
        items: [
          'Notion API + Notion Database 기반 백엔드 시스템 구축',
          'Notion Database를 활용한 콘텐츠 관리 시스템(CMS) 구축',
          'Notion Database 스키마 설계로 DB 역할 수행',
        ],
      },
      {
        category: '성과',
        items: [
          'Notion 기반 관리자 시스템으로 비개발자도 쉽게 관리 가능',
          '관리 효율성 및 사용성 크게 향상',
        ],
      },
    ],
    highlights: ['웹사이트 리뉴얼', 'Notion CMS'],
    liveUrl: 'https://apexesc.com/',
    images: [{ src: apexescThumbnail, isBlur: false }],
  },
  {
    id: 103,
    title: '독도의용수비대 기념사업회 웹사이트',
    period: '2022.01 ~ 2022.04',
    company: '지피다(주)',
    description:
      '독도의용수비대 기념사업회 웹사이트를 최신 기술과 인터페이스로 리뉴얼하는 프로젝트. 반응형 UI/UX 및 관리자 기능을 주도적으로 개발했습니다.',
    techStack: ['Next.js', 'Strapi', 'SASS', 'Figma'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 50%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          'Desktop, Tablet, Mobile 반응형 UI/UX 개발',
          '텍스트 게시판 및 이미지 게시판 등 설계, 개발 주도',
          '페이지별 CSR/SSR 최적화로 페이지별 성능 개선',
          '관리자/일반 사용자 권한별 분기 처리로 사용자 편의성 향상',
        ],
      },
      {
        category: 'Admin 기능 개발',
        items: [
          'Client 페이지에서 관리자 로그인 시 각 페이지에서 직접 수정 가능하도록 설계',
          'Editor.js 라이브러리 도입으로 직관적인 콘텐츠 편집 기능 구현',
        ],
      },
      {
        category: 'Backend 구축',
        items: [
          'Headless CMS인 Strapi를 이용한 백엔드 구축',
          '프로젝트 분석 후 DB Schema 설계',
        ],
      },
    ],
    highlights: ['웹사이트 리뉴얼', 'Headless CMS'],
    images: [{ src: dokdoThumbnail, isBlur: false }],
  },
  {
    id: 104,
    title: '3D 가상공간 마켓플레이스 웹사이트 개발(NFT)',
    period: '2022.04 ~ 2022.07',
    company: '지피다(주)',
    description:
      'NFT 및 3D 가상 공간을 결합한 마켓플레이스 웹사이트 개발. 고객 맞춤형 아이템을 활용해 가상 전시관을 제공하는 시스템입니다.',
    techStack: ['Next.js', 'Notion API', 'Figma', 'AWS EC2', 'Shapespark'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명, 3D 공간 제작자 1명 / 개인 기여도 40%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          'Figma Overlay를 활용한 디자인팀 협업 및 웹사이트 UI/UX 개발',
          'Desktop, Tablet, Mobile 반응형 UI/UX 개발',
          '사용자 맞춤형 3D공간 생성 및 수정 기능 개발',
          'SSR 개발로 페이지 응답 속도 향상',
          '3D 공간 내 공용 컴포넌트 개발',
        ],
      },
      {
        category: 'Backend 구축',
        items: [
          'Notion API를 이용한 백엔드 시스템 구축',
          'Notion Database 스키마 설계 및 DB 구축',
          'Notion Database를 이용한 데이터 관리 시스템 구축',
        ],
      },
    ],
    highlights: ['NFT', '3D 가상공간', 'SSR'],
    images: [{ src: olidaThumbnail, isBlur: true }],
  },
  {
    id: 105,
    title: '시각화&대시보드 솔루션',
    period: '2022.07 ~ 2022.08',
    company: '지피다(주)',
    description:
      '커스터마이징 가능한 대시보드와 시각화 차트 기능을 구현한 솔루션 프로젝트. 사용자 필요에 맞게 유연하게 구성할 수 있는 기능을 제공합니다.',
    techStack: [
      'Next.js',
      'Ant Design',
      'nivo-chart',
      'TanStack Query',
      'Prisma',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 30%',
    achievements: [
      {
        category: '차트 & 패널 개발',
        items: [
          'nivo 차트 라이브러리를 이용한 커스텀 패널 컴포넌트 개발',
          '각 패널에 대한 커스터마이징 기능 개발',
          '각 카드별 차트 선택 기능 및 API 연동으로 데이터 연계 효율성 향상',
        ],
      },
      {
        category: '토폴로지 기능',
        items: [
          '토폴로지 기능 개발 참여',
          'node & edge 좌표값 기반 토폴로지 커스터마이징',
          '커스터마이징 패널 CRUD API 개발',
        ],
      },
      {
        category: '성과',
        items: [
          'nivo 차트 기반 유연한 커스텀 패널 개발로 사용성 향상',
          '차트 선택 및 API 연동으로 데이터 연계 효율성 향상',
        ],
      },
    ],
    highlights: ['시각화', '대시보드', '커스텀 차트'],
    images: [{ src: naonThumbnail, isBlur: true }],
  },
  {
    id: 106,
    title: '불법촬영물 유포탐지 및 피해자 지원 시스템 고도화',
    period: '2022.09 ~ 2022.12',
    company: '지피다(주)',
    description:
      'AI기반 불법 촬영물 유포 탐지 및 피해자 지원 시스템 웹사이트 구축 프로젝트. 수사관의 효율적인 수사 진행과 관리, 피해자 지원을 포함한 종합 시스템입니다.',
    techStack: ['Next.js', 'TypeScript', 'Ant Design', 'NestJS'],
    role: '프론트엔드 1명, 백엔드 1명, 인프라 1명 / 개인 기여도 25%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          '기존 React → Next.js 마이그레이션 작업',
          'Figma 기반 디자인 협업 및 Ant Design + Next.js 활용 UI/UX 개발',
        ],
      },
      {
        category: 'Backend 개발',
        items: ['NestJS 기반 backend API 개발 참여'],
      },
      {
        category: '성과',
        items: [
          '기존 프로젝트 작업자가 아니었으나, 개발 지원으로 투입되어 프로젝트 성공적 마무리에 기여',
        ],
      },
    ],
    highlights: ['시스템 고도화', '마이그레이션'],
  },
  {
    id: 107,
    title: '현장조사 지원 시스템',
    period: '2021.08 ~ 2022.01',
    company: '지피다(주)',
    description:
      '건축물 현장조사 및 하자보수 관리를 위한 모바일앱 개발 프로젝트. 기존 수기 작업의 불편함을 개선하고, 오프라인 환경에서도 작업 가능하도록 설계했습니다.',
    techStack: [
      'React Native',
      'Redux',
      'Styled-Components',
      'PostgreSQL',
      'Strapi',
    ],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 50%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          'Figma Overlay를 활용한 디자인팀 협업 및 모바일 UI/UX 개발',
          '사용자 권한별 현장 데이터 구분 알고리즘 개발',
          'Redux를 이용한 상태관리 개발',
          '도면 내 ZOOM 기능 도입 및 상대 좌표값 알고리즘 개발',
        ],
      },
      {
        category: '오프라인 기능 설계',
        items: [
          '오프라인 환경 작업을 위한 LocalStorage 기반 데이터 관리 설계 및 개발',
          '데이터 유무 판단 알고리즘 개발로 오프라인 작업 효율성 향상',
          'LocalStorage 데이터 관리를 위한 DB 스키마 설계 참여',
        ],
      },
      {
        category: 'Backend & 배포',
        items: [
          'Strapi 기반 Headless CMS 백엔드 구축',
          '앱 ↔ 웹(관리자) 상호 소통을 위한 설계',
          'Android APK 파일 추출로 클라이언트 배포 진행',
        ],
      },
      {
        category: '성과',
        items: [
          '수기 작업 → 모바일 앱 전환으로 현장 작업자 편의성 대폭 향상',
          '오프라인 환경 작업 지원으로 작업 효율성 향상',
        ],
      },
    ],
    highlights: ['Mobile App', '오프라인 지원'],
    metric: '수기 작업 디지털화',
    images: [{ src: batangThumbnail, isBlur: true }],
  },
  {
    id: 108,
    title: 'AI기반 사이버아동 성범죄추적 및 탐지시스템 유지보수',
    period: '2021.07 ~ 2021.09',
    company: '지피다(주)',
    description:
      'AI기반 사이버아동 성범죄 탐지시스템의 React Native 프론트엔드 유지보수 및 개발 프로젝트. 디자인 리뉴얼과 1:1 챗봇시스템을 주도적으로 개발했습니다.',
    techStack: [
      'React Native',
      'Redux',
      'Styled-Components',
      'Firebase',
      'WebSocket',
    ],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 20%',
    achievements: [
      {
        category: 'Frontend 개발',
        items: [
          'Figma Overlay를 활용한 모바일 UI/UX 디자인 대대적 리뉴얼',
          '구글, 카카오 등 소셜 로그인 연동 개발',
          'Firebase를 이용한 모바일 디바이스 알림 기능 개발',
        ],
      },
      {
        category: '챗봇시스템 설계 및 개발',
        items: [
          'WebSocket을 이용한 채팅시스템 설계',
          '채팅 프로토콜 정의 및 설계',
          '1:1 챗봇시스템 개발',
        ],
      },
      {
        category: '성과',
        items: [
          '대대적인 디자인 리뉴얼로 사용자 인터페이스 및 경험 향상',
          'Firebase 모바일 알림 기능으로 사용성 향상',
          '1:1 챗봇시스템 개발로 사용자 편의성 개선',
        ],
      },
    ],
    highlights: ['디자인 리뉴얼', '챗봇시스템'],
    metric: 'WebSocket 챗봇 개발',
    images: [{ src: sosThumbnail, isBlur: true }],
  },
];

export const totalProjects = mainProjects.length + etcProjects.length;

export const education = {
  university: '가천대학교',
  major: '컴퓨터공학과',
  period: '2015.03 ~ 2021.02',
  status: '졸업',
  gpa: '3.4 / 4.5',
};

export const certifications = [
  {
    name: '정보처리기사',
    date: '2025.12',
    type: '자격증',
  },
  {
    name: '프로그래밍기능사',
    date: '2014.09',
    type: '자격증',
  },
];
