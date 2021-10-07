import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid';

import '../styles/App.css';

function fRes() {
  
}

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');

  return <>
    <input value={value1} onChange={event => setValue1(event.target.value)} />
    <input value={value2} onChange={event => setValue2(event.target.value)} />
    <input value={value3} onChange={event => setValue3(event.target.value)} />
    <input value={value4} onChange={event => setValue4(event.target.value)} />
    <input value={value5} onChange={event => setValue5(event.target.value)} />
    <p></p>
  </>
}

export default App;

/*Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел.*/
