// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TAB = 'CHANGE_TAB';
export const DELETE_TODO = 'DELETE_TODO';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS ';
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

export function fetchPostsRequest() {
  return { type: FETCH_POSTS_REQUEST };
}
export function fetchPostsFailure() {
  return { type: FETCH_POSTS_FAILURE, error: 'Oops!' };
}
export function fetchPostsSuccess(response) {
  return { type: FETCH_POSTS_SUCCESS, response };
}
export function receivePosts(response, json) {
  return { type: RECEIVE_POSTS, posts: JSON.parse(json) };
}

// thunk
export function fetchPosts() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return setTimeout(() => {
      dispatch(fetchPostsSuccess());
      return { name: 'zjz', age: '10' };
    }
      , 500);
  };
}
