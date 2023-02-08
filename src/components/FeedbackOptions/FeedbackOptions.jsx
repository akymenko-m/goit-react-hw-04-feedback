import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  //   console.log(onLeaveFeedback);

  return (
    <div>
      {Object.keys(options).map(key => {
        console.log(key);
        const newKey = key[0].toUpperCase() + key.slice(1);
        console.log(newKey);
        return (
          <button
            key={key}
            onClick={() => {
              console.log(options);
              onLeaveFeedback(key);
            }}
            type="button"
          >
            {newKey}
          </button>
        );
      })}
    </div>
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
