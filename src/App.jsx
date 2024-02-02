// Import the 'useState' hook from the 'react' library
import { useState } from "react";

// Import the 'Header' component from the specified file
import Header from "./components/Header.jsx";

// Import the 'UserInput' component from the specified file
import UserInput from "./components/UserInput.jsx";

// Import the 'Results' component from the specified file
import Results from "./components/Results.jsx";

// Define the initial state for the application
const INITIAL_STATE = {
  initialInvestment: 10000, // Initial investment amount
  annualInvestment: 1200, // Annual investment amount
  expectedReturn: 6, // Expected annual return percentage
  duration: 10, // Investment duration in years
};

// Define the main App component
function App() {
  // Set up state using the 'useState' hook with the initial state
  const [userInput, setUserInput] = useState(INITIAL_STATE);

  // Function to handle changes in user input and update state accordingly
  function handleChange(inputIdentifier, newValue) {
    // Update state based on previous state using the spread operator
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // Convert the input value to a number and update the corresponding field
      };
    });
  }

  // Check if the input duration is valid (greater than or equal to 1)
  const inputIsValid = userInput.duration >= 1;

  // Render the application components
  return (
    <>
      <Header /> {/* Render the Header component */}
      <main>
        {/* Render the UserInput component with specified props */}
        <UserInput onChange={handleChange} userInput={userInput} />
        {/* Display an error message if input duration is not valid */}
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
        {/* Render the Results component if input duration is valid */}
        {inputIsValid && <Results userInput={userInput} />}
      </main>
    </>
  );
}

// Export the App component as the default export of this module
export default App;
