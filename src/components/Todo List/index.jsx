import React from 'react';
import TodoElem from '../Todo Elem';
import './style.css';

const TodoList = () => {
  return (
    <div className={'todoList'}>
      <TodoElem />
      <TodoElem />
    </div>
  );
};

export default TodoList;
