export const ADD_TODO = 'ADD_TODO';
export const addTodoByName = (nameTodo) => ({
    type: ADD_TODO,
    nameTodo
});

export const CHANGE_NAME_TODO = 'CHANGE_NAME_TODO';
export const changeNameTodo = (keyword) => ({
    type: CHANGE_NAME_TODO,
    keyword
});