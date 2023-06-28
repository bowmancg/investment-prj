import React, { useState } from "react";
import InvestForm from "./components/InvestForm";
import InvestTable from "./components/InvestTable";
import Logo from "./components/Logo";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // const investData = {
    //   currentSavings: +enteredCurrentSavings,
    //   yearlyContribution: +enteredYearlyContribution,
    //   expectedReturn: +enteredExpectedReturn / 100,
    //   duration: +enteredDuration,
    // };
    // props.onCalculate(investData);
    // do something with yearlyData ...
    // call props.onCalculate
    // setResults();
  }

  return (
    <div>
      <header>
        {/* <Logo /> */}
      </header>
      <InvestForm onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign: 'center'}}>No Investment calculated.</p>}
      {userInput && <InvestTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
