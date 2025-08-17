import React from 'react';

interface StepCardProps {
  step?: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  highlight,
}) => (
  <div
    className={`bg-white rounded-[20px] p-6 min-h-[332px] lg:min-h-[432px] flex flex-col justify-between ${
      highlight ? 'shadow-lg' : 'border border-[#E6E8EC]'
    }`}
  >
    {step && (
      <div className="mb-16 lg:mb-[88px]">
        <span className="inline-block text-[18px] px-5 py-[10px] border border-textGrey rounded-full font-medium">
          {step}
        </span>
      </div>
    )}
    <h3 className="tracking-tighter md:leading-10 text-[36px] font-semibold mb-[48px] lg:mb-[68px]">
      {title}
    </h3>
    <p className="text-[18px]">{description}</p>
  </div>
);

export default StepCard;
