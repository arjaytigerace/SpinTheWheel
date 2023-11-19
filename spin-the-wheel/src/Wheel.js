import React from "react";
import Button from "@mui/material/Button";

function Wheel({ numbers, onSpin }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <Button variant="contained" color="secondary" onClick={onSpin}>
        Spin
      </Button>
      {/* Visualization of the wheel will go here */}
    </div>
  );
}

export default Wheel;
