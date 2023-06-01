import { useState } from "react";

export const HooksCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border m-3 p-4 rounded">
      <div className="sub-title text-center mb-3">Hooks Counter: {count}</div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-success" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};
