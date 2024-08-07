import React, { useEffect, useState } from "react";
import Score from "./Score";
import { ChevronUp } from "lucide-react";

interface correctGuessesProps {
  correctGuesses: string[];
  pangrams: string[];
}

const CorrectGuesses = ({ correctGuesses, pangrams }: correctGuessesProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (windowWidth > 600) {
      setIsOpen(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <section className="w-full md:w-[50%]">
      <Score pangrams={pangrams} correctGuesses={correctGuesses} />
      <section className="border border-[#ccc] p-2 rounded-md h-full mt-3">
        <div className="flex items-center justify-between">
          <p>You have found {correctGuesses.length} words</p>
          <button
            className={`${
              isOpen
                ? "rotate-180 transition-all duration-300"
                : "transition-all duration-300"
            } md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronUp />
          </button>
        </div>
        {isOpen && (
          <ul className="mt-8">
            {correctGuesses.map((correctGuess: string) => (
              <li
                className="capitalize border-b border-gray-300 w-[150px] mb-5"
                key={correctGuess}
              >
                {correctGuess}
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default CorrectGuesses;
