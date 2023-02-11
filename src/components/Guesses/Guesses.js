import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses }) {
  const boxes = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {boxes.map((row) => (
        <Guess key={row} guess={guesses[row]} />
      ))}
    </div>
  );
}
export default Guesses;
