import React from 'react';
import HowWizaaardWorksCard from './HowWizaaardWorksCard';
import StepCard from './StepCard';

const steps = [
  {
    step: 'Step 1',
    title: 'Registration/Login',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    step: 'Step 2',
    title: 'Fill up profile details as per instruction..',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    step: 'Step 3',
    title: 'Build Resume',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    step: 'Step 4',
    title: 'Digital Business Card',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    step: 'Step 5',
    title: 'Personal Landing-page',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    step: 'Step 6',
    title: 'Global Matching Job Board',
    description:
      'Access curated job opportunities from around the world tailored to your skills and profile preferences.',
  },
  {
    step: 'Step 7',
    title: 'Industry Expert Mentors',
    description:
      'Connect with seasoned mentors from your industry to receive guidance, career advice, and personalized support.',
  },
  {
    step: 'Step 8',
    title: 'Templates Library',
    description:
      'Choose from a collection of professional templates to build your resume, portfolio, or personal brand assets easily.',
  },
  {
    step: 'Step 9',
    title: 'Dashboard Tracking',
    description:
      'Monitor your job applications, profile views, mentor sessions, and other key metrics all in one place.',
  },
  {
    step: 'Step 10',
    title: 'Verified Professionals',
    description:
      'Get your skills and experience verified to increase trust and visibility in the global job ecosystem.',
  },
];

// const features = [
//   {
//     title: 'Build Resume',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
//   },
//   {
//     title: 'Digital Business Card',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
//   },
//   {
//     title: 'Personal Landing-page',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
//   },
// ];

const HowWizaaardWorksSection = () => {
  return (
    <section className="bg-[#DEE8F0] rounded-2xl mt-10">
      <div className="fix-width p-4 md:p-10">
        <div className="mb-8 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-2 my-5 lg:my-0">
            <p className="font-semibold text-sm text-center">
              Features wizaaard –
            </p>
          </div>
          <div className="col-span-10">
            <h2 className="tracking-tighter text-3xl md:text-4xl md:leading-[60px] lg:text-[60px] font-semibold mb-4">
              How our platform makes your life more easier at expressing
              yourself...
            </h2>
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[100px]">
          <HowWizaaardWorksCard />
          {steps.map((step, idx) => (
            <StepCard
              key={idx}
              step={step.step}
              title={step.title}
              description={step.description}
              highlight={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWizaaardWorksSection;
