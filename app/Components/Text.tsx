import React from 'react';
import clsx from 'clsx';

type TextType = 'title' | 'subtitle' | 'info';

interface TextProps {
  type?: TextType;
  size?: string; // e.g., 'text-4xl', 'text-base'
  className?: string;
  children: React.ReactNode;
}

const typeStyles: Record<TextType, string> = {
  title: 'font-semibold text-white',
  subtitle: 'font-semibold text-gray-300',
  info: 'text-gray-400'
};

const defaultSizes: Record<TextType, string> = {
  title: 'text-7xl md:text-7xl',
  subtitle: 'text-4xl md:text-6xl',
  info: 'text-xl'
};

const Text: React.FC<TextProps> = ({
  type = 'info',
  size,
  className,
  children
}) => {
  const appliedClasses = clsx(
    typeStyles[type],
    size ? size : defaultSizes[type],
    className
  );

  return <div className={appliedClasses}>{children}</div>;
};

export default Text;
