import React from "react";
import Score from "./Score";

interface correctGuessesProps {
  correctGuesses: string[];
  pangrams: string[];
}

const CorrectGuesses = ({ correctGuesses, pangrams }: correctGuessesProps) => {
  return (
    <section className="w-full md:w-[50%]">
      <Score pangrams={pangrams} correctGuesses={correctGuesses} />
      <section className="border border-[#ccc] p-2 rounded-md h-full mt-3">
        <p>You have found {correctGuesses.length} words</p>
        <ul className="mt-8">
          {correctGuesses.map((correctGuess: string) => (
            <li
              className="capitalize border-b border-gray-300 w-[150px] mb-4"
              key={correctGuess}
            >
              {correctGuess}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default CorrectGuesses;
