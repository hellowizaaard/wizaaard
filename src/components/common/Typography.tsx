import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Define different text types (you can extend this)
const textTypes = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    p: 'text-base font-normal',
    caption: 'text-sm text-gray-500',
};

type TypographyProps = {
    as?: keyof JSX.IntrinsicElements;  // Element type (e.g., 'p', 'h1', 'h2')
    className?: string;                // Additional class names to apply
    children: React.ReactNode;               // The content to be rendered
    type?: 'h1' | 'h2' | 'h3' | 'p' | 'caption'; // Typography type, with possible predefined options
};

const Typography = ({ as = 'p', className = '', children, type = 'p', ...props }: TypographyProps) => {
    // Merge custom class with default classes based on the type
    const Component = as; // Default element is 'p', but can be customized

    // Use tw-merge to combine classes and clsx for conditional classnames
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
