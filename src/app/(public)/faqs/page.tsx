import Input from '@/components/ui/input';
import Typography from '@/components/ui/Typography';
import React from 'react';

const FaqsPage = () => {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-3 gap-4 mb-[30px]">
        <div className="col-span-2">
          <Typography
            type="h1"
            as="h1"
            className="text-5xl font-bold whitespace-nowrap"
          >
            Frequently Asked Questions
          </Typography>
        </div>
        <div>
          <Input placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
