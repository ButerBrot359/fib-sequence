import React, { useState } from "react";
import { FlexDirection, ISequence } from "./model";
import "./App.css";

function App() {
  let [fibSequence, setFibSequence] = useState<number[]>([]);

  const addNumber = () => {
    if (fibSequence.length < 2) {
      setFibSequence((prev) => [...prev, 1]);
    } else {
      let lenOfSequence = fibSequence.length;
      let lastNum = fibSequence[lenOfSequence - 1];
      let beforeLastNum = fibSequence[lenOfSequence - 2];

      setFibSequence((prev) => [...prev, lastNum + beforeLastNum]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-header__button" onClick={addNumber}>
          Add number
        </button>
      </header>
      <main className="App-main">
        <FibSequence
          sequence={fibSequence}
          direction={0}
          defaultSeq={[...fibSequence]}
        />
      </main>
    </div>
  );
}

const flexDirections = ["row", "column", "row-reverse", "column-reverse"];

const FibSequence: React.FC<ISequence> = ({
  sequence = [],
  defaultSeq = [],
  direction = 0,
}) => {
  if (sequence.length === 0) return <></>;

  let biggestNumber = sequence[sequence.length - 1];
  let nextDirection = 0;

  if (!(defaultSeq.length <= 2)) {
    nextDirection = direction === 3 ? 0 : direction + 1;
  }

  if (sequence.length === 2) {
    return (
      <>
        <div
          className="fib_block"
          style={{ flexDirection: flexDirections[direction] as FlexDirection }}
        >
          <div className="fib_number">{biggestNumber}</div>
          <div className="fib_number">{biggestNumber}</div>
        </div>
      </>
    );
  }

  return (
    <div
      className="fib_block"
      style={{ flexDirection: flexDirections[direction] as FlexDirection }}
    >
      <div className="fib_number">{biggestNumber}</div>
      <FibSequence
        sequence={sequence.slice(0, sequence.length - 1)}
        direction={nextDirection}
        defaultSeq={defaultSeq}
      />
    </div>
  );
};

export default App;
