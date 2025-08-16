import Typography from '@/components/ui/Typography';
import Image from 'next/image';
import React from 'react';
import quickStep from '../../../../public/images/quick-step.png';

const links = [
  'Resume',
  'Cards',
  'Jobs',
  'Landingpage',
  'Templates',
  'Mentors',
];

const EffortlessResume = () => {
  return (
    <div className="bg-white p-3 common-border">
      <div className="bg-f8f8f8 rounded-lg lg:common-border px-2 py-2 lg:py-[25px] lg:px-8 xl:px-10">
        <ul className="flex justify-between items-center">
          {links.map((item, index) => (
            <li
              key={index}
              className={`${
                index === 0
                  ? 'font-semibold text-xs lg:text-[14px]'
                  : 'effortless-resume-nav'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[14px] common-border p-[40px]">
        <Typography
          as="h2"
          type="h2"
          className="text-2xl md:text-5xl font-semibold leading-[70px] tracking-tighter mb-8 sm:mb-20"
        >
          Effortless Resume
        </Typography>
        <Image
          alt="effortless resume image"
          src={quickStep}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default EffortlessResume;
