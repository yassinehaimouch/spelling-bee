import React, { useState } from "react";
import Letter from "./Letter";
import { RefreshCcw } from "lucide-react";

interface honeyCambInterface {
  centerLetter: string;
  outerLetters: string[];
  removeLetter: () => void;
  addLetter: (arg: string) => void;
  checkGuess: () => void;
  handleClick: () => void;
  fadeIn: boolean;
}

const Honeycomb = ({
  centerLetter,
  outerLetters,
  removeLetter,
  addLetter,
  checkGuess,
  handleClick,
  fadeIn,
}: honeyCambInterface) => {
  const [randomArray, setRandomArray] = React.useState([0, 1, 2, 3, 4, 5]);
  const [isSpin, setIsSpin] = useState<boolean>(false);

  const shuffle = () => {
    setRandomArray([...randomArray].sort(() => Math.random() - 0.6));
    handleClick();
    setIsSpin(true);
    setTimeout(() => {
      setIsSpin(false);
    }, 1000);
  };
  return (
    <>
      <article className="relative h-[275px]">
        <Letter
          addLetter={addLetter}
          letter={centerLetter}
          isCenter={true}
          fadeIn={fadeIn}
        ></Letter>
        <Letter
          addLetter={addLetter}
          letter={outerLetters[randomArray[0]]}
          isCenter={false}
          fadeIn={fadeIn}
        ></Letter>
        <Letter
          addLetter={addLetter}
          letter={outerLetters[randomArray[1]]}
          isCenter={false}
          fadeIn={fadeIn}
        ></Letter>
        <Letter
          addLetter={addLetter}
          letter={outerLetters[randomArray[2]]}
          isCenter={false}
          fadeIn={fadeIn}
        ></Letter>
        <Letter
          addLetter={addLetter}
          letter={outerLetters[randomArray[3]]}
          isCenter={false}
          fadeIn={fadeIn}
        ></Letter>
        <Letter
          addLetter={addLetter}
          letter={outerLetters[randomArray[4]]}
          isCenter={false}
          fadeIn={fadeIn}
        ></Letter>
        <Letter
          addLetter={addLetter}
          letter={outerLetters[randomArray[5]]}
          isCenter={false}
          fadeIn={fadeIn}
        ></Letter>
      </article>
      <section className="mt-6 text-center flex flex-row items-start justify-center flex-nowrap">
        <button
          className="active:bg-gray-100 disabled:active:bg-white flex justify-center items-center w-[5.5em] min-w-[5.5em] h-[3em] bg-white text-[1em] text-[#333] border tracking-[0.01em] select-none cursor-pointer mx-2 my-0 px-0 py-[15px] rounded-[2.5em] border-solid border-[#dcdcdc]"
          onClick={removeLetter}
        >
          Delete
        </button>
        <button
          className={`active:bg-gray-100 disabled:active:bg-white flex justify-center items-center size-[3em] bg-white text-[1em] text-[#333] border tracking-[0.01em] select-none cursor-pointer mx-2 my-0 p-[11px] rounded-[2.5em] border-solid border-[#dcdcdc] ${
            isSpin ? "animate-customAnimation" : ""
          }`}
          onClick={shuffle}
        >
          <RefreshCcw />
        </button>
        <button
          className="active:bg-gray-100  flex justify-center items-center w-[5.5em] min-w-[5.5em] h-[3em] bg-white text-[1em] text-[#333] border tracking-[0.01em] select-none cursor-pointer mx-2 my-0 px-0 py-[15px] rounded-[2.5em] border-solid border-[#dcdcdc]"
          onClick={checkGuess}
        >
          Enter
        </button>
      </section>
    </>
  );
};

export default Honeycomb;
