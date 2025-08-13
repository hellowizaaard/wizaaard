import React from 'react';
import EffortlessResume from './EffortlessResume';
import QuickStepsTimeline from './QuickStepsTimeline';

const QuickStepSection = () => {
  return (
    <div className=" bg-f8f8f8 border border-textGrey rounded-2xl mt-10">
      <div className="fix-width sm:grid sm:grid-cols-2 sm:gap-10 px-4 py-4 sm:px-10 sm:py-[55px]">
        <EffortlessResume />
        <QuickStepsTimeline />
      </div>
    </div>
  );
};

export default QuickStepSection;
