const todo = require('../src/model/todo');

const message = 'text';
const todoEl = { message: 'блаблабла', isDone: true };
const objTest = { message: message, isDone: false };

//'create'
// Expected value:  {"isDone": false, "message": "text"} - исходник (результат function create()) почему-то value
// Received object: {"isDone": false, "message": "text"} - итог является Object
// Видимо поэтому тест не проходит
test('create', () => {
  expect(todo.create(message)).toContain(objTest);
});

//'toggle'
//Вроде дошло как сделать. В testObj новый объект, в котором после функции create isDone: false. Далее его сравниваю с объектом todoEl
//в котором isDone по умолчанию true
test('toggle', () => {
  const testObj = todo.create(todoEl.message);

  expect(todo.toggle(testObj)).toEqual(todoEl);
  console.log(todoEl);
});

//'edit'
//Тоже самое что и в тесте "create". Понимаю что типы разные, видимо поэтому тесты и не проходят, но не утверждаю :)
test('edit', () => {
  expect(todo.edit(todoEl, message)).toContain({
    message: message,
    isDone: true,
  });
});
