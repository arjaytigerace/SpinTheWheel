import React, { useState } from "react";

function NumberInput({ onAddNumber }) {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNumber(number);
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        min="1"
        max="100"
      />
      <button type="submit">Add Number</button>
    </form>
  );
}

export default NumberInput;
