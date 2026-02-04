// 이미지 import (Vite가 빌드 시 올바르게 처리하도록)
import apec2025Thumbnail from '@/assets/APEC2025_thumbnail.png';
import apchubThumbnail from '@/assets/apchub_thumbnail.png';
import cybercrimeThumbnail from '@/assets/cybercrime_thumbnail.png';
import incheonThumbnail from '@/assets/incheon_thumbnail.png';

export const personalInfo = {
  name: '김민준',
  nameEn: 'Kim Minjun',
  title: '웹 프론트엔드 개발자',
  email: 'balam14774@gmail.com',
  phone: '+82 10-3383-6553',
  github: 'https://github.com/Kim-MJun',
  keywords: ['열정', '소통', '유연함'],
  introduction: `React, Next.js, TypeScript 기반의 대규모 보안 시스템 및 데이터 분석 플랫폼 구축 경험이 있습니다. 문제 해결과 성능 최적화에 강점을 가지고 있으며, 협업과 커뮤니케이션을 통해 프로젝트 완성도를 높여왔습니다.`,
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
    { name: 'SCSS/SASS', level: 90 },
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

export const experiences = [
  {
    company: '에이치디에스(주)',
    position: 'FE 개발 연구원',
    period: '2024.11 ~ 재직중',
    type: '계약직',
    description:
      '국책과제 담당 기업부설연구원 소속 연구원으로 AI기반 전영역 경비안전 기술 개발 진행',
    projects: [
      'APEC 2025 통합 관제 시스템',
      'APEC 2025 경비안전 관제 백오피스',
      '위치정보 사업자 관리 백오피스',
    ],
  },
  {
    company: '지피다(주)',
    position: '개발 사원',
    period: '2021.04 ~ 2024.10',
    type: '정규직',
    description:
      '자사 소프트웨어 사업부 개발 2팀 소속 팀원으로 소프트웨어 연구 및 웹사이트 개발 진행',
    projects: [
      '인천국제공항 사이버보안 자동화 포탈 고도화',
      '사이버범죄 연관분석 시스템 고도화',
      '법인세무 자동화 시스템 솔루션',
      'APC-Hub 홈페이지',
      '자사 웹사이트 개발',
      '불법촬영물 유포탐지 및 피해자 자원 시스템 고도화',
      '나온웍스 시각화&대시보드 솔루션 프로젝트',
      '3D 가상공간 마켓플레이스 웹사이트 개발(NFT)',
      '독도의용수비대 기념사업회 웹사이트',
      '바탕색ENG 현장조사지원시스템',
      ' AI기반 사이버아동 성범죄추적 및 탐지시스템 유지보수',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'APEC 2025 통합 관제 시스템',
    period: '2025.02 ~ 2025.09',
    company: '에이치디에스(주)',
    description:
      '2025 APEC 정상회의 행사장 통합 관제 시스템 프론트엔드 개발. Cesium 기반 3D GIS 지도 위에 CCTV, 로봇 등 장비를 실시간으로 모니터링하고, AI 이벤트 감지 시 즉각적인 알림과 스트리밍을 제공하는 관제 솔루션.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Cesium',
      'Zustand',
      'TanStack Query',
      'WebSocket',
      'HLS.js',
      'SCSS',
    ],
    role: '프론트엔드 엔지니어 6명 / 개인 기여도 30%',
    achievements: [
      'Cesium 기반 3D GIS 지도 위 장비별 Entity 노드 시스템 구축',
      'CCTV 시야각(Field of View) 시각화 컴포넌트 개발',
      'WebSocket 기반 AI 이벤트 감지 실시간 스트리밍 자동 연동 로직 개발',
      'HLS.js를 활용한 장비별 실시간 영상 스트리밍 구현',
      'Zustand 기반 전역 상태 관리 스토어 9개 설계',
    ],
    highlights: ['3D GIS', '실시간 스트리밍', 'AI 이벤트 감지'],
    thumbnail: apec2025Thumbnail,
    isBlur: true,
  },
  {
    id: 2,
    title: '사이버범죄 연관분석 시스템 고도화',
    period: '2023.09 ~ 2024.01',
    company: '지피다(주)',
    description:
      '기존 서비스인 사이버범죄 연관분석 시스템의 데이터 기하급수적 증가로 인한 성능 저하 문제 해결. 검색 알고리즘 및 성능 개선 작업 수행.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Ant Design',
      'Python',
      'MySQL',
      'ElasticSearch',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      'React → Next.js 마이그레이션 작업',
      'Python 검색 알고리즘을 ElasticSearch로 전환하여 응답시간 90% 이상 단축',
      'Java SpringBoot → Next.js API로 마이그레이션',
      'MongoDB → MariaDB로 마이그레이션',
      '폐쇄망 환경 배포 및 유지보수',
    ],
    highlights: ['성능 최적화 90%', 'ElasticSearch', '마이그레이션'],
    thumbnail: cybercrimeThumbnail,
    isBlur: true,
  },
  {
    id: 3,
    title: '인천국제공항 사이버보안 자동화 포탈 고도화',
    period: '2024.02 ~ 2024.10',
    company: '지피다(주)',
    description:
      '인천국제공항 내 보안 유지 업무 개선 및 보안요구 사항을 효과적으로 처리하기 위한 보안 시스템 기능 개선 및 유지보수 프로젝트.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Ant Design',
      'Node.js',
      'MariaDB',
      'Docker',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      '공사 프로세스 기반 커스텀 결재라인 설계 및 개발 주도',
      '결재 알림 및 메일 전송 기능 개발',
      'JWT 토큰과 쿠키를 이용한 유저 인증 기능 개발',
      '공용 CRUD lib 개발 (Prisma 벤치마킹)',
      'DB 설계 및 스키마 작성',
    ],
    highlights: ['커스텀 결재라인', '풀스택 개발', '폐쇄망 배포'],
    thumbnail: incheonThumbnail,
    isBlur: true,
  },
  {
    id: 4,
    title: '법인세무 자동화 시스템 솔루션',
    period: '2023.05 ~ 2023.09',
    company: '지피다(주)',
    description:
      '기존 Excel로 진행하던 세무 업무를 자동화하여 작업 효율성 향상과 작업 시간을 크게 줄이는 것을 목표로 한 프로젝트.',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'AWS EC2',
      'PM2',
    ],
    role: '프론트엔드 엔지니어 2명 / 개인 기여도 50%',
    achievements: [
      '원천징수부 PDF 파일 업로드 시 필요 데이터만 추출해 자동 DB화 로직 개발',
      'Excel → 자동 계산 알고리즘 개발로 작업 시간 80% 이상 단축',
      '관리자와 작업자 간 권한별 기능 및 페이지 접근 알고리즘 개발',
      'ER다이어그램 및 Prisma Schema를 이용한 DB 스키마 설계',
      'AWS EC2 서버의 PM2를 사용한 무중단 배포',
    ],
    highlights: ['작업 시간 80% 단축', 'PDF 자동 파싱', '무중단 배포'],
  },
  {
    id: 5,
    title: '아·태 사이버범죄 역량강화 허브(APC-Hub) 홈페이지',
    period: '2021.12 ~ 2023.12',
    company: '지피다(주)',
    description:
      'B2G 사업으로 아시아·태평양 사이버범죄 역량강화 허브 홈페이지 개발. 3년간 지속적인 고도화 작업 진행.',
    techStack: ['Next.js', 'SASS', 'MariaDB', 'Strapi', 'Figma'],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      '비대면 온라인 교육 시스템 개발 (plyr-react 활용)',
      '교육 완료 후 퀴즈, 설문조사 기능 및 수료증 발급 기능 개발',
      '비대면 온라인 교육 수강 부정방지 로직 개발',
      'Google reCAPTCHA를 이용한 보안 인증 시스템 개선',
      '폐쇄망 환경 배포 및 유지보수',
    ],
    highlights: ['온라인 교육 시스템', '실서비스 운영', 'B2G 사업'],
    liveUrl: 'https://apc-hub.org/',
    thumbnail: apchubThumbnail,
    isBlur: false,
  },
];

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
