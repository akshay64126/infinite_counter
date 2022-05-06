import { useState, useEffect } from "react";
import "./styles.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [stopCounter, setStopCounter] = useState();
  const startInfiniteCounter = () => {
    return setTimeout(() => {
      timeout_1sec();
    }, 1000);
  };

  function timeout_1sec() {
    setCount((previous_count) => previous_count + 1);
  }

  useEffect(() => {
    clearTimeout(stopCounter);
    setStopCounter(startInfiniteCounter());
    return () => {
      return clearTimeout(stopCounter);
    };
  }, [count]);
  return (
    <div className="App">
      <h1>Infinite Counter</h1>
      <h1>{count}</h1>
      <button
        class="btn"
        onClick={() => {
          startInfiniteCounter();
        }}
      >
        Start
      </button>
      <button
        class="btn"
        onClick={() => {
          clearTimeout(stopCounter);
        }}
      >
        Stop
      </button>
    </div>
  );
}
