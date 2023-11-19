import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Wheel from "./Wheel";
import NumberInput from "./NumberInput";
import WinningNumbersDisplay from "./WinningNumbersDisplay";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // A shade of purple
      light: "#9a67ea", // Lighter shade of purple
      dark: "#320b86", // Darker shade of purple
      contrastText: "#fff", // Text color for contrast
    },
    secondary: {
      main: "#ffd700", // Gold color
      light: "#ffdb1c", // Lighter shade of gold
      dark: "#b29500", // Darker shade of gold
      contrastText: "#000", // Text color for contrast
    },
    // ... other palette options like error, warning, etc.
  },
  typography: {
    // ... your typography settings
  },
  // ... other theme customizations
});

function App() {
  const [numbers, setNumbers] = useState([]);
  const [winningNumbers, setWinningNumbers] = useState([]);

  const addNumber = (numbersToAdd) => {
    const newNumbers = numbersToAdd.filter(
      (num) => !numbers.includes(num) && parseInt(num, 10) <= 100
    );
    setNumbers([...numbers, ...newNumbers]);
  };

  const spin = () => {
    if (numbers.length > 0) {
      const index = Math.floor(Math.random() * numbers.length);
      const winningNumber = numbers[index];
      setWinningNumbers([...winningNumbers, winningNumber]);
      setNumbers(numbers.filter((n) => n !== winningNumber));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NumberInput onAddNumber={addNumber} />
        <Wheel numbers={numbers} onSpin={spin} />
        <WinningNumbersDisplay winningNumbers={winningNumbers} />
      </div>
    </ThemeProvider>
  );
}

export default App;
