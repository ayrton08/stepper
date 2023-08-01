import { FC, MouseEventHandler, ReactNode } from 'react';

export type State = 'active' | 'inactive' | 'default';

interface Props {
  children: ReactNode;
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  stateStyles: State;
}

export const Step: FC<Props> = ({ children, label, onClick, stateStyles }) => {
  return (
    <div
      data-testid="step-item"
      onClick={onClick}
      className={`step-item ${stateStyles}`}
    >
      <div className="step">{children}</div>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};
