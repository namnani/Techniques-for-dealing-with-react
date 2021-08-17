let todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
let nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]);

nextTodos[0] = {
  ...nextTodos[0],
};
console.log(todos[0] === nextTodos[0]);

console.log();
console.log(todos[0].id);
console.log(nextTodos[0].id);
console.log(todos[0].checked);
console.log(nextTodos[0].checked);
