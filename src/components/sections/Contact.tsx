import { Mail, Phone, Github, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/resume'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Kim-MJun',
    href: personalInfo.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Seoul, South Korea',
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            새로운 기회나 협업에 대해 이야기 나누고 싶으시다면 언제든 연락 주세요.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-background">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  이력서나 포트폴리오에 대해 더 자세한 내용이 궁금하시다면
                </p>
                <Button size="lg" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    이메일 보내기
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
