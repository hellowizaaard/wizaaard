import Accordion from '../../../components/ui/Accordion';
import Input from '../../../components/ui/Input';
import Typography from '../../../components/ui/Typography';
import React from 'react';

const FaqsPage = () => {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Typography
            type="h1"
            as="h1"
            className="text-5xl font-bold whitespace-nowrap"
          >
            Frequently Asked Questions
          </Typography>
        </div>
        <div>
          <Input placeholder="Search your questions..." />
        </div>
      </div>
      <Typography className="mt-4">
        Need answers of your questions? find them here...
      </Typography>
      <div className="mt-9 grid grid-cols-3 gap-4">
        <Accordion title="What is StepUp Technology?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna, Lorem ipsum dolor
          sit amet. Lorem olor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Accordion>

        <Accordion title="Do you support dark mode?">
          Yes, this accordion is fully dark mode compatible with Tailwind’s
          `dark:` classes.
        </Accordion>

        <Accordion title="Can I customize this component?">
          100%. Its built to be flexible — update icons, add animations, or nest
          content as needed.
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsPage;
