export function create(initDotos) {
  return initDotos;
}

export function add(list, todo) {
  const newList = [...list];

  newList.push(todo);

  return newList;
}

export function remove(list, todo) {
  return list.filter((el) => el !== todo);
}

// eslint-disable-next-line no-unused-vars
export function clear(list) {
  return [];
}
