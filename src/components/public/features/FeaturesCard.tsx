import Typography from '@/components/ui/Typography';
import React from 'react';

interface FeatureCardPropsTypes {
  cardTitle: string;
}

const FeaturesCard = ({ cardTitle }: FeatureCardPropsTypes) => {
  return (
    <div className="border-[1px] border-[#AFAFAF] px-8 py-5 rounded-[10px]">
      <Typography as="h2" type="h2">
        {cardTitle}
      </Typography>
      <Typography className="mt-[15px]" as="p" type="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500st has survived not only. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&apos;s standard dummy text ever since the 1500st has survived
        not only.
      </Typography>
    </div>
  );
};

export default FeaturesCard;
