import React from "react";

interface letterProps {
  letter: string;
  isCenter: boolean;
  addLetter: (letter: string) => void;
  fadeIn: boolean;
}

const Letter = ({ letter, isCenter, addLetter, fadeIn }: letterProps) => {
  return (
    <svg
      className={
        "cell select-none" + (isCenter ? " center-letter" : " outer-letter")
      }
      viewBox="0 0 120 103.92304845413263"
      onClick={() => addLetter(letter)}
    >
      <polygon
        className="cell-fill"
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
        stroke="white"
        strokeWidth="7.5"
      ></polygon>
      <text
        className={`cell-letter ${fadeIn && !isCenter ? "animate-fadeIn" : ""}`}
        x="50%"
        y="50%"
        dy="0.35em"
      >
        {letter}
      </text>
    </svg>
  );
};

export default Letter;
