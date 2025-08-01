import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white rounded-[20px] p-6 border border-[#E6E8EC] min-h-[180px]">
    <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-[#23262F]">{description}</p>
  </div>
);

export default FeatureCard;
