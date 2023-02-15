import { useState } from 'react';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Main } from './App.styled';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };  // на пам'ять

  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setOptions(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
    // this.setState(prevState => ({
    //   [option]: prevState[option] + 1,
    // }));   // на пам'ять
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((options.good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  return (
    <Main>
      <Title />

      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            options={options}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Main>
  );
};
