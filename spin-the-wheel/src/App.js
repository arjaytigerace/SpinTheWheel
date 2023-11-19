import React, { useState } from "react";
import Wheel from "./Wheel";
import NumberInput from "./NumberInput";
import WinningNumbersDisplay from "./WinningNumbersDisplay";

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
    <div>
      <NumberInput onAddNumber={addNumber} />
      <Wheel numbers={numbers} onSpin={spin} />
      <WinningNumbersDisplay winningNumbers={winningNumbers} />
    </div>
  );
}

export default App;
