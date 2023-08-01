import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Stepper = ({ children }: Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 md:gap-0 h-auto">
      {children}
    </div>
  );
};

export default Stepper;
