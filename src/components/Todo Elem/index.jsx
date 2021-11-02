import React from 'react';
import './style.css';

const TodoElem = () => {
  return (
    <div className={'TodoEl'}>
      <span>{'text...'}</span>
      <br />
      <button className={'elemButEdit'}>edit</button>
      <button className={'elemButDel'}>del</button>
    </div>
  );
};

export default TodoElem;
