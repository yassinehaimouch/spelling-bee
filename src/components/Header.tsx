import React from "react";

interface headerProps {
  date: string;
}

const Header = ({ date }: headerProps) => {
  return (
    <header className="border-b border-gray-400 px-2 lg:px-64 py-6">
      <h1 className="text-3xl flex items-end gap-4 font-semibold">
        Spelling Bee <p className="font-light text-lg">{date}</p>
      </h1>
      <p className="mt-2">Edited by Yassine Haimouch</p>
    </header>
  );
};

export default Header;
