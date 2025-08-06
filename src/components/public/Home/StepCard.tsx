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
    className={`bg-white rounded-[20px] p-6 min-h-[432px] flex flex-col justify-between ${
      highlight ? 'shadow-lg' : 'border border-[#E6E8EC]'
    }`}
  >
    {step && (
      <div className="mb-[88px]">
        <span className="inline-block bg-[#F4F4F4] text-[#23262F] text-xs px-3 py-1 rounded-full font-medium">
          {step}
        </span>
      </div>
    )}
    <h3 className="text-lg tracking-tighter md:text-xl md:leading-10 lg:text-[36px] font-semibold mb-[68px]">
      {title}
    </h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default StepCard;
