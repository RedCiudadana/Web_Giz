import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className, hoverEffect = true }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white shadow-md overflow-hidden',
        hoverEffect && 'transition-shadow duration-300 hover:shadow-lg',
        className
      )}
      style={{borderRadius: '20px'}}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('p-6 border-b border-neutral-200', className)}>{children}</div>;
};

export const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('p-6', className)}>{children}</div>;
};

export const CardFooter = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('p-6 border-t border-neutral-200', className)}>{children}</div>;
};

export default Card;