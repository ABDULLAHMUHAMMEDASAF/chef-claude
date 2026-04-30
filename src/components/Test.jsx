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
            style={{ display: count === 0 ? "none" : "inline-block" }}
            className="minus"
            aria-label="Decrease count"
          >
            <span className="minus-span"></span>
          </button>
          <h1 className="count">{count}</h1>
          <button
            onClick={plusCount}
            style={{ display: count === 10 ? "none" : "inline-block" }}
            className="plus"
            aria-label="Increase count"
          >
            <span className="plus-span"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
