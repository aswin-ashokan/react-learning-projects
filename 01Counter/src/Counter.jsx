// import React from 'react'

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
