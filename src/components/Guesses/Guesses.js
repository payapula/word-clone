import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses, answer, setGameState }) {
  console.log("guesses", guesses);
  const boxes = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {boxes.map((row) => (
        <Guess
          key={row}
          guess={guesses[row]}
          answer={answer}
          setGameState={setGameState}
        />
      ))}
    </div>
  );
}
export default Guesses;
