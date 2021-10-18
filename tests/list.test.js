const list = require('../src/model/list');
const todo = require('../src/model/todo');

const firstTodo = todo.create('first todo');
const secondTodo = todo.create('second todo');
const todos = [firstTodo, secondTodo];

test('add', () => {
  const listEl = list.create();

  expect(list.add(listEl, firstTodo)).toContain(firstTodo);
});

test('remove', () => {
  const listEl = list.create();

  const newListEl = list.add(listEl, firstTodo);

  expect(list.remove(newListEl, firstTodo)).not.toContain(firstTodo);
});

test('clear', () => {
  const listEl = list.create(todos);

  expect(list.clear(listEl)).toHaveLength(0);
});

test('getNth', () => {
  const listEl = list.create(todos);

  expect(list.getNth(listEl, 1)).toBe(secondTodo);
});
