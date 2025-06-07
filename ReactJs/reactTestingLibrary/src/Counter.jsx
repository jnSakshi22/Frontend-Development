import React, { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 data-testid="display">Counter: {counter}</h1>
      <button
        type="button"
        data-testid="increase"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        type="button"
        data-testid="decrease"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}
