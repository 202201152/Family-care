import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-card rounded-[24px] p-5 text-text-dark border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)]',
          hoverable && 'card-hover cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.06)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
