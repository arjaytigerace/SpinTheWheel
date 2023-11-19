import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function WinningNumbersDisplay({ winningNumbers }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Winning Numbers:</h3>
      <List>
        {winningNumbers.map((num, index) => (
          <ListItem key={index}>{num}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default WinningNumbersDisplay;
