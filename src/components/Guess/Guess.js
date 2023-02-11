import React from "react";

function Guess({ guess = [] }) {
  const [a, b, c, d, e] = guess;
  return (
    <p className="guess">
      <span className="cell">{a}</span>
      <span className="cell">{b}</span>
      <span className="cell">{c}</span>
      <span className="cell">{d}</span>
      <span className="cell">{e}</span>
    </p>
  );
}

export default Guess;
