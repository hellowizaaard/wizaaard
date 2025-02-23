// components/ui/Card.tsx
import Typography from '@/components/common/Typography';
import React from 'react';

interface CardProps {
  cardTitle: string;
  paragraph: string;
  className?: string;
}

const Card = ({ cardTitle, paragraph, className = '' }: CardProps) => {
  return (
    <div className={className}>
      <Typography as="h2" type="h2">
        {cardTitle}
      </Typography>
      <Typography as="p" type="p">
        {paragraph ||
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500st has survived not only. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500st has survived not only."}
      </Typography>
    </div>
  );
};

export default Card;
