import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Step } from './Step';

describe('<Step />', () => {
  const props = {
    children: 'Child',
    label: 'Label',
    onClick: jest.fn(),
    stateStyles: 'active' as const,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should displays children and label', () => {
    const { getByText } = render(<Step {...props} />);
    expect(getByText(props.children)).toBeInTheDocument();
    expect(getByText(props.label)).toBeInTheDocument();
  });

  it('should applies active class when currentStep equals position', () => {
    const { getByTestId } = render(<Step {...props} />);
    expect(getByTestId('step-item')).toHaveClass('active');
  });

  it('onClick function is called when step item is clicked', () => {
    const { getByTestId } = render(<Step {...props} />);
    fireEvent.click(getByTestId('step-item'));
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should have the default class when position is less than current step or complete is true', () => {
    const defaultProps = {
      ...props,
      stateStyles: 'default' as const,
    };

    const { getByTestId } = render(<Step {...defaultProps} />);

    expect(getByTestId('step-item').classList.contains('default')).toBe(true);
  });
});
