import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--shadow-hard))] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_hsl(var(--shadow-hard))] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_hsl(var(--shadow-hard))] motion-reduce:hover:transform-none motion-reduce:active:transform-none',
        destructive:
          'bg-destructive text-white border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--shadow-hard))] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_hsl(var(--shadow-hard))] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_hsl(var(--shadow-hard))] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 motion-reduce:hover:transform-none motion-reduce:active:transform-none',
        outline:
          'border-2 border-foreground bg-transparent text-foreground shadow-none hover:bg-tertiary hover:text-tertiary-foreground dark:bg-transparent dark:hover:bg-tertiary',
        secondary:
          'bg-secondary text-secondary-foreground border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--shadow-hard))] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_hsl(var(--shadow-hard))] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_hsl(var(--shadow-hard))] motion-reduce:hover:transform-none motion-reduce:active:transform-none',
        ghost: 'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
