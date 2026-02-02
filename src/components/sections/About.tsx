import { Code2, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { personalInfo } from '@/data/resume';

const strengths = [
  {
    icon: Code2,
    title: '기술적 전문성',
    description:
      'React, Next.js, TypeScript 기반의 대규모 시스템 구축 경험과 성능 최적화에 강점을 보유하고 있습니다.',
  },
  {
    icon: Rocket,
    title: '문제 해결 능력',
    description:
      'ElasticSearch 도입으로 검색 응답시간 90% 단축, 업무 자동화로 작업 시간 80% 절감 등 실질적인 성과를 만들어냈습니다.',
  },
  {
    icon: Users,
    title: '협업과 소통',
    description:
      '디자인팀, 백엔드팀과의 원활한 협업을 통해 프로젝트 완성도를 높이고, 커스텀 결재라인 등 복잡한 기능을 성공적으로 구현했습니다.',
  },
];

export function About() {
  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>About Me</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {personalInfo.keywords.join(', ')}을 갖춘 {personalInfo.experience}{' '}
            {personalInfo.title}입니다.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {strengths.map((strength, index) => (
            <Card
              key={strength.title}
              className='bg-background hover:shadow-lg transition-shadow'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <CardContent className='p-6'>
                <div className='w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4'>
                  <strength.icon className='h-6 w-6 text-accent' />
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  {strength.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {strength.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
