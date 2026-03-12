import { skills } from '@/data/resume';

interface SkillBarProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className='mb-3'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-sm font-medium text-foreground'>{name}</span>
        <span className='text-xs text-muted-foreground'>{level}%</span>
      </div>
      <div className='h-2 bg-muted rounded-full overflow-hidden'>
        <div
          className='h-full bg-accent rounded-full transition-all duration-500'
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
}

function SkillCategory({ title, skills: skillList }: SkillCategoryProps) {
  return (
    <div className='bg-card border-2 border-foreground rounded-2xl p-6 shadow-[6px_6px_0px_hsl(var(--shadow-soft))]'>
      <h3 className='text-lg font-semibold text-foreground mb-4'>{title}</h3>
      <div>
        {skillList.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

const skillCategories = [
  { title: 'Frontend', skills: skills.frontend },
  { title: 'Styling', skills: skills.styling },
  { title: 'State Management', skills: skills.stateManagement },
  { title: 'Backend', skills: skills.backend },
  { title: 'Database', skills: skills.database },
  { title: 'Tools & Infra', skills: skills.tools },
  { title: 'Specialties', skills: skills.specialties },
];

export function Skills() {
  return (
    <section id='skills' className='py-20 relative'>
      <div
        className='pointer-events-none absolute left-12 bottom-8 h-20 w-20 rounded-full bg-quaternary/25 shadow-[6px_6px_0px_hsl(var(--shadow-soft))]'
        aria-hidden='true'
      />
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>Skills</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            다양한 프로젝트를 통해 쌓아온 기술 스택입니다.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
