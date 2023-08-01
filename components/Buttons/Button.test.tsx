import { fireEvent, render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  const onClick = jest.fn();
  it('renders button with label and onClick function', () => {
    const { getByText } = render(
      <Button onClick={onClick} disabled={false} label="Test Label" />
    );
    const button = getByText('Test Label');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('button not disabled when disabled prop is false', () => {
    const { getByText } = render(
      <Button onClick={onClick} disabled={false} label="Test Label" />
    );
    const button = getByText('Test Label');
    expect(button).not.toBeDisabled();
  });
});
