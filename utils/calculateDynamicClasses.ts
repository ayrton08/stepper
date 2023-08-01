import { State } from '@/components/Step/Step';

export const calculateDynamicClasses = (
  activeStep: number,
  position: number,
  complete: boolean
): State => {
  if (activeStep === position && !complete) {
    return 'active';
  }
  if (position < activeStep || complete) {
    return 'default';
  }

  return 'inactive';
};
