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
  title: '문제를 원리부터 파고들어 해결하는 프론트엔드 개발자',
  email: 'balam14774@gmail.com',
  phone: '010-3383-6553',
  github: 'https://github.com/Kim-MJun',
  keywords: ['문제 해결', '원리 탐구', '재사용 설계'],
  heroSkills: [
    'React',
    'Next.js',
    'TypeScript',
    'Zustand',
    'TanStack Query',
    'Tailwind CSS',
    'Sass',
    'Node.js',
    'PostgreSQL',
    'ElasticSearch',
  ],
  introduction: `문제를 만나면 원리부터 파고들어 해결하는 React/Next.js 프론트엔드 개발자입니다. 라이브러리에 의존하기보다 동작 원리를 이해하고 직접 구현하며, 공용 라이브러리와 커스텀 훅 설계로 재사용성을 높여왔습니다.`,
  aboutDescription: `공항 보안, 사이버 수사, 세무 자동화 등 다양한 도메인에서 실사용자가 매일 쓰는 시스템을 기획부터 개발·운영까지 담당했습니다. 프론트엔드에 머물지 않고 서버·DB까지 전체 흐름을 이해하며, ORM을 그대로 쓰기보다 원리를 이해하려 공용 라이브러리를 직접 만드는 등 문제의 본질을 파고드는 것을 지향합니다.`,
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
    description:
      "국책과제 'AI기반 전영역 경비안전 기술' 프론트엔드 개발 — 실시간 관제 시스템 및 백오피스",
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
    description: '소프트웨어 사업부 소속, 공공·보안 도메인의 실사용 시스템 및 웹 서비스 개발',
    projects: [
      'OO국제공항 사이버보안 자동화 포탈 고도화',
      '사이버범죄 연관분석 시스템 고도화',
      '법인세무 자동화 시스템 솔루션',
      'APC-Hub 홈페이지',
      '자사 웹사이트 개발',
      '불법촬영물 유포탐지 및 피해자 자원 시스템 고도화',
      '시각화&대시보드 솔루션 프로젝트',
      '3D 가상공간 마켓플레이스 웹사이트 개발(NFT)',
      '독도의용수비대 기념사업회 웹사이트',
      '현장조사 지원 시스템',
      'AI기반 사이버아동 성범죄추적 및 탐지시스템 유지보수',
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
      'APEC 정상회의 통합 관제 시스템. Cesium 3D GIS 지도 위에서 CCTV·로봇 등 장비(운영 기준 최대 100대)를 실시간 모니터링하고, AI 이벤트 감지 시 HLS 영상 스트리밍과 연동하는 구조를 구현했습니다. 공통 훅·상태관리 아키텍처 설계와 실시간 데이터 처리를 담당했습니다.',
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
        category: '실시간 데이터 처리 & 스트리밍',
        items: [
          'WebSocket 2채널(이벤트 스트림·바운딩박스)로 실시간 데이터를 수신하는 커스텀 훅 직접 구현 (정상/비정상 종료 구분, 비정상 시 3초 간격 최대 5회 재연결, 언마운트 시 정리)',
          'HLS.js 저지연 옵션(lowLatencyMode)으로 CCTV 실시간 영상 재생, 관제에 중요한 지연 최소화',
          'WebSocket으로 수신한 AI 탐지 결과를 Canvas 2D로 영상 위에 실시간 오버레이 (백엔드 기준 좌표를 실제 영상 크기에 맞춰 스케일링, requestAnimationFrame으로 렌더)',
        ],
      },
      {
        category: '3D GIS 시각화',
        items: [
          'Cesium 3D 지도 위 장비별 Entity 노드 시스템 설계 및 구현',
          'CCTV 시야각(FOV)을 방위각·화각·거리로 계산해 부채꼴 폴리곤으로 시각화, 위도에 따른 경도 거리 왜곡을 cosine 보정으로 해결',
          'CallbackProperty로 이벤트 장비에 실시간 애니메이션 적용, 관제 요원 상황 인지 속도 향상',
        ],
      },
      {
        category: '아키텍처 & 상태 관리',
        items: [
          '커스텀 훅을 관심사별(API 호출·UI 로직·외부 라이브러리 통합) 3계층 구조로 설계, WebSocket·Cesium 통합 등 핵심 훅을 직접 구현',
          'Zustand 9개 스토어와 TanStack Query로 클라이언트 상태와 서버 상태를 분리하는 아키텍처 구현',
          'WebSocket 실시간 이벤트를 버퍼에 모았다가 반영해 화면 갱신 안정성 확보',
        ],
      },
      {
        category: '성과',
        items: [
          '레퍼런스 없는 관제 시스템의 프론트엔드 아키텍처를 신규 설계 (커밋 기여 약 45%, 코드 8,600여 줄)',
          '실시간 데이터 수신·재연결·정리를 캡슐화한 훅으로 여러 화면에서 재사용',
          '영상 위 AI 탐지 오버레이와 3D 지도 시각화로 관제 요원의 상황 인지 속도 개선',
        ],
      },
    ],
    highlights: ['3D GIS 시각화', '실시간 스트리밍', 'AI 탐지 오버레이'],
    metric: 'APEC 정상회의 관제',
    images: [{ src: apec2025Thumbnail, isBlur: true }],
  },
  {
    id: 2,
    title: '사이버범죄 연관분석 시스템 고도화',
    period: '2023.09 ~ 2024.01',
    company: '지피다(주)',
    description:
      '수사관이 실제 수사에 사용하는 사이버범죄 연관분석 시스템 고도화. 데이터 급증으로 검색이 평균 8~9초(최대 30초 이상, 서비스 중단)까지 지연되던 문제를, ElasticSearch 검색 시스템 구축으로 1초 이내로 개선했습니다. 실사용 후 유지보수까지 담당했습니다.',
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
        category: 'ElasticSearch 검색 최적화',
        items: [
          '기존 파이썬 LIKE 검색이 전체 스캔으로 평균 8~9초(다운 시 30초 이상) 소요되던 것을, ElasticSearch 역인덱스 기반 검색으로 1초 이내로 개선 (네트워크탭 실측 기준 약 90% 단축)',
          'bool 쿼리로 검색 대상 필터·삭제 데이터 제외·키워드 전문검색·날짜 범위 등 여러 조건을 조합하는 검색 로직 설계',
          'Logstash로 MariaDB 데이터를 ElasticSearch에 증분 색인하는 파이프라인 위에서 검색 쿼리 작성 담당',
          '사용자 입력의 ElasticSearch 예약 문자를 이스케이프 처리해 쿼리 파싱 오류 방지',
        ],
      },
      {
        category: '연관분석 그래프 시각화',
        items: [
          '검색 결과를 사건·단서(계좌·전화 등) 노드와 링크 구조로 가공해 관계망 그래프로 시각화 (react-force-graph 기반)',
          'nodeCanvasObject로 Canvas 2D를 직접 사용해 노드 아이콘·상태 뱃지·펼침 버튼을 커스텀 드로잉',
          '노드 규모별 3단계 렌더링 최적화: 250개 초과 시 정적 이미지 대체, 30개 이상 시 1depth만 표시 후 클릭 시 동적 확장, 노드 수에 따라 D3 force 파라미터 동적 조정',
        ],
      },
      {
        category: '데이터 정형화 & 보안',
        items: [
          '정형화된 데이터를 기반으로 통합검색 쿼리 설계 (MongoDB→MariaDB 마이그레이션은 팀 협업으로 진행)',
          '계좌·전화번호 등 민감정보는 암호화 저장된 값을 복호화·재암호화하여 검색 처리',
          '비즈니스 API를 Next.js로 통합하고, 검색 계층은 ElasticSearch로 분리',
        ],
      },
      {
        category: '성과',
        items: [
          '검색 응답시간을 8~9초에서 1초 이내로 개선해 서비스 중단 문제 해소 (네트워크탭 실측)',
          '관계형 데이터를 직관적으로 탐색하는 그래프 시각화로 수사 효율 향상',
          '실사용자(수사관) 대상 운영 및 유지보수까지 담당',
        ],
      },
    ],
    highlights: ['검색 90% 단축', 'ElasticSearch', '그래프 시각화'],
    metric: '검색속도 90% 단축',
    images: [{ src: cybercrimeThumbnail, isBlur: true }],
  },
  {
    id: 3,
    title: 'OO국제공항 사이버보안 자동화 포탈 고도화',
    period: '2024.02 ~ 2024.10',
    company: '지피다(주)',
    description:
      '공항 여러 부서 수십 명이 사용하는 사이버보안 관리 포탈. 화면 98개·DB 테이블 30개 규모의 시스템으로, 부서별 결재 프로세스 커스터마이징·통합검색·인증을 구축했습니다. 보안 감사 기준 충족 후 실운영 및 유지보수까지 담당했습니다.',
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
        category: '커스텀 결재 시스템',
        items: [
          '업무 종류마다 결재 단계·담당자가 모두 다른 문제를, 결재선을 하드코딩하지 않고 데이터로 정의하는 구조로 설계 (결재 상태 11종)',
          '처리·협조처리를 동시에 진행하는 병렬 결재 지원 (양쪽 모두 승인돼야 다음 단계로 진행)',
          '반려 시 해당 단계만 초기화하고 이전 승인 상태는 유지하는 재상신 로직 구현',
          '결재 진행에 따른 알림·메일 전송 플로우 설계',
        ],
      },
      {
        category: '공용 CRUD 라이브러리 (QueryManager)',
        items: [
          'ORM에 의존하기보다 원리를 직접 이해하고자, mysql2 위에 Prisma API를 벤치마킹한 공용 CRUD 라이브러리를 직접 설계',
          '메서드 체이닝 쿼리 빌더(하위)와 고수준 CRUD API(상위)를 2계층으로 분리',
          '통합검색 모듈에서 13개 도메인 테이블을 단일 인터페이스로 처리',
        ],
      },
      {
        category: '인증 & 풀스택',
        items: [
          'JWT + httpOnly 쿠키 기반 인증 구현 (토큰에 IP·User-Agent 바인딩, 5회 실패 시 계정 잠금, IP 허용 정책)',
          'Next.js 14 Server Actions로 별도 백엔드 서버 없이 풀스택 개발',
          '공통 커스텀 훅 설계로 인증·네비게이션 훅을 80개 이상 화면에서 재사용',
          'DB 스키마 설계 및 결재 플로우 설계',
        ],
      },
      {
        category: '성과',
        items: [
          '부서마다 다른 결재 프로세스를 데이터 기반 구조로 풀어, 수작업 결재 과정과 소요시간 단축',
          '별도 백엔드 서버 없이 프론트엔드가 풀스택으로 커버하는 구조로 인프라 비용 절감',
          'JWT 기반 인증과 IP 정책으로 외부 보안 점검 기준 충족',
          '화면 98개 규모의 시스템을 실사용자 대상으로 운영·유지보수',
        ],
      },
    ],
    highlights: ['병렬 결재 설계', 'CRUD 라이브러리', '엔터프라이즈 보안'],
    metric: '화면 98개 · 실운영',
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
      '세무 담당자가 실제 업무에 사용하는 법인세 자동화 시스템. 기존 엑셀 수작업을, 원천징수부 PDF를 올리면 급여 데이터를 자동 추출·정형화하는 웹 시스템으로 전환했습니다. 기획부터 DB 설계·개발·배포까지 담당했고, 실사용 후 유지보수까지 경험했습니다.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AWS EC2'],
    role: '프론트엔드 엔지니어 2명 / 개인 기여도 50%',
    achievements: [
      {
        category: 'PDF 데이터 추출 (비정형 → 정형)',
        items: [
          'pdfjs-dist로 원천징수부 PDF에서 텍스트를 추출하고, 키워드 위치를 기준점으로 값을 읽는 규칙 기반 파싱 알고리즘 직접 개발',
          '클라이언트가 제공한 PDF 약 100종 중 80%는 동일 양식, 나머지 20% 변종을 하나씩 예외처리해 정확도 90% 이상 달성',
          '위치·순서가 보장되지 않는 비정형 텍스트를, 다중 정규식과 폴백 인덱스로 정형 DB 레코드로 변환',
        ],
      },
      {
        category: 'DB 스키마 설계',
        items: [
          '양식마다 급여 시작 월이 달라(1월/12월/중간 입사 등) 순서 보장이 안 되는 문제를, 월별 컬럼 분리 방식으로 설계해 해결',
          '집계가 필요한 급여는 컬럼으로, 구조가 유동적인 세무 계산 결과는 Json 타입으로 저장하는 혼합 전략 적용',
          'Prisma + PostgreSQL 기반 스키마 설계 및 API 개발',
        ],
      },
      {
        category: '세법 도메인 로직',
        items: [
          '주민번호에서 생년월일을 파싱해 만 나이를 계산하고, 청년·노인 세액공제 대상을 자동 분류하는 로직 구현',
          '경계 나이(30·60세)는 생일 월 기준으로 공제율이 바뀌도록 월 단위 전환 처리',
          '추출한 급여 데이터 기반 인원·금액 통계 자동 계산 및 권한별 접근 제어 구현',
        ],
      },
      {
        category: '성과',
        items: [
          '세무 담당자 실사용 결과 업무 시간 약 80% 감소 (담당자 피드백 기준)',
          '엑셀 수식 기반 수작업을 웹 자동 계산으로 전환해 정확성과 효율 향상',
          'AWS EC2 + PM2 기반 배포 환경 구성에 참여, 실사용 후 유지보수까지 담당',
        ],
      },
    ],
    highlights: ['작업 시간 80% 단축', 'PDF 규칙 기반 파싱', '세법 도메인 로직'],
    metric: '작업시간 80% 단축',
    images: [
      { src: sokhamThumbnail, isBlur: false },
      { src: sokhamTwo, isBlur: false },
    ],
  },
  {
    id: 5,
    title: '아·태 사이버범죄 역량강화 허브(APC-Hub) 홈페이지',
    period: '2022.10 ~ 2024.10',
    company: '지피다(주)',
    description:
      'B2G 사업으로 진행한 아·태 사이버범죄 역량강화 허브 홈페이지. 단순 홍보 사이트가 아니라, 로그인 기반의 온라인 교육 시스템(LMS)을 코스 수강부터 수료증 발급까지 구현했습니다. 약 2년간 지속적으로 개발·고도화하며 실서비스를 운영했습니다.',
    techStack: ['Next.js', 'SASS', 'MariaDB', 'Strapi', 'Figma'],
    role: '프론트엔드 엔지니어 3명, 디자이너 1명 / 개인 기여도 40%',
    achievements: [
      {
        category: '온라인 교육 시스템(LMS) 구현',
        items: [
          'plyr-react 기반 영상 강의 플레이어 구현 (mp4·YouTube 재생, 화질 선택, 자막, 재생 제어)',
          '영상 강의와 슬라이드 강의(react-pdf 미리보기 + TTS) 2종 콘텐츠 지원',
          '코스의 강의 순서 제어 및 수강 상태(미시작·진행중·완료) 추적 로직 구현',
          '영상·슬라이드를 끝까지 봐야 다음 단계로 진행되는 수강 완료 게이트 구현',
          '강의 완료 → 퀴즈 → 설문 → 수료 처리로 이어지는 수강 흐름 전체 설계',
        ],
      },
      {
        category: '퀴즈 · 설문 · 수료증',
        items: [
          '코스별 퀴즈 구현: 문제 순서와 보기 순서를 랜덤 배치하고, 섞인 보기 기준으로 정답을 재계산해 채점',
          '객관식·주관식을 함께 지원하는 설문 기능 구현',
          'html2canvas + jsPDF로 수료증 화면을 PDF로 생성·출력하는 기능 구현',
        ],
      },
      {
        category: '렌더링 전략 & 인증',
        items: [
          '페이지 성격별로 렌더링 방식 분리: 로그인·학습 페이지는 SSR, 홍보성 페이지는 ISR(60초), 상세 페이지는 동적 SSG(fallback)',
          'NextAuth 기반 로그인·세션 관리 및 Strapi CMS API 연동',
          '3D 디지털 쇼룸을 클라이언트 전용(dynamic import)으로 분리 로드',
        ],
      },
      {
        category: '성과',
        items: [
          '홍보 사이트가 아닌 완결된 온라인 교육 서비스를 코스 수강부터 수료증 발급까지 구현',
          '약 2년간 온라인 교육 기능을 지속적으로 개편·고도화 (슬라이드 강의 등 신규 콘텐츠 추가)',
          'B2G 실서비스로 배포·운영, 프론트엔드 최다 기여자로 참여',
        ],
      },
    ],
    highlights: ['LMS 전체 구현', '실서비스 2년 운영', 'B2G 사업'],
    metric: 'B2G · LMS 운영',
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
