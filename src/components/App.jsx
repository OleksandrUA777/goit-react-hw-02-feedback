import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    let total = 0;
    const obj = this.state;
    for (const key in obj) {
      total += obj[key];
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const result = Math.round(100 * (this.state.good / total)) + '%';
    return result;
  };
  goodBtnClickHandler = event => {
    //prevState = {good: 0}
    //name = good

    //[name] : prevState[name] + 1
    // good: prevState[значення з ключем 'good'] + 1

    // name: 5 => в обʼєкті: {name: 5})
    //[name]: 5 =>  в об'кті: {good: 5}
    const name = event.currentTarget.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.goodBtnClickHandler}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
