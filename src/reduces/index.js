import { combineReducers } from 'redux';

import { CHANGE_TAB, ADD_TODO, TOGGLE_TODO, DELETE_TODO, pageFilters } from '../action';
import { getStorage } from '../utils/storageOpreation';

const { GO_LIST } = pageFilters;

// 操作state.filter
function filter(state = GO_LIST, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return action.filter;
    default:
      return state;
  }
}

// 最初的todo要从storage获取
const listFromStorage = getStorage();
// 操作state.todos
function todos(state = listFromStorage, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.newTodo,
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case DELETE_TODO:
      return [].concat(state).splice(action.index, 1);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  filter,
  todos,
});

export default todoApp;
