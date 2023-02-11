import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) {
          return alert("Min length should be 5");
        }
        setGuess("");
        console.log(guess);
        addGuess(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        onChange={(e) => {
          setGuess(e.target.value.toLocaleUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
