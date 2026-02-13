import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mainProjects, etcProjects, type Project } from '@/data/resume';
import {
  getUniqueCompanies,
  getTechStacksByFrequency,
  filterProjects,
} from '@/lib/project-filters';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string>('전체');
  const [selectedTech, setSelectedTech] = useState<string>('전체');

  const companies = useMemo(() => getUniqueCompanies(mainProjects), []);
  const techStacks = useMemo(() => getTechStacksByFrequency(mainProjects), []);
  const filteredProjects = useMemo(
    () => filterProjects(mainProjects, selectedCompany, selectedTech),
    [selectedCompany, selectedTech],
  );

  const resetFilters = () => {
    setSelectedCompany('전체');
    setSelectedTech('전체');
  };

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>Projects</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            다양한 도메인에서 진행한 주요 프로젝트들입니다.
          </p>
        </div>

        {/* 필터 영역 */}
        <div className='mb-8 space-y-4' data-aos='fade-up' data-aos-delay='100'>
          {/* 회사별 필터 */}
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <Filter className='h-4 w-4 text-muted-foreground' />
              <h3 className='text-sm font-semibold text-foreground'>회사</h3>
            </div>
            <div className='flex flex-wrap gap-2' role='group' aria-label='회사별 필터'>
              {companies.map((company) => (
                <Badge
                  key={company}
                  variant={selectedCompany === company ? 'default' : 'outline'}
                  className='cursor-pointer hover:bg-primary/10 transition-colors'
                  onClick={() => setSelectedCompany(company)}
                  role='button'
                  tabIndex={0}
                  aria-pressed={selectedCompany === company}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedCompany(company)}
                >
                  {company}
                </Badge>
              ))}
            </div>
          </div>

          {/* 기술 스택 필터 */}
          <div>
            <div className='flex items-center gap-2 mb-3'>
              <Filter className='h-4 w-4 text-muted-foreground' />
              <h3 className='text-sm font-semibold text-foreground'>기술 스택</h3>
            </div>
            <div className='flex flex-wrap gap-2' role='group' aria-label='기술 스택 필터'>
              {techStacks.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech === tech ? 'default' : 'outline'}
                  className='cursor-pointer hover:bg-primary/10 transition-colors'
                  onClick={() => setSelectedTech(tech)}
                  role='button'
                  tabIndex={0}
                  aria-pressed={selectedTech === tech}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* 필터 초기화 & 결과 카운트 */}
          <div className='flex items-center justify-between pt-2'>
            <p className='text-sm text-muted-foreground'>
              총{' '}
              <span className='font-semibold text-foreground'>
                {filteredProjects.length}
              </span>
              개의 프로젝트
            </p>
            {(selectedCompany !== '전체' || selectedTech !== '전체') && (
              <Button
                variant='ghost'
                size='sm'
                onClick={resetFilters}
                className='text-xs'
              >
                필터 초기화
              </Button>
            )}
          </div>
        </div>

        {/* Main Projects 그리드 */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* ETC Projects */}
        <div className='mt-20'>
          <div className='text-center mb-12' data-aos='fade-up'>
            <h3 className='text-2xl font-bold text-foreground mb-4'>ETC Projects</h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              그 외 참여한 프로젝트들입니다.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {etcProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
