// 이미지 import (Vite가 빌드 시 올바르게 처리하도록)
import apec2025Thumbnail from '@/assets/APEC2025_thumbnail.png';
import apchubThumbnail from '@/assets/apchub_thumbnail.png';
import cybercrimeThumbnail from '@/assets/cybercrime_thumbnail.png';
import incheonThumbnail from '@/assets/incheon_thumbnail.png';
import locationThumbnail from '@/assets/location_thumbnail.jpg';
import apexescThumbnail from '@/assets/apexesc_thumbnail.png';
import dokdoThumbnail from '@/assets/dokdo_thumbnail.png';
import olidaThumbnail from '@/assets/olida_thumbnail.png';
import naonThumbnail from '@/assets/naon_thumbnail.png';
import batangThumbnail from '@/assets/batang_thumbnail.png';
import sosThumbnail from '@/assets/sos_thumbnail.jpeg';

export interface Project {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
  techStack: string[];
  role: string;
  achievements: string[];
  highlights: string[];
  liveUrl?: string;
  thumbnail?: string;
  isBlur?: boolean;
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
  introduction: `보안 시스템, 관제 솔루션, 업무 자동화 등 다양한 도메인에서 React/Next.js 기반 프론트엔드 개발을 해왔습니다. 성능 최적화(90% 개선), 실시간 시스템 구축 등 기술적 챌린지를 해결하며, 팀 협업을 통해 실질적인 비즈니스 가치를 만들어내는 개발자입니다.`,
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

export const experiences = [
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
      '2025 APEC 정상회의 행사장 통합 관제 시스템. Cesium 3D GIS 기반으로 CCTV, 로봇 등 장비를 실시간 모니터링하고 AI 이벤트 감지 시 자동 스트리밍을 제공하는 관제 솔루션.',
    techStack: [
      'React',
      'TypeScript',
      'Cesium',
      'Zustand',
      'TanStack Query',
      'WebSocket',
      'HLS.js',
    ],
    role: '프론트엔드 엔지니어 6명 / 개인 기여도 30%',
    achievements: [
      'Cesium 3D GIS 지도 위 장비별 Entity 노드 시스템 구축 및 CCTV 시야각(FOV) 시각화 개발',
      'WebSocket + HLS.js 기반 AI 이벤트 감지 시 실시간 스트리밍 자동 연동 로직 구현',
      'Bounding Box 기반 객체 탐지 결과 영상 오버레이 기능 개발',
      'Zustand 기반 전역 상태 관리 스토어 9개 설계 및 커스텀 훅 9개 개발',
      '관제 요원의 상황 인지 속도 개선 및 즉각적 대응 체계 구축',
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
      '데이터 급증으로 인한 성능 저하 문제 해결. ElasticSearch 도입 및 DB 마이그레이션을 통한 시스템 안정화.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Ant Design',
      'ElasticSearch',
      'MySQL',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      'Python 검색 알고리즘을 ElasticSearch로 전환하여 응답시간 90% 단축',
      'React → Next.js 마이그레이션 및 전체 UI/UX 리뉴얼',
      'MongoDB → MariaDB 마이그레이션으로 데이터 관리 효율 향상',
      'Java SpringBoot → Next.js API로 백엔드 마이그레이션 진행',
      '검색 시 서비스 중단 현상 해결 및 시스템 안정성 확보',
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
      '국제공항 내 보안 업무 개선을 위한 시스템 고도화. 공사 결재라인 커스터마이징 기능 개발 및 DB 마이그레이션을 통한 성능 최적화.',
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
      '공사 프로세스 기반 커스텀 결재라인 설계 및 개발 주도 (FLEX 결재 벤치마킹)',
      'Next.js 14 Server Actions 활용한 풀스택 개발 및 공용 CRUD 라이브러리 개발',
      'DB 설계 및 스키마 작성, 결재 알림 시스템 플로우 설계',
      'JWT 토큰 + 쿠키 기반 인증 시스템 구현',
      '정적 결재라인에서 커스텀 결재라인으로 전환하여 업무 효율성 대폭 향상',
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
      'Excel 기반 세무 작업을 웹 기반 자동화 시스템으로 전환. PDF 데이터 자동 추출 및 통계 자동 계산 기능 구현.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AWS EC2'],
    role: '프론트엔드 엔지니어 2명 / 개인 기여도 50%',
    achievements: [
      '원천징수부 PDF 파일 데이터 자동 추출 및 DB화 알고리즘 개발',
      'Excel 수식을 웹 기반 자동 계산 알고리즘으로 전환하여 작업 시간 80% 이상 단축',
      'Prisma + PostgreSQL 기반 DB 스키마 설계 및 API 개발',
      'AWS EC2 + PM2 무중단 배포 환경 구축',
      '세무 작업 정확성 보장 및 업무 효율화 달성',
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

export const etcProjects: Project[] = [
  {
    id: 101,
    title: '위치정보 사업자 관리 백오피스',
    period: '2025.02 ~ 2025.03',
    company: '에이치디에스(주)',
    description:
      '위치기반 서비스 사업자를 위한 관리자 백오피스 시스템. 프로젝트 마감을 위해 서포트로 투입하여 앱 배포 관리 및 임시 사용자 관리 기능 개발 담당.',
    techStack: ['React', 'TypeScript', 'TanStack Query', 'Ant Design', 'Vite'],
    role: '프론트엔드 6명 / 기여도 15%',
    achievements: [
      'APK/IPA 바이너리 파일 업로드 및 버전 관리 기능 구현',
      '기획 변경에 따른 리팩토링 수행 (코드량 40% 감소)',
      '삭제 시 빈 페이지 방지를 위한 페이지네이션 오프셋 자동 보정 로직 구현',
      '변경된 필드만 서버에 전송하는 최적화 적용',
    ],
    highlights: ['백오피스', '앱 배포 관리'],
    thumbnail: locationThumbnail,
    isBlur: false,
  },
  {
    id: 102,
    title: '자사 웹사이트 개발',
    period: '2023.01 ~ 2023.03',
    company: '지피다(주)',
    description:
      '자사 웹사이트 전면 리뉴얼. Next.js와 Notion API를 이용해 현대적인 디자인과 클라우드 기반 인프라로 전환하여 관리 효율성과 성능 개선.',
    techStack: ['Next.js', 'Notion API', 'Figma'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 50%',
    achievements: [
      'Next.js CSR, SSR 등 페이지별 최적 렌더링 도입',
      'Notion API를 이용한 웹사이트 데이터 연동 개발',
      'Notion Database 기반 콘텐츠 관리 시스템(CMS) 구축',
      '비개발자도 쉽게 관리할 수 있는 관리자 시스템으로 관리 효율성 향상',
    ],
    highlights: ['웹사이트 리뉴얼', 'Notion CMS'],
    liveUrl: 'https://apexesc.com/',
    thumbnail: apexescThumbnail,
    isBlur: false,
  },
  {
    id: 103,
    title: '독도의용수비대 기념사업회 웹사이트',
    period: '2022.01 ~ 2022.04',
    company: '지피다(주)',
    description:
      '독도의용수비대 기념사업회 웹사이트를 최신 기술과 인터페이스로 리뉴얼. 반응형 UI/UX 및 관리자 기능 개발.',
    techStack: ['Next.js', 'Strapi', 'SASS', 'Figma'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 50%',
    achievements: [
      'Desktop, Tablet, Mobile 반응형 UI/UX 개발',
      '텍스트 게시판 및 이미지 게시판 등 설계, 개발 주도',
      'Editorjs 도입으로 Client 페이지 내 직관적인 Admin 기능 구현',
      'Headless CMS인 Strapi를 이용한 백엔드 구축',
    ],
    highlights: ['웹사이트 리뉴얼', 'Headless CMS'],
    thumbnail: dokdoThumbnail,
    isBlur: false,
  },
  {
    id: 104,
    title: '3D 가상공간 마켓플레이스 웹사이트 개발(NFT)',
    period: '2022.04 ~ 2022.07',
    company: '지피다(주)',
    description:
      'NFT 및 3D 가상 공간을 결합한 마켓플레이스 웹사이트 개발. 고객 맞춤형 아이템을 활용해 가상 전시관을 제공하는 시스템.',
    techStack: ['Next.js', 'Notion API', 'Figma', 'AWS EC2'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명, 3D 공간 제작자 1명 / 개인 기여도 40%',
    achievements: [
      'Desktop, Tablet, Mobile 반응형 UI/UX 개발',
      '사용자 맞춤형 3D공간 생성 및 수정 기능 개발',
      'SSR 개발로 페이지 응답 향상',
      'Notion API 기반 백엔드 시스템 및 DB 스키마 설계',
    ],
    highlights: ['NFT', '3D 가상공간', 'SSR'],
    thumbnail: olidaThumbnail,
    isBlur: true,
  },
  {
    id: 105,
    title: '시각화&대시보드 솔루션',
    period: '2022.07 ~ 2022.08',
    company: '지피다(주)',
    description:
      '커스터마이징 가능한 대시보드와 시각화 차트 기능 구현. 사용자 필요에 맞게 유연하게 구성할 수 있는 기능 제공.',
    techStack: [
      'Next.js',
      'Ant Design',
      'nivo-chart',
      'TanStack Query',
      'Prisma',
    ],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 30%',
    achievements: [
      'nivo 차트 라이브러리를 이용한 커스텀 패널 컴포넌트 개발',
      '토폴로지 기능 개발 및 node & edge 좌표값 기반 커스터마이징',
      '커스터마이징 패널 CRUD API 개발',
      '각 카드별 차트 선택 기능 및 API 연동으로 데이터 연계 효율성 향상',
    ],
    highlights: ['시각화', '대시보드', '커스텀 차트'],
    thumbnail: naonThumbnail,
    isBlur: true,
  },
  {
    id: 106,
    title: '불법촬영물 유포탐지 및 피해자 지원 시스템 고도화',
    period: '2022.09 ~ 2022.12',
    company: '지피다(주)',
    description:
      'AI기반 불법 촬영물 유포 탐지 및 피해자 지원 시스템 웹사이트 구축. 수사관의 효율적인 수사 진행과 관리를 위한 종합 시스템.',
    techStack: ['Next.js', 'TypeScript', 'Ant Design', 'NestJS'],
    role: '프론트엔드 1명, 백엔드 1명, 인프라 1명 / 개인 기여도 25%',
    achievements: [
      'React → Next.js 마이그레이션 작업',
      'Figma, Ant Design, Next.js를 이용한 UI/UX 개발',
      'NestJS 기반 backend API 개발 참여',
    ],
    highlights: ['시스템 고도화', '마이그레이션'],
  },
  {
    id: 107,
    title: '현장조사 지원 시스템',
    period: '2021.08 ~ 2022.01',
    company: '지피다(주)',
    description:
      '건축물 현장조사 및 하자보수 관리를 위한 모바일앱 개발. 오프라인 환경에서도 작업 가능하도록 설계.',
    techStack: [
      'React Native',
      'Redux',
      'Styled-Components',
      'PostgreSQL',
      'Strapi',
    ],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 50%',
    achievements: [
      '도면 내 ZOOM 기능 도입 및 상대 좌표값 알고리즘 개발',
      '오프라인 환경 작업을 위한 LocalStorage 기반 데이터 관리 설계 및 개발',
      '데이터 유무 판단 알고리즘 개발로 오프라인 작업 효율성 향상',
      'Strapi를 이용한 Headless CMS 백엔드 구축',
    ],
    highlights: ['Mobile App', '오프라인 지원'],
    thumbnail: batangThumbnail,
    isBlur: true,
  },
  {
    id: 108,
    title: 'AI기반 사이버아동 성범죄추적 및 탐지시스템 유지보수',
    period: '2021.07 ~ 2021.09',
    company: '지피다(주)',
    description:
      'AI기반 사이버아동 성범죄 탐지시스템의 React Native 프론트엔드 유지보수 및 개발.',
    techStack: ['React Native', 'Redux', 'Styled-Components', 'Firebase'],
    role: '프론트엔드 엔지니어 2명, 디자이너 1명 / 개인 기여도 20%',
    achievements: [
      '모바일 UI/UX 디자인 대대적 리뉴얼 개발',
      '구글, 카카오 등 소셜 로그인 연동 개발',
      'Firebase를 이용한 모바일 알림 기능 개발',
      '웹소켓 기반 1:1 챗봇시스템 설계 및 개발',
    ],
    highlights: ['디자인 리뉴얼', '챗봇시스템'],
    thumbnail: sosThumbnail,
    isBlur: true,
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
