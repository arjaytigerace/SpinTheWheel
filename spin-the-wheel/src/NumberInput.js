import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <TextField
        label="Enter numbers"
        variant="outlined"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., 1-9, 1,2,3"
        style={{ marginRight: "10px" }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Numbers
      </Button>
    </form>
  );
}

export default NumberInput;
