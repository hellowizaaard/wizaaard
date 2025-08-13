'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const containerClass = twMerge(
    clsx(
      'bg-white w-full border p-3 sm:p-6 border-0 border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden transition-all',
      className,
    ),
  );

  const headerClass = clsx(
    'flex items-center justify-between pl-0 sm:pl-4 cursor-pointer text-base font-medium',
    ' dark:bg-gray-800 text-black dark:text-white',
  );

  return (
    <div className={containerClass}>
      <div className={headerClass} onClick={toggleAccordion}>
        <span>{title}</span>
        <motion.span
          className="text-base sm:text-lg p-2 sm:p-3 bg-f8f8f8 rounded-xl sm:rounded-[15px]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <IoIosArrowDown />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-f8f8f8 rounded-[10px] mt-[14px] text-sm text-gray-700 dark:text-gray-300">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
