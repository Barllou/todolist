const list = require('../src/model/list');

const todo = { message: '', isDone: true };
const todo2 = { message: 'text', isDone: false };
const listEl = [todo, todo2];

test('create', () => {
  expect(list.create(todo)).toBe(todo);
});

test('add', () => {
  expect(list.add(listEl, todo)).toContain(todo);
});

test('remove', () => {
  expect(list.remove(listEl, todo)).not.toContain([todo]);
});

test('clear', () => {
  expect(list.clear(listEl)).toHaveLength(0);
});
