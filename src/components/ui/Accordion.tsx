'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const containerClass = twMerge(
    clsx(
      'w-full border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden transition-all',
      className,
    ),
  );

  const headerClass = clsx(
    'flex items-center justify-between px-4 py-3 cursor-pointer text-base font-medium',
    'bg-gray-100 dark:bg-gray-800 text-black dark:text-white',
  );

  return (
    <div className={containerClass}>
      <div className={headerClass} onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '✖️' : '➕'}</span>
      </div>
      <div
        className={clsx(
          'transition-all duration-300 ease-in-out px-4 overflow-hidden',
          isOpen ? 'max-h-[1000px] py-3' : 'max-h-0 py-0',
        )}
      >
        {isOpen && (
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
