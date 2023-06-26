import React, { useState } from "react";
import InvestForm from "./components/InvestForm";
import InvestTable from "./components/InvestTable";
import Logo from "./components/Logo";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
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
      {!userInput && <p>No Investment calculated.</p>}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {userInput && <InvestTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
