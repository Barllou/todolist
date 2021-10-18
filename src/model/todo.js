export function create(message = '') {
  return { message: message, isDone: false };
}

export function toggle(todo) {
  return {
    ...todo,
    isDone: !todo.isDone,
  };
}

export function edit(todo, message) {
  return {
    ...todo,
    message,
  };
}

export function getMessage(todo) {
  return todo.message;
}

export function getIsDone(todo) {
  return todo.isDone;
}
