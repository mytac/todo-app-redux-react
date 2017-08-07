import { combineReducers } from 'redux';

import { CHANGE_TAB, ADD_TODO, TOGGLE_TODO, DELETE_TODO, pageFilters } from '../action';
import { getStorage, reassignStorage } from '../utils/storageOpreation';

const { GO_LIST } = pageFilters;
const listFromStorage = getStorage() || [];

/* 数据拿出来放到队尾 */
const dataGoDown = (index, data = []) => {
  if (data === [] || data.length - 1 < index) return data;
  const temp = data[index];
  // 当选择后为【完成】状态时
  if (data[index].completed) {
    data.splice(index, 1);
    data.push(temp);
    return data;
  }
  // 选择后为【未完成】状态
  data.splice(index, 1);
  const completedTaskNum = data.filter(obj => obj.completed === true).length;
  data.splice(data.length - completedTaskNum, 0, temp);
  return data;
};

/* 存储 */
const SAVE_LIST = (newState) => {
  reassignStorage('todo-app', newState);
  return newState;
};

/* 删除 */
const deleteTodo = (state, action) => {
  const temp = [].concat(state);
  temp.splice(action.index, 1);
  return temp;
};

/* 操作state.todos */
function todos(state = listFromStorage, action) {
  switch (action.type) {
    case ADD_TODO:
      return SAVE_LIST([
        ...state,
        action.newTodo,
      ]);
    case TOGGLE_TODO:
      return SAVE_LIST(dataGoDown(action.index, state.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      })));
    case DELETE_TODO:
      return SAVE_LIST(deleteTodo(state, action));
    default:
      return state;
  }
}

/* 操作state.filter */
function filter(state = GO_LIST, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  filter,
});

export default todoApp;
