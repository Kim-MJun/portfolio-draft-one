import type { Project } from '@/data/resume';
import {
  getUniqueCompanies,
  getTechStacksByFrequency,
  filterProjects,
} from '../project-filters';

// 테스트용 가짜 데이터 — 실제 resume.ts에 의존하지 않고 독립적으로 테스트
const mockProjects: Project[] = [
  {
    id: 1,
    title: '프로젝트 A',
    period: '2024.01 ~ 2024.06',
    company: '회사A',
    description: '설명 A',
    techStack: ['React', 'TypeScript', 'Zustand'],
    role: '프론트엔드',
    achievements: [],
    highlights: [],
  },
  {
    id: 2,
    title: '프로젝트 B',
    period: '2024.03 ~ 2024.09',
    company: '회사B',
    description: '설명 B',
    techStack: ['React', 'Next.js', 'TypeScript'],
    role: '프론트엔드',
    achievements: [],
    highlights: [],
  },
  {
    id: 3,
    title: '프로젝트 C',
    period: '2024.06 ~ 2024.12',
    company: '회사A',
    description: '설명 C',
    techStack: ['Vue', 'TypeScript'],
    role: '프론트엔드',
    achievements: [],
    highlights: [],
  },
];

describe('getUniqueCompanies', () => {
  it('프로젝트 목록에서 중복 없는 회사 목록을 추출한다', () => {
    const result = getUniqueCompanies(mockProjects);
    // "전체"가 맨 앞에 있어야 하고, 중복 제거된 회사명이 따라와야 함
    expect(result).toEqual(['전체', '회사A', '회사B']);
  });

  it('빈 배열이면 "전체"만 반환한다', () => {
    expect(getUniqueCompanies([])).toEqual(['전체']);
  });
});

describe('getTechStacksByFrequency', () => {
  it('기술 스택을 사용 빈도 내림차순으로 정렬한다', () => {
    const result = getTechStacksByFrequency(mockProjects);
    // TypeScript: 3번, React: 2번, Zustand: 1번, Next.js: 1번, Vue: 1번
    expect(result[0]).toBe('전체');
    expect(result[1]).toBe('TypeScript'); // 3번 → 1위
    expect(result[2]).toBe('React');      // 2번 → 2위
    // 나머지 1번짜리들은 순서 보장 불필요, 포함 여부만 확인
    expect(result).toContain('Zustand');
    expect(result).toContain('Next.js');
    expect(result).toContain('Vue');
  });

  it('빈 배열이면 "전체"만 반환한다', () => {
    expect(getTechStacksByFrequency([])).toEqual(['전체']);
  });
});

describe('filterProjects', () => {
  it('"전체"/"전체" 선택 시 모든 프로젝트를 반환한다', () => {
    const result = filterProjects(mockProjects, '전체', '전체');
    expect(result).toHaveLength(3);
  });

  it('회사로 필터링한다', () => {
    const result = filterProjects(mockProjects, '회사A', '전체');
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.company === '회사A')).toBe(true);
  });

  it('기술 스택으로 필터링한다', () => {
    const result = filterProjects(mockProjects, '전체', 'React');
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.techStack.includes('React'))).toBe(true);
  });

  it('회사 + 기술 스택 AND 조합으로 필터링한다', () => {
    // 회사A + React → 프로젝트 A만 해당 (프로젝트 C는 Vue)
    const result = filterProjects(mockProjects, '회사A', 'React');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('프로젝트 A');
  });

  it('일치하는 프로젝트가 없으면 빈 배열을 반환한다', () => {
    const result = filterProjects(mockProjects, '회사B', 'Vue');
    expect(result).toHaveLength(0);
  });
});
