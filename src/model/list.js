export function create(initDotos) {
  return initDotos;
}

export function add(list, todo) {
  list.push(todo);

  return list;
}

export function remove(list, todo) {
  let elTodo = list.indexOf(todo);

  if (elTodo > -1) {
    list.splice(elTodo, 1);
  }
  return list;
}

export function clear(list) {
  list.length = 0;
  return list;
}
