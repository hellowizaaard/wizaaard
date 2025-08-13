import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Define different text types
const textTypes = {
  h1: 'text-4xl sm:text-[84px] font-semibold leading-[50px] sm:leading-[90px] tracking-tighter font-poppins',
  h2: 'text-3xl font-medium',
  h3: 'text-lg font-medium',
  p: 'text-base font-normal',
  caption: 'text-sm text-gray-500',
};

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'caption';
};

const Typography = ({
  as = 'p',
  className = '',
  children,
  type = 'p',
  ...props
}: TypographyProps) => {
  const Component = as;

  // Merge custom classes with the type's default
  const mergedClassNames = twMerge(clsx(textTypes[type], className));

  return (
    <Component className={mergedClassNames} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
