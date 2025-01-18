import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Define different text types (you can extend this)
const textTypes = {
    h1: 'text-[36px] font-semibold',
    h2: 'text-3xl font-medium',
    h3: 'text-lg font-medium',
    p: 'text-base font-normal',
    caption: 'text-sm text-gray-500',
};

type TypographyProps = {
    as?: keyof JSX.IntrinsicElements;  // Element type (e.g., 'p', 'h1', 'h2')
    className?: string;                // Additional class names to apply
    children: React.ReactNode;         // The content to be rendered
    type?: 'h1' | 'h2' | 'h3' | 'p' | 'caption'; // Typography type, with possible predefined options
};

const Typography = ({ as = 'p', className = '', children, type = 'p', ...props }: TypographyProps) => {
    const Component = as; // Default element is 'p', but can be customized

    // Merge custom classes with the type's default and add `text-white` if no color is provided
    const mergedClassNames = twMerge(
        clsx(textTypes[type], className)
    );

    return (
        <Component className={mergedClassNames} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
