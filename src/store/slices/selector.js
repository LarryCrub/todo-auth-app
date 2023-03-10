export const selectTotalTodos = (state) =>
  state.taskPacks.reduce((acc, taskPack) => acc + taskPack.todos.length, 0);
