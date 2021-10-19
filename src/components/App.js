/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid';

import '../styles/App.css';

const initProds = [
  { id: nanoid(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: nanoid(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: nanoid(), name: 'prod3', catg: 'catg3', cost: 300 },
];

function createObj() {
  return {
    id: nanoid(),
    name: '',
    catg: '',
    cost: '',
  };
}

function App() {
  const [elems, setElems] = useState(initProds);
  const [obj, setObj] = useState(createObj());

  const result = elems.map((el) => {
    return (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.catg}</td>
        <td>{el.cost}</td>
        <td>
          <button onClick={() => delFunc(el.id)}>del</button>
        </td>
      </tr>
    );
  });

  function changeValue(val, event) {
    setObj({ ...obj, [val]: event.target.value });
  }

  function addElem() {
    setElems([...elems, obj]);
    setObj(createObj());
  }

  function delFunc(id) {
    setElems(elems.filter((el) => el.id !== id));
  }

  return (
    <>
      <table>
        <thead>
          <th>{'key'}</th>
          <th>{'name'}</th>
          <th>{'category'}</th>
          <th>{'cost'}</th>
          <th>{'delete'}</th>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <input
        placeholder={'name...'}
        value={obj.name}
        onChange={(event) => changeValue('name', event)}
      />
      <input
        placeholder={'category...'}
        value={obj.catg}
        onChange={(event) => changeValue('catg', event)}
      />
      <input
        placeholder={'cost...'}
        value={obj.cost}
        onChange={(event) => changeValue('cost', event)}
      />
      <button onClick={addElem}>add</button>
    </>
  );
}

export default App;

/*1.Возьмите таблицу с продуктами initProds. В конце каждого ряда сделайте ячейку, в которой будет кнопка для удаления продукта.
  2.Возьмите таблицу с продуктами initProds. Сделайте под таблицей инпуты для добавления нового продукта.
  3.Сделайте так, чтобы текст инпутов очищался после добавления продуктов.
  ВЕРСИЯ 2*/
