import { IconDefinition, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { State } from '../Step/Step';

interface Props {
  state: State;
  icon: IconDefinition;
}

export const Icon = ({ state, icon }: Props) => {
  if (state === 'active') {
    return (
      <FontAwesomeIcon
        data-testid="icon"
        icon={icon}
        className="text-xl text-sky-600"
      />
    );
  }

  if (state === 'inactive') {
    return (
      <FontAwesomeIcon
        data-testid="icon"
        icon={icon}
        className="text-xl text-gray-400"
      />
    );
  }

  return (
    <FontAwesomeIcon data-testid="icon" icon={faCheck} className="text-white" />
  );
};
