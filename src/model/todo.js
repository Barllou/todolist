export function create(message) {
  const result = { message: message, isDone: false };
  return result;
}

export function toggle(todo) {
  const newTodo = todo;
  newTodo.isDone = !newTodo.isDone;

  return newTodo;
}

export function edit(todo, message) {
  const newTodo = todo;
  newTodo.message = message;

  return newTodo;
}
