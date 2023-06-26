import React, { useState } from "react";
import "./InvestForm.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const InvestForm = (props) => {
  const [userInput, setUserInput] = useState({
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  });
  // const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  // const [enteredYearlyContribution, setEnteredYearlyContributions] =
  //   useState("");
  // const [enteredExpectedReturn, setEnteredExpectedReturn] = useState("");
  // const [enteredDuration, setEnteredDuration] = useState("");



  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput)
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              value={userInput['current-savings']}
              type="number"
              id="current-savings"
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              value={userInput['yearly-contribution']}
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              value={userInput['expected-return']}
              type="number"
              id="expected-return"
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
             value={userInput['duration']}
              type="number"
              id="duration"
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestForm;
