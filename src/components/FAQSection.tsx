'use client';

import React from 'react';
import Accordion from '../components/ui/Accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is Wizaaard?',
    answer:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a.',
  },
  {
    question: 'Is Wizaaard free to use?',
    answer:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    question: 'Can I apply to jobs directly from Wizaaard?',
    answer:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    question: 'Are the resume templates ATS-friendly?',
    answer:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    question: 'Is my data safe on Wizaaard?',
    answer:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    // Set the first item to be open by default
    setActiveIndex(0);
  }, []);

  return (
    <section className=" bg-f8f8f8 border border-textGrey rounded-2xl mt-10">
      <div className="fix-width grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:px-10 sm:py-[55px]">
        {/* Left Column - Text and Button */}
        <div className="lg:grid lg:grid-cols-6">
          <p className="my-5 lg:my-0 lg:col-span-1 text-[18px] font-medium lg:text-left">
            FAQs
          </p>
          <div className="col-span-5 sm:col-span-4 flex flex-col">
            <h2 className="text-4xl font-bold mb-8">
              Answers to the questions you may have in your mind...
            </h2>
            <div className="mt-auto">
              <button
                className="px-6 py-3 bg-transparent text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => {
                  // Handle view all FAQs
                }}
              >
                View all FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <p>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
