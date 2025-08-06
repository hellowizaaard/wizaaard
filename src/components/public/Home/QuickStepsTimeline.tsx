import React from 'react';

const steps = [
  {
    title: 'Browse/Download Wizaaard App',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a read more...",
  },
  {
    title: 'Register/Login your account',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a read more...",
  },
  {
    title: 'Fillup completely your profile',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a read more...",
  },
  {
    title: 'Now your resume/Digital Card & Landingpage ready to use',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a read more...",
  },
];

const QuickStepsTimeline = () => {
  return (
    <section className=" px-4 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#23262F] leading-tight">
        4 Quick steps to use
        <br />
        wizaaard for yourself
      </h2>
      <div className="relative py-8 pl-4">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-0 h-full w-0.5 bg-black z-0" />
        <ul className="space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="relative flex items-start z-10">
              {/* Dot */}
              <span className="absolute left-[-16px] top-2 w-6 h-6 rounded-full bg-black z-10" />
              <div className="ml-8">
                <h3 className="font-semibold text-lg md:text-[18px] mb-2    ">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {step.description.split('read more...')[0]}
                  <a
                    href="#"
                    className="text-[#1877F2] font-semibold ml-1 hover:underline"
                  >
                    read more...
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuickStepsTimeline;
