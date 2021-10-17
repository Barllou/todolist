const list = require('../src/model/list');

const todo = { message: '', isDone: true };
const todo2 = { message: 'text', isDone: false };
const todos = [todo, todo2];

test('create', () => {
  expect(list.create(todos)).toBe(todos);
});

test('add', () => {
  const listEl = list.create([]);

  expect(list.add(listEl, todo)).toContain(todo);
});

test('remove', () => {
  const listEl = list.create([]);

  const newListEl = list.add(listEl, todo);
  console.log(newListEl, list.remove(newListEl, todo));

  expect(list.remove(newListEl, todo)).not.toContain(todo);
});

test('clear', () => {
  const listEl = list.create(todos);

  expect(list.clear(listEl)).toHaveLength(0);
});
