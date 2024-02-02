// UserInput component receives 'onChange' and 'userInput' as props
export default function UserInput({ onChange, userInput }) {
  // Render a section containing user input fields
  return (
    <section id="user-input">
      {/* Group of input fields for initial and annual investments */}
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          {/* Input field for initial investment with controlled value */}
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            // Call the 'onChange' function when the input value changes
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          {/* Input field for annual investment with controlled value */}
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            // Call the 'onChange' function when the input value changes
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      {/* Group of input fields for expected return and duration */}
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          {/* Input field for expected return with controlled value */}
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            // Call the 'onChange' function when the input value changes
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          {/* Input field for investment duration with controlled value */}
          <input
            type="number"
            required
            value={userInput.duration}
            // Call the 'onChange' function when the input value changes
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
