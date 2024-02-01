import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_STATE);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <main>
        <UserInput onChange={handleChange} userInput={userInput} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
        {inputIsValid && <Results userInput={userInput} />}
      </main>
    </>
  );
}

export default App;
