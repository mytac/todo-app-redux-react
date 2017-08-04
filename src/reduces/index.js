import { CHANGE_TAB, ADD_TODO, TOGGLE_TODO, DELETE_TODO, pageFilters } from '../action';

const { GO_LIST, GO_FORM } = pageFilters;

// todo:这里最初的todo要从storage获取
const initialState = {
  pageFilter: GO_LIST,
  todos: [],
};

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

// reducer一定为纯函数，接受state和action，返回state
// (previousState, action) => newState
function todoApp(state = {}, action) {
  return {
    filter: filter(state.filter, action),
    todos: todos(state.todos, action),
  };
}

// state tree
const stateTree = {
  filter: 'GO_LIST',
  todos: [
    {
      text: '11',
      place: '1',
      time: '2:20',
      content: 'dgusdguysdgisdhuis',
      completed: false,
    },
  ],
};

