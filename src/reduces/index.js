import { combineReducers } from 'redux';

import { CHANGE_TAB, ADD_TODO, TOGGLE_TODO, DELETE_TODO, pageFilters } from '../action';

const { GO_LIST } = pageFilters;

// todo:最初的todo要从storage获取

// 操作state.filter
function filter(state = GO_LIST, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return action.filter;
    default:
      return state;
  }
}

// 操作state.todos
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        action.newTodo,
      ];
    case TOGGLE_TODO:
      return todos.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case DELETE_TODO:
      return [].concat(todos).splice(action.index, 1);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  filter,
  todos,
});

export default todoApp;
