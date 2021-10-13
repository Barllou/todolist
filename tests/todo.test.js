const todo = require('../src/model/todo');

const message = 'text';
const todoEl = { message: '', isDone: true };
const todoEl2 = { message: 'text', isDone: false };
const listEl = [todoEl, todoEl2];
const objTest = { message: message, isDone: false };

test('create', () => {
  expect(todo.create(message)).toContain(objTest);
});

/*test('toggle', () => {
    expect(todo.toggle(todoEl)).toEqual();
});*/

test('edit', () => {
  expect(todo.edit(todoEl, message)).toContain({
    message: message,
    isDone: true,
  });
});
