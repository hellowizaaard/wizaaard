import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import React from 'react';

const FeaturePage = () => {
  return (
    <div>
      <Typography className="text-5xl font-bold text-center mb-[30px]">
        Features we offer you
      </Typography>
      <div className="grid grid-cols-3 gap-[25px]">
        <Card
          cardTitle={'Build resume'}
          paragraph=""
          className="border border-[#AFAFAF] px-8 py-5 rounded-[10px] flex flex-col space-y-[15px]"
        />
        <Card
          cardTitle={'Digital Profile'}
          paragraph=""
          className="border border-[#AFAFAF] px-8 py-5 rounded-[10px] flex flex-col space-y-[15px]"
        />
        <Card
          cardTitle={'NFC Card'}
          paragraph=""
          className="border border-[#AFAFAF] px-8 py-5 rounded-[10px] flex flex-col space-y-[15px]"
        />
        <Card
          cardTitle={'Jobs'}
          paragraph=""
          className="border border-[#AFAFAF] px-8 py-5 rounded-[10px] flex flex-col space-y-[15px]"
        />
        <Card
          cardTitle={'Mentorship'}
          paragraph=""
          className="border border-[#AFAFAF] px-8 py-5 rounded-[10px] flex flex-col space-y-[15px]"
        />
        <Card
          cardTitle={'Templates'}
          paragraph=""
          className="border border-[#AFAFAF] px-8 py-5 rounded-[10px] flex flex-col space-y-[15px]"
        />
      </div>
    </div>
  );
};

export default FeaturePage;
