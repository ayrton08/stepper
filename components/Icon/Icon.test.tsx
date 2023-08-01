import { render } from '@testing-library/react';
import { Icon } from './Icon';
import { faCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';

describe('<Icon />', () => {
  it('renders FontAwesomeIcon with active state and correct icon', () => {
    const { getByTestId } = render(<Icon state="active" icon={faCreditCard} />);
    const icon = getByTestId('icon');
    expect(icon).toHaveClass('text-xl text-sky-600');
  });
  it('renders FontAwesomeIcon with active state and correct icon', () => {
    const { getByTestId } = render(<Icon state="active" icon={faCreditCard} />);
    const icon = getByTestId('icon');
    expect(icon).toHaveClass('text-xl text-sky-600');
  });
  it('returns the expected output when state is inactive', () => {
    const { getByTestId } = render(<Icon state="inactive" icon={faCheck} />);
    const icon = getByTestId('icon');
    expect(icon).toHaveClass('text-xl text-gray-400');
  });
  it('returns the expected output when state is default', () => {
    const { getByTestId } = render(<Icon state="default" icon={faCheck} />);
    const icon = getByTestId('icon');
    expect(icon).toHaveClass('text-white');
  });
});
