// Import the 'logo' image from the specified file path
import logo from "../assets/investment-calculator-logo.png";

// Header component responsible for displaying the page header
export default function Header() {
  // Render the header section with the logo and title
  return (
    <header id="header">
      {/* Display the investment calculator logo using the imported image */}
      <img src={logo} alt="Investment Calculator Logo" />
      {/* Display the title of the page */}
      <h1>Investment Calculator</h1>
    </header>
  );
}
