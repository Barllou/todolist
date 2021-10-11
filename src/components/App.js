import React, { useState } from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid';

import '../styles/App.css';

function App() {
  const [arr, setArr] = useState([1, 2, 3]);
  const index = 1;

  const res = arr.map((el, index) => <p key={index}>{el}</p>);

  function funcSort() {
    const copy = Object.assign([], arr).reverse();
    setArr(copy);
  }

  return (
    <>
      <button onClick={() => setArr([...arr, arr.length + 1])}>+</button>
      <button onClick={() => setArr([...arr.slice(0, arr.length - 1)])}>-</button>
      <button onClick={() => setArr([...arr.slice(0, index), '!', ...arr.slice(index + 1)])}>change</button>
      <button onClick={() => funcSort()}>sort</button>
      {res}
    </>
  );
}

export default App;
