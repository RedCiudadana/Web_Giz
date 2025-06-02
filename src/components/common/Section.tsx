import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
  animate?: boolean;
  style?: React.CSSProperties
}

const Section = ({
  children,
  title,
  subtitle,
  className,
  containerClassName,
  titleClassName,
  subtitleClassName,
  id,
  style,
  animate = true,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('py-12 md:py-16 lg:py-24', className)}
      style={style}
    >
      <div className={cn('container-custom', containerClassName)}>
        {(title || subtitle) && (
          <div className={cn(
            'mb-12 text-center',
            animate && 'animate-on-scroll'
          )}>
            {title && (
              <h2 className={cn('text-3xl md:text-4xl font-bold mb-4', titleClassName)}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn('text-xl text-neutral-600 max-w-3xl mx-auto', subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;