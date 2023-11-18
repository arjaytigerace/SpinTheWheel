import React from "react";

function WinningNumbersDisplay({ winningNumbers }) {
  return (
    <div>
      <h3>Winning Numbers:</h3>
      <ul>
        {winningNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default WinningNumbersDisplay;
