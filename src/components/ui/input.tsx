'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    const inputClass = twMerge(
      clsx(
        'w-full px-4 py-2 rounded-[10px] border outline-none transition',
        'bg-white dark:bg-gray-900 text-black dark:text-white',
        'border-gray-300 dark:border-gray-700',
        'focus:ring-2 focus:ring-primary focus:border-primary',
        error && 'border-red-500 focus:ring-red-400',
      ),
      className,
    );

    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <input ref={ref} className={inputClass} {...props} />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
