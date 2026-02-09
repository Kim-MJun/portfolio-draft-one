import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactFormModal({
  open,
  onOpenChange,
}: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS 설정 - 환경변수에서 가져오기
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // 환경변수가 설정되지 않은 경우 에러 처리
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS 설정이 올바르지 않습니다. 환경변수를 확인해주세요.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey,
      );

      toast.success('메일이 성공적으로 전송되었습니다!', {
        description: '빠른 시일 내에 답변드리겠습니다.',
      });

      reset();
      onOpenChange(false);
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      toast.error('메일 전송에 실패했습니다.', {
        description: '잠시 후 다시 시도해주세요.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>메일 보내기</DialogTitle>
          <DialogDescription>
            아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className='space-y-4 mt-4'>
          {/* 이름 */}
          <div className='space-y-2'>
            <Label htmlFor='name'>
              이름 <span className='text-destructive' aria-hidden='true'>*</span>
            </Label>
            <Input
              id='name'
              placeholder='홍길동'
              aria-required='true'
              {...register('name', {
                required: '이름을 입력해주세요',
              })}
            />
            {errors.name && (
              <p className='text-sm text-destructive' role='alert'>{errors.name.message}</p>
            )}
          </div>

          {/* 이메일 */}
          <div className='space-y-2'>
            <Label htmlFor='email'>
              이메일 <span className='text-destructive' aria-hidden='true'>*</span>
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='example@email.com'
              aria-required='true'
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '올바른 이메일 주소를 입력해주세요',
                },
              })}
            />
            {errors.email && (
              <p className='text-sm text-destructive' role='alert'>{errors.email.message}</p>
            )}
          </div>

          {/* 제목 */}
          <div className='space-y-2'>
            <Label htmlFor='subject'>
              제목 <span className='text-destructive' aria-hidden='true'>*</span>
            </Label>
            <Input
              id='subject'
              placeholder='문의 제목'
              aria-required='true'
              {...register('subject', {
                required: '제목을 입력해주세요',
              })}
            />
            {errors.subject && (
              <p className='text-sm text-destructive' role='alert'>
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* 메시지 */}
          <div className='space-y-2'>
            <Label htmlFor='message'>
              메시지 <span className='text-destructive' aria-hidden='true'>*</span>
            </Label>
            <Textarea
              id='message'
              placeholder='문의하실 내용을 입력해주세요'
              rows={5}
              aria-required='true'
              {...register('message', {
                required: '메시지를 입력해주세요',
                minLength: {
                  value: 10,
                  message: '최소 10자 이상 입력해주세요',
                },
              })}
            />
            {errors.message && (
              <p className='text-sm text-destructive' role='alert'>
                {errors.message.message}
              </p>
            )}
          </div>

          {/* 버튼 */}
          <div className='flex gap-3 pt-4'>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className='flex-1'
            >
              취소
            </Button>
            <Button type='submit' disabled={isSubmitting} className='flex-1'>
              {isSubmitting ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  전송 중...
                </>
              ) : (
                '전송하기'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
