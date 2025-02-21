import Typography from '@/components/common/Typography';
import Card from '@/components/public/ui/Card';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div className="w-full flex items-end mb-[30px]">
        <Typography className="text-5xl font-bold whitespace-nowrap">
          About Wezard
        </Typography>
        <div className="flex-1 border-b border-gray-400 ml-2" />
      </div>
      <div className="w-full grid grid-cols-4 gap-[25px]">
        <div className="col-span-3 flex flex-col space-y-[30px]">
          <Card
            cardTitle={'Our App'}
            paragraph=""
            className="flex flex-col space-y-[10px]"
          />
          <Card
            cardTitle={'Our Mission'}
            paragraph=""
            className="flex flex-col space-y-[10px]"
          />
          <Card
            cardTitle={'Our Vision'}
            paragraph=""
            className="flex flex-col space-y-[10px]"
          />
          <Card
            cardTitle={'Our Excellent Team'}
            paragraph=""
            className="flex flex-col space-y-[10px]"
          />
        </div>
        <div>this is image card</div>
      </div>
    </div>
  );
};

export default AboutPage;
