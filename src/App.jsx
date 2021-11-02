/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, Component } from 'react';
import './styles/App.css';

import Input from './components/input';
import ButAdd from './components/Button add';
import TodoList from './components/Todo List';
import ButClear from './components/Button clear';

function App() {
  return (
    <div className={'divMain'}>
      <Input />
      <ButAdd />
      <TodoList />
      <ButClear />
    </div>
  );
}

export default App;

/**/
