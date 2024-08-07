import React from "react";

interface scoreProps {
  correctGuesses: string[];
  pangrams: string[];
}

const Score = ({ correctGuesses, pangrams }: scoreProps) => {
  let score: number = 0;
  correctGuesses.map((correctGuess: string) => {
    if (pangrams.includes(correctGuess)) {
      score += correctGuess.length + 7;
    } else if (correctGuess.length === 4) {
      score++;
    } else {
      score += correctGuess.length;
    }
  });
  return (
    <p>
      <span className="font-semibold">Score:</span> {score}
    </p>
  );
};

export default Score;
