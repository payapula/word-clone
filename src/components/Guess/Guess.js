import React from "react";
import { range } from "../../utils";

function Guess({ guess = "" }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {guess[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
