import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Root from './Root/Root';
import PCWarning from './Root/PCWarning';

import todoApp from './reduces';
import { fetchPosts } from './action/request';


const loggerMiddleware = createLogger();
// Redux应用只有一个单一的store
// 根据已有的reducer创建store
// createStore第二个参数是可选的, 用于设置 state 初始状态
const store = createStore(todoApp, applyMiddleware(loggerMiddleware, thunk));

store.dispatch(fetchPosts())

const deviceWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

render(
  deviceWidth > 760
    ? <PCWarning />
    : (<Provider store={store}>{<Root />}</Provider>)
  ,
  document.getElementById('root'),
);
