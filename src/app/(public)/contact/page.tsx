import Typography from '@/components/common/Typography';
import Card from '@/components/ui/Card';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="w-[calc(100%-0px)] lg:w-[calc(100%-350px)] xl:lg:w-[calc(100%-450px)] mx-auto ">
      <div className="w-full flex items-end mb-[30px]">
        <Typography className="text-5xl font-bold whitespace-nowrap">
          Contact Wezard
        </Typography>
        <div className="flex-1 border-b border-gray-400 ml-2" />
      </div>
      <div className="flex flex-col space-y-[30px]">
        <Card
          cardTitle={'Wezard Mail Support'}
          paragraph=""
          className="flex flex-col space-y-[10px]"
        />
        <Card
          cardTitle={'Wezard Review / Testimonial'}
          paragraph=""
          className="flex flex-col space-y-[10px]"
        />
        <Card
          cardTitle={'Wezard Technical Support'}
          paragraph=""
          className="flex flex-col space-y-[10px]"
        />
        <Card
          cardTitle={'Wezard App Support'}
          paragraph=""
          className="flex flex-col space-y-[10px]"
        />
        <Card
          cardTitle={'Wezard Live Chat / Helpline'}
          paragraph=""
          className="flex flex-col space-y-[10px]"
        />
        <Card
          cardTitle={'Wezard HQ Address'}
          paragraph=""
          className="flex flex-col space-y-[10px]"
        />
      </div>
    </div>
  );
};

export default ContactPage;
