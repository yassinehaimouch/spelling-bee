import React from "react";

interface guessInterface {
  guess: string;
  centerLetter: string;
  message: string | undefined;
}

const Guess = ({ guess, centerLetter, message }: guessInterface) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-[100px]">
        {message && (
          <p className=" fixed -mt-20 bg-black text-white px-3 py-1 rounded font-light text-sm">
            {message}
          </p>
        )}
        {guess.length === 0 ? (
          <p className="uppercase leading-none select-none text-gray-400 text-center font-semibold text-3xl tracking-wide focus:outline-none">
            click
          </p>
        ) : (
          <p>
            {guess.split("").map((c: string, index: number) => {
              const style = c === centerLetter ? "text-yellow-300" : "";
              return (
                <b
                  key={index + c}
                  className={`uppercase text-center font-semibold text-3xl tracking-wide focus:outline-none ${style}`}
                >
                  {c}
                </b>
              );
            })}
          </p>
        )}
      </section>
    </>
  );
};

export default Guess;
