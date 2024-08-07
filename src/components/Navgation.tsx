import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const Navgation = () => {
  return (
    <nav className="px-2 lg:px-64 border-b border-gray-400">
      <ul className="flex gap-3 justify-end">
        <li>
          <Dialog>
            <DialogTrigger className="p-3 hover:bg-gray-200">
              How to play
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-start">
                  How to Play Spelling Bee
                </DialogTitle>
                <DialogDescription className="font-semibold text-start text-black mb-6 text-lg">
                  Create words using letters from the hive.
                </DialogDescription>
              </DialogHeader>
              <section className="text-gray-700 text-base">
                <div className="list-disc mb-4">
                  <li>Words must contain at least 4 letters.</li>
                  <li>Words must include the center letter.</li>
                  <li>
                    Our word list does not include words that are obscure,
                    hyphenated, or proper nouns.
                  </li>
                  <li>No cussing either, sorry.</li>
                  <li>Letters can be used more than once.</li>
                </div>
                <span className="font-semibold text-black">
                  Score points to increase your rating.
                </span>
                <div className="list-disc">
                  <li>4-letter words are worth 1 point each.</li>
                  <li>Longer words earn 1 point per letter.</li>
                  <li>
                    Each puzzle includes at least one “pangram” which uses every
                    letter. These are worth 7 extra points!
                  </li>
                </div>
              </section>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    </nav>
  );
};

export default Navgation;
