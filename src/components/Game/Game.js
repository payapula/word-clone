import React from "react";

import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
