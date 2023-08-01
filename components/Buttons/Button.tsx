import { FC, MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  label: string;
}

export const Button: FC<Props> = ({ onClick, disabled, label }) => {
  return (
    <button
      className={`btn ${disabled && 'disabled:opacity-50'} `}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
