import "./Test.css";
import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  const minusCount = () => {
    if (count === 0) return;
    setCount((count) => count - 1);
  };
  const plusCount = () => setCount((count) => count + 1);

  return (
    <>
      <div className="container">
        <h1>How many times will Bob say state in this section?</h1>
        <div className="counter">
          <button
            onClick={minusCount}
            style={{ visibility: count === 0 ? "hidden" : "visible" }}
            className="minus"
            aria-label="Decrease count"
          >
            <span>-</span>
          </button>
          <h1 className="count">{count}</h1>
          <button
            onClick={plusCount}
            style={{ visibility: count === 10 ? "hidden" : "visible" }}
            className="plus"
            aria-label="Increase count"
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
