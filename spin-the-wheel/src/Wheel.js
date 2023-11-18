import React, { useState } from "react";

function Wheel({ numbers, onSpin }) {
  return (
    <div>
      <button onClick={onSpin}>Spin</button>
      {/* Visualization of the wheel will go here */}
    </div>
  );
}

export default Wheel;
