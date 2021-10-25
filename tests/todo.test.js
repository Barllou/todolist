const todo = require('../src/model/todo');

test('get message', () => {
  const message = 'text';
  const todoItem = todo.create(message);

  expect(todo.getMessage(todoItem)).toEqual(message);
});

test('get isDone', () => {
  const todoItem = todo.create('some text');

  expect(todo.getIsDone(todoItem)).toEqual(false);
});

test('toggle', () => {
  const todoItem = todo.create('todo');
  const newTodoItem = todo.toggle(todoItem);

  expect(todo.getIsDone(todoItem)).not.toEqual(todo.getIsDone(newTodoItem));
});

test('edit', () => {
  const text = 'todo';
  const newText = 'new todo';
  const todoItem = todo.create(text);
  const newTodoItem = todo.edit(todoItem, newText);

  expect(todo.getMessage(todoItem)).not.toEqual(todo.getMessage(newTodoItem)) &&
    expect(todo.getMessage(todoItem)).toEqual(newText);
});
