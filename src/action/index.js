// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TAB = 'CHANGE_TAB';
export const DELETE_TODO = 'DELETE_TODO';

// action constants
export const pageFilters = {
  GO_LIST: 'GO_LIST',
  GO_FORM: 'GO_FORM',
};

// action creators
// newTodo 是一个对象
export function addTodo(newTodo) {
  return { type: ADD_TODO, newTodo };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function changeTab(filter) {
  return { type: CHANGE_TAB, filter };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index };
}

