import PropTypes from 'prop-types';
import { StatisticsList, Item, ItemContent } from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  const { good, neutral, bad } = options;
  // console.log(good, neutral, bad, total, positivePercentage);
  return (
    <>
      <StatisticsList>
        <Item>
          Good:
          <ItemContent> {good}</ItemContent>
        </Item>
        <Item>
          Neutral:
          <ItemContent> {neutral}</ItemContent>
        </Item>
        <Item>
          Bad:
          <ItemContent> {bad}</ItemContent>
        </Item>
        <Item>
          Total:
          <ItemContent> {total()}</ItemContent>
        </Item>
        <Item>
          Positive feedback:
          <ItemContent> {positivePercentage()}%</ItemContent>
        </Item>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
