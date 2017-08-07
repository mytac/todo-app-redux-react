import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './Root/Root';

import todoApp from './reduces';

// Redux应用只有一个单一的store
// 根据已有的reducer创建store
// createStore第二个参数是可选的, 用于设置 state 初始状态
const store = createStore(todoApp);

render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById('root'),
);
