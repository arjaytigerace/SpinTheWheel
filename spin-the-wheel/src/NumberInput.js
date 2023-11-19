import React, { useState } from "react";

function NumberInput({ onAddNumber }) {
  const [input, setInput] = useState("");

  const formatNumber = (num) => {
    if (num < 10) return `00${num}`;
    if (num < 100) return `0${num}`;
    return `${num}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberRange = input.split(/,|-/).map(Number);
    const numbersToAdd = [];

    for (
      let i = numberRange[0];
      i <= numberRange[numberRange.length - 1];
      i++
    ) {
      numbersToAdd.push(formatNumber(i));
    }

    onAddNumber(numbersToAdd);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers (e.g., 1-9, 1,2,3)"
      />
      <button type="submit">Add Numbers</button>
    </form>
  );
}

export default NumberInput;
