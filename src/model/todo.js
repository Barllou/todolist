export function create(message) {
  return {
    message,
    isDone: false,
  };
}

export function toggle(todo) {
  todo.isDone = !todo.isDone;

  return todo;
}

export function edit(todo, message) {
  todo.message = message;

  return todo;
}
