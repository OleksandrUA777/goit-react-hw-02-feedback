import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const types = [];
  for (const key in options) {
    types.push(key);
  }
  return types.map(type => {
    return (
      <li key={type}>
        <Button onClick={onLeaveFeedback} name={type}>
          {type}
        </Button>
      </li>
    );
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};
