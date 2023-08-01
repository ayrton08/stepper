import { useState } from 'react';

import {
  faCreditCard,
  faShippingFast,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Stepper from '../Stepper/Stepper';
import { Step } from '../Step/Step';
import { Button } from '../Buttons/Button';
import { Icon } from '../Icon/Icon';

import { calculateDynamicClasses } from '../../utils/calculateDynamicClasses';

export interface Step {
  icon: IconDefinition;
  name: string;
}

const steps = [
  { name: 'User', icon: faUser },
  { name: 'Shipping', icon: faShippingFast },
  { name: 'Payment', icon: faCreditCard },
];

const WrapperStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepperCompleted, setStepperCompleted] = useState(false);

  const handleStepChange = (position: number) => {
    setActiveStep(position);
    setStepperCompleted(false);
  };

  const handleNext = () => {
    const isLastStep = steps.length === activeStep + 1;
    setActiveStep(isLastStep ? activeStep : activeStep + 1);
    setStepperCompleted(isLastStep);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    setStepperCompleted(false);
  };

  const isFirstStep = activeStep === 0;
  const label = steps.length - 1 <= activeStep ? 'Finish' : 'Next';

  return (
    <div className="w-full max-w-screen-lg flex flex-col gap-10">
      <Stepper>
        {steps?.map((step, index) => (
          <Step
            stateStyles={`${calculateDynamicClasses(
              activeStep,
              index,
              stepperCompleted
            )}`}
            key={index}
            label={step.name}
            onClick={() => handleStepChange(index)}
          >
            <Icon
              state={`${calculateDynamicClasses(
                activeStep,
                index,
                stepperCompleted
              )}`}
              icon={step.icon}
            />
          </Step>
        ))}
      </Stepper>
      <div className="flex gap-10 justify-center">
        <Button label="Prev" disabled={isFirstStep} onClick={handlePrev} />
        <Button
          label={label}
          disabled={stepperCompleted}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default WrapperStepper;
