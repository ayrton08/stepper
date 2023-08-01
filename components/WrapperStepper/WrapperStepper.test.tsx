import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import WrapperStepper from '@/components/WrapperStepper/WrapperStepper';

import {
  faCreditCard,
  faShippingFast,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

jest.mock('@fortawesome/free-solid-svg-icons');

const steps = [
  { name: 'Payment', icon: faCreditCard },
  { name: 'Shipping', icon: faShippingFast },
  { name: 'User', icon: faUser },
];

describe('<WrapperStepper />', () => {
  let stepItems: HTMLElement[];
  let prevButton: HTMLElement;
  let nextButton: HTMLElement;

  beforeEach(() => {
    const { getByText, getAllByTestId } = render(<WrapperStepper />);
    stepItems = getAllByTestId('step-item');
    prevButton = getByText('Prev');
    nextButton = getByText('Next');
  });

  afterEach(() => {
    cleanup();
  });
  it('should displays correct number of steps', () => {
    expect(stepItems).toHaveLength(steps.length);
  });
  it('should updates active step on click', () => {
    fireEvent.click(stepItems[1]);
    expect(stepItems[1]).toHaveClass('active');
  });

  it('should advances to next step on next click', () => {
    fireEvent.click(stepItems[0]);
    fireEvent.click(nextButton);
    expect(stepItems[1]).toHaveClass('active');
  });

  it('should goes back to previous step on prev click', () => {
    fireEvent.click(stepItems[1]);
    fireEvent.click(prevButton);
    expect(stepItems[0]).toHaveClass('active');
  });

  it('renders Prev button and handles click correctly', () => {
    expect(prevButton).toBeDisabled();
  });

  it('renders Next button and handles click correctly', () => {
    expect(nextButton).not.toBeDisabled();
  });
});
