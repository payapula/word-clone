import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../..//game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);
console.log("answer", answer);

function Guess({ guess = "" }) {
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
