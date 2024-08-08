"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Honeycomb from "@/components/Honeycomb";
import Guess from "@/components/Guess";
import CorrectGuesses from "@/components/CorrectGuesses";
import Navgation from "@/components/Navgation";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Image from "next/image";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      tweenDuration={500}
      width={width}
      height={height}
      recycle={false}
    />
  );
};

export default function Home() {
  const [data, setData] = useState<any>();
  const [guess, setGuess] = useState<string>("");
  const [correctGuesses, setCorrectGuesses] = useState<any>([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 1000);
  };

  const addLetter = (letter: string) => {
    setGuess((g) => g + letter);
  };

  const removeLetter = () => {
    setGuess(guess.slice(0, -1));
  };

  const addCorrectGuesses = (correctGuess: string) => {
    setCorrectGuesses([...correctGuesses, correctGuess]);
  };

  const checkGuess = () => {
    if (guess.length === 0) {
      setMessage("");
    } else if (guess.length <= 3) {
      setMessage("It's short!");
    } else if (correctGuesses.includes(guess)) {
      setMessage("Already found");
    } else if (data.answers && data.answers.includes(guess)) {
      setMessage("Great!");
      addCorrectGuesses(guess);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } else {
      setMessage("Not in the list!");
    }

    setTimeout(() => setMessage(undefined), 1500);
    setGuess("");
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("api/fetchData", {
        headers: { "Content-Type": "application/json" },
      });
      const json = await result.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
          {showConfetti && <ConfettiComponent />}
          <Header date={data.displayDate} />
          <Navgation />
          <main className="flex justify-between flex-col-reverse px-5 md:flex-row lg:px-64 my-8 lg:my-32">
            <section className="relative flex items-center justify-center">
              <div className="w-[80vw] max-w-[290px]">
                <div className="w-[90%] my-[25px] mx-auto">
                  <Guess
                    message={message}
                    guess={guess}
                    centerLetter={data.centerLetter}
                  />
                  <Honeycomb
                    outerLetters={data.outerLetters}
                    centerLetter={data.centerLetter}
                    removeLetter={removeLetter}
                    addLetter={addLetter}
                    checkGuess={checkGuess}
                    handleClick={handleClick}
                    fadeIn={fadeIn}
                  />
                </div>
              </div>
            </section>
            <CorrectGuesses
              pangrams={data.pangrams}
              correctGuesses={correctGuesses}
            />
          </main>
        </>
      ) : (
        <section className="h-[100vh] w-[100vw] flex items-center justify-center">
          <Image src="bee.svg" alt="bee" width={100} height={100} />
        </section>
      )}
    </>
  );
}
