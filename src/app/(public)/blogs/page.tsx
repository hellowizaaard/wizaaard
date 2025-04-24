import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import React from 'react';

const BlogPage = () => {
  return (
    <div>
      <div className="w-full flex items-end mb-[30px]">
        <Typography
          type="h1"
          as="h1"
          className="text-5xl text-center font-bold whitespace-nowrap"
        >
          Blogs
        </Typography>
        {/* <div className="flex-1 border-b border-gray-400 ml-2" /> */}
      </div>
      <div className="w-full">
        <div className="">
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
      </div>
    </div>
  );
};

export default BlogPage;
