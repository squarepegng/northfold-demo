import { cva } from 'class-variance-authority';
import { cn } from '@/lib/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-fg hover:bg-primary/90',
        outline: 'border border-border bg-transparent text-content hover:bg-surface-2',
        ghost: 'text-content hover:bg-surface-2',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export function Button({ variant, size, className, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
