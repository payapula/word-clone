import React from "react";

import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("none");

  function addGuess(guess) {
    const guessList = [...guesses, guess];
    setGuesses(guessList);

    if (answer === guess) {
      setGameState("won");
    } else if (guessList.length === 6) {
      setGameState("lost");
    }
  }

  return (
    <>
      {gameState === "won" ? (
        <Banner status={"happy"}>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length} {`guess${guesses.length > 1 ? "es" : ""}`}
            </strong>
            .
          </p>
        </Banner>
      ) : gameState === "lost" ? (
        <Banner status={"sad"}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      ) : null}
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameState={gameState} />
    </>
  );
}

export default Game;
