# Investment Calculator

This project is a simple tutorial practice project for practicing React Essentials. It is part of an online course on Udemy, instructed by Maximilian Schwarzmüller.

## Features

- **User Input**: Easily input your initial investment, annual investment, expected return, and investment duration.

- **Dynamic Results Display**: See detailed investment results dynamically calculated based on user input.

- **Clear Visualization**: Results are presented in a table format, providing a clear overview of each year's investment data.

- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Open your browser and navigate to `http://localhost:5173/`.

## Usage

1. Input your investment details in the User Input section.
2. View the investment results in the Results section.
3. Explore the dynamic table displaying investment data for each year.

## State Management

The `userInput` state is lifted to the App component, allowing it to be shared between the UserInput and Results components. This ensures consistency and synchronization between user input and displayed results.

## Project Structure

- **util Folder**: Contains the `investment.js` file responsible for calculating investment results and formatting currency numbers.

## Credits

- Instructor: Maximilian Schwarzmüller
- Online Course: React Essentials on Udemy

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
