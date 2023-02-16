import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../..//game-helpers";

function Guess({ guess = "", answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        const guessResult = result?.[num];
        const statusClass = guessResult?.status ?? "";
        return (
          <span key={num} className={`cell ${statusClass}`}>
            {guess[num]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
