import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-surface';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark',
      secondary: 'bg-white text-text-dark border border-divider hover:bg-gray-50',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'hover:bg-primary/10 text-text-dark hover:text-primary',
      danger: 'bg-emergency text-white hover:bg-red-600',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base', // Larger touch target
      lg: 'h-14 px-8 text-lg',
      icon: 'h-12 w-12',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
