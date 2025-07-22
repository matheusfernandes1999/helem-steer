import React from 'react';
import clsx from 'clsx';

interface SpanProps {
  children: React.ReactNode;
  className?: string;
}

const Span: React.FC<SpanProps> = ({ children, className }) => {
  return (
    <span
      className={clsx('text-primary-helem-500 hover:text-primary-helem-600 duration-300 transition-colors ease-linear font-semibold', className)}
    >
      {children}
    </span>
  );
};

export default Span;
