import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './Root/Root';

import todoApp from './reduces';
import { addTodo, toggleTodo, changeTab, deleteTodo, pageFilters } from './action';

const { GO_LIST, GO_FORM } = pageFilters;

// Redux应用只有一个单一的store
// 根据已有的reducer创建store
// createStore第二个参数是可选的, 用于设置 state 初始状态
const store = createStore(todoApp);
// 打印初始state状态
console.log(store.getState());
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState()),
);
// 发起action

// 停止监听 state 更新
unsubscribe();

render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById('root'),
);
