import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {Object.keys(options).map(key => {
        const newKey = key[0].toUpperCase() + key.slice(1);
        return (
          <Button key={key} onClick={() => onLeaveFeedback(key)} type="button">
            {newKey}
          </Button>
        );
      })}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
