import { useState, useMemo, useEffect } from 'react';
import {
  Calendar,
  ExternalLink,
  X,
  Users,
  CheckCircle2,
  Filter,
  Maximize2,
  Code2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { mainProjects, etcProjects, type Project } from '@/data/resume';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // ESC 키로 전체화면 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImageFullscreen) {
        setIsImageFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageFullscreen]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden'>
        <div className='max-h-[90vh] overflow-y-auto'>
          <div className='sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10'>
            <h2 className='text-xl font-bold text-foreground'>
              {project.title}
            </h2>
            <Button variant='ghost' size='icon' onClick={onClose} aria-label='모달 닫기'>
              <X className='h-5 w-5' />
            </Button>
          </div>

          {/* Thumbnail Image in Modal */}
          <div className='relative w-full h-64 overflow-hidden bg-muted group/thumbnail'>
            {project.thumbnail ? (
              <>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={cn(
                    'w-full h-full object-cover',
                    project.isBlur && 'blur-xs',
                  )}
                />
                {/* 전체화면 버튼 - 썸네일 호버 시에만 표시 */}
                <button
                  onClick={() => setIsImageFullscreen(true)}
                  className='absolute top-3 right-3 p-2 cursor-pointer bg-black/50 hover:bg-black/70 rounded-lg text-white opacity-0 group-hover/thumbnail:opacity-100 transition-opacity'
                  aria-label='이미지 전체화면 보기'
                >
                  <Maximize2 className='h-5 w-5' />
                </button>
              </>
            ) : (
              <div className='w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center'>
                <Code2 className='h-24 w-24 text-primary/40' />
              </div>
            )}
          </div>

          <div className='p-6 space-y-6'>
            {/* Meta info */}
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-1'>
                <Calendar className='h-4 w-4' />
                {project.period}
              </div>
              <div className='flex items-center gap-1'>
                <Users className='h-4 w-4' />
                {project.role}
              </div>
            </div>

            {/* Highlights */}
            <div className='flex flex-wrap gap-2'>
              {project.highlights.map((highlight) => (
                <Badge key={highlight}>{highlight}</Badge>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className='font-semibold text-foreground mb-2'>
                프로젝트 설명
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className='font-semibold text-foreground mb-2'>기술 스택</h3>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant='secondary'>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className='space-y-4'>
                {project.achievements.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    {
                      <h3 className='font-bold text-accent mb-2'>
                        {group.category}
                      </h3>
                    }
                    <ul className='space-y-1.5'>
                      {group.items.map((item, index) => (
                        <li
                          key={index}
                          className='flex items-start gap-2 text-sm text-muted-foreground'
                        >
                          <CheckCircle2 className='h-4 w-4 text-primary mt-0.5 shrink-0' />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Live URL */}
            {project.liveUrl && (
              <div className='pt-4 border-t border-border'>
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='h-4 w-4 mr-2' />
                    서비스 바로가기
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isImageFullscreen && project.thumbnail && (
        <div
          className='fixed inset-0 z-60 flex items-center justify-center bg-black/90'
          onClick={() => setIsImageFullscreen(false)}
        >
          <button
            onClick={() => setIsImageFullscreen(false)}
            className='absolute top-4 right-4 p-2 cursor-pointer bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors'
            aria-label='전체화면 닫기'
          >
            <X className='h-6 w-6' />
          </button>
          <img
            src={project.thumbnail}
            alt={project.title}
            className={cn(
              'max-w-[90vw] max-h-[90vh] object-contain',
              project.isBlur && 'blur-xs',
            )}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string>('전체');
  const [selectedTech, setSelectedTech] = useState<string>('전체');

  // 회사 목록 추출
  const companies = useMemo(() => {
    const uniqueCompanies = Array.from(
      new Set(mainProjects.map((p) => p.company)),
    );
    return ['전체', ...uniqueCompanies];
  }, []);

  // 기술 스택 목록 추출 (빈도순 정렬)
  const techStacks = useMemo(() => {
    const techCount: Record<string, number> = {};
    mainProjects.forEach((project) => {
      project.techStack.forEach((tech) => {
        techCount[tech] = (techCount[tech] || 0) + 1;
      });
    });
    const sortedTechs = Object.entries(techCount)
      .sort((a, b) => b[1] - a[1])
      .map(([tech]) => tech);
    return ['전체', ...sortedTechs];
  }, []);

  // 필터링된 프로젝트 목록
  const filteredProjects = useMemo(() => {
    return mainProjects.filter((project) => {
      const matchCompany =
        selectedCompany === '전체' || project.company === selectedCompany;
      const matchTech =
        selectedTech === '전체' || project.techStack.includes(selectedTech);
      return matchCompany && matchTech;
    });
  }, [selectedCompany, selectedTech]);

  // 필터 초기화
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
              <h3 className='text-sm font-semibold text-foreground'>
                기술 스택
              </h3>
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

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className='group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden'
              onClick={() => setSelectedProject(project)}
              data-aos='zoom-in'
              data-aos-delay={index * 100}
              tabIndex={0}
              role='button'
              aria-label={`${project.title} 프로젝트 상세 보기`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            >
              {/* Thumbnail Image */}
              <div className='relative w-full h-52 overflow-hidden bg-muted'>
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={cn(
                      'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
                      project.isBlur && 'blur-xs',
                    )}
                  />
                ) : (
                  <div className='w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center'>
                    <Code2 className='h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300' />
                  </div>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
              </div>

              <CardHeader>
                <div className='flex items-center justify-between mb-2'>
                  <Badge variant='outline' className='text-xs'>
                    {project.company}
                  </Badge>
                  {project.liveUrl && (
                    <ExternalLink className='h-4 w-4 text-muted-foreground' />
                  )}
                </div>
                <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1 mb-4'>
                  {project.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      variant='secondary'
                      className='text-xs'
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className='flex flex-wrap gap-1'>
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className='text-xs text-muted-foreground'>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className='text-xs text-muted-foreground'>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className='mt-4 pt-4 border-t border-border'>
                  <span className='text-xs text-muted-foreground'>
                    {project.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* ETC Projects */}
        <div className='mt-20'>
          <div className='text-center mb-12' data-aos='fade-up'>
            <h3 className='text-2xl font-bold text-foreground mb-4'>
              ETC Projects
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              그 외 참여한 프로젝트들입니다.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {etcProjects.map((project, index) => (
              <Card
                key={project.id}
                className='group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden'
                onClick={() => setSelectedProject(project)}
                data-aos='zoom-in'
                data-aos-delay={index * 100}
                tabIndex={0}
                role='button'
                aria-label={`${project.title} 프로젝트 상세 보기`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              >
                {/* Thumbnail Image */}
                <div className='relative w-full h-52 overflow-hidden bg-muted'>
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className={cn(
                        'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
                        project.isBlur && 'blur-xs',
                      )}
                    />
                  ) : (
                    <div className='w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center'>
                      <Code2 className='h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300' />
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
                </div>

                <CardHeader>
                  <div className='flex items-center justify-between mb-2'>
                    <Badge variant='outline' className='text-xs'>
                      {project.company}
                    </Badge>
                    {project.liveUrl && (
                      <ExternalLink className='h-4 w-4 text-muted-foreground' />
                    )}
                  </div>
                  <CardTitle className='text-lg group-hover:text-primary transition-colors'>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-1 mb-4'>
                    {project.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant='secondary'
                        className='text-xs'
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-1'>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className='text-xs text-muted-foreground'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className='text-xs text-muted-foreground'>
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className='mt-4 pt-4 border-t border-border'>
                    <span className='text-xs text-muted-foreground'>
                      {project.period}
                    </span>
                  </div>
                </CardContent>
              </Card>
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
