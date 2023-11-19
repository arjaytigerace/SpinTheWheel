import React from "react";

function Wheel({ numbers, onSpin }) {
  return (
    <div>
      <button onClick={onSpin}>Spin</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wheel;
