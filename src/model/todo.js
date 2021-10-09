//==============================<<<<<
const todo = {
  message: '',
  isDone: false,
};
const todo2 = {
  message: 'test',
  isDone: true,
};
const todo3 = {
  message: 'test2',
  isDone: true,
};

const list = [todo, todo2, todo3];
//==============================<<<<<

// todo methods:

//----- create message -> todo
function isCreateTodo(value) {
  let result = {};

  result.message = value;
  result.isDone = false;

  return result;
}

//----- toggle todo -> todo (!isDone)
function getToggleTodo(todo) {
  todo.isDone === false ? (todo.isDone = true) : (todo.isDone = false);

  return todo;
}

//----- edit (todo, message) -> todo
function isEditTodo(todo, message) {
  todo.message = message;

  return todo;
}

// ==========================================<<<<<

// list methods:

//----- create [todo] -> list
function isCreateList(...allTodo) {
  let result = [];
  for (let el of allTodo) {
    result.push(el);
  }
  return result;
}

//----- add (list, todo) -> list
function isAddTodo(list, todo) {
  list.push(todo);

  return list;
}

//----- remove (list, todo) -> list
function isRemoveTodo(list, todo) {
  let elTodo = list.indexOf(todo);

  if (elTodo > -1) {
    list.splice(elTodo, 1);
  }
  return list;
}

//----- clear list -> list
function getClearTodo(list) {
  list.length = 0;
  return list;
}
