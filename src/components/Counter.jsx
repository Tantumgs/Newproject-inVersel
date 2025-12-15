import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="component counter">
      <h2>Счетчик</h2>
      <div className="counter-display">
        <p className="count-value">{count}</p>
      </div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)} className="btn btn-minus">
          −
        </button>
        <button onClick={() => setCount(count + 1)} className="btn btn-plus">
          +
        </button>
      </div>
    </div>
  );
}
