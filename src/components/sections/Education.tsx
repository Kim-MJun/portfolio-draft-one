import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education, certifications } from '@/data/resume';

export function Education() {
  return (
    <section id='education' className='py-20 bg-muted/30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>
            Education & Certifications
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            학력 및 보유 자격증 정보입니다.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Education */}
          <Card className='bg-background' data-aos='fade-right'>
            <CardContent className='p-6'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center'>
                  <GraduationCap className='h-6 w-6 text-accent' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground'>
                    학력
                  </h3>
                  <p className='text-sm text-muted-foreground'>Education</p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='border-l-2 border-accent pl-4'>
                  <h4 className='font-semibold text-foreground'>
                    {education.university}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {education.major}
                  </p>
                  <div className='flex items-center gap-2 mt-2 text-sm text-muted-foreground'>
                    <Calendar className='h-4 w-4' />
                    <span>{education.period}</span>
                    <Badge variant='secondary' className='text-xs'>
                      {education.status}
                    </Badge>
                  </div>
                  {/* <p className='text-sm text-muted-foreground mt-1'>
                    학점: {education.gpa}
                  </p> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className='bg-background' data-aos='fade-left'>
            <CardContent className='p-6'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center'>
                  <Award className='h-6 w-6 text-accent' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground'>
                    자격증
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Certifications
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className='border-l-2 border-accent pl-4'
                  >
                    <h4 className='font-semibold text-foreground'>
                      {cert.name}
                    </h4>
                    <div className='flex items-center gap-2 mt-1 text-sm text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      <span>{cert.date}</span>
                      <Badge variant='secondary' className='text-xs'>
                        {cert.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
