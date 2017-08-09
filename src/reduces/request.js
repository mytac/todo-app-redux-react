import { combineReducers } from 'redux';
import { getStorage } from '../utils/storageOpreation';

import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, RECEIVE_POSTS } from '../action/request';

const listFromStorage = getStorage() || [];

function status(state = '', action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return '';
    case FETCH_POSTS_SUCCESS:
      return 'success';
    case FETCH_POSTS_FAILURE:
      return 'fail';
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return listFromStorage;
    default:
      return state;
  }
}

const requestReducer = combineReducers({
  status,
  list,
});

export default requestReducer;
