import { createStore } from 'redux';
import todoApp from './reduces';

// Redux应用只有一个单一的store
// 根据已有的reducer创建store
// createStore第二个参数是可选的, 用于设置 state 初始状态
const store = createStore(todoApp);
