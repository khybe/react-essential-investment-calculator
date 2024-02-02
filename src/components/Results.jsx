// Import necessary functions and objects from the 'investment' module
import { calculateInvestmentResults, formatter } from "../util/investment.js";

// Results component receives 'userInput' as a prop
export default function Results({ userInput }) {
  // Calculate investment results based on user input
  const resultsData = calculateInvestmentResults(userInput);

  // Calculate the initial investment based on the first year's data
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  // Render a table displaying investment results
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through each year's data and render corresponding table rows */}
        {resultsData.map((yearData) => {
          // Calculate total interest for the current year
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          // Calculate total amount invested for the current year
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          // Render a table row for the current year's data
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
