import type { Project } from '@/data/resume';

/**
 * 프로젝트 목록에서 중복 없는 회사 목록을 추출한다.
 * "전체"가 맨 앞에 위치한다.
 */
export function getUniqueCompanies(projects: Project[]): string[] {
  const unique = Array.from(new Set(projects.map((p) => p.company)));
  return ['전체', ...unique];
}

/**
 * 프로젝트 목록에서 기술 스택을 사용 빈도 내림차순으로 정렬한다.
 * "전체"가 맨 앞에 위치한다.
 */
export function getTechStacksByFrequency(projects: Project[]): string[] {
  const techCount: Record<string, number> = {};
  projects.forEach((project) => {
    project.techStack.forEach((tech) => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });
  const sorted = Object.entries(techCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tech]) => tech);
  return ['전체', ...sorted];
}

/**
 * 회사 + 기술 스택 AND 조합으로 프로젝트를 필터링한다.
 * "전체" 선택 시 해당 조건을 무시한다.
 */
export function filterProjects(
  projects: Project[],
  selectedCompany: string,
  selectedTech: string,
): Project[] {
  return projects.filter((project) => {
    const matchCompany =
      selectedCompany === '전체' || project.company === selectedCompany;
    const matchTech =
      selectedTech === '전체' || project.techStack.includes(selectedTech);
    return matchCompany && matchTech;
  });
}
