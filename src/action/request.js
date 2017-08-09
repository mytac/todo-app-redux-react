export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS ';

// 发起一个请求
export function fetchPostsRequest() {
  return { type: FETCH_POSTS_REQUEST };
}
// 请求失败
export function fetchPostsFailure() {
  return { type: FETCH_POSTS_FAILURE, error: 'Oops!' };
}
// 请求成功
export function fetchPostsSuccess(response) {
  return { type: FETCH_POSTS_SUCCESS, response };
}
// 获取数据
export function receivePosts(data) {
  return { type: RECEIVE_POSTS, data };
}

// thunk
export function fetchPosts() {
  return (dispatch) => {
    // 发起请求
    dispatch(fetchPostsRequest());
    // 这里模拟一个请求返回的字段
    return setTimeout(() => {
      dispatch(fetchPostsSuccess());
      dispatch(receivePosts());
    }
      , 500);
  };
}
