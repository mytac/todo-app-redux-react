import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListPage from '../components/pages/ListPage';
import AddPage from '../components/pages/AddPage';
import { changeTab, toggleTodo, pageFilters } from '../action';
import '../less/index.less';

import { reassignStorage, getStorage } from '../utils/storageOpreation';

// 数据拿出来放到队尾
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

class Root extends React.Component {
  constructor(props) {
    super(props);
    const storageData = getStorage('todo-app');
    this.state = {
      isAdd: false,
      data: storageData instanceof Array ? storageData : [],
    };
    this.isDone = this.isDone.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  isDone(index) {
    const tempData = this.state.data.map((obj, idx) => {
      const tempObj = Object.assign({}, obj);
      if (idx === index) tempObj.completed = !tempObj.completed;
      return tempObj;
    });
    this.setState({
      data: dataGoDown(index, tempData),
    });
    reassignStorage('todo-app', tempData);
  }

  deleteTask(index) {
    const data = [].concat(this.state.data);
    data.splice(index, 1);
    this.setState({
      data,
    });
    reassignStorage('todo-app', data);
  }

  render() {
    console.log('store', this.props);
    const { goPages, filter, todos, isDone } = this.props;
    return (
      <div>
        {filter === pageFilters.GO_FORM
          ? <AddPage changeTab={() => goPages(pageFilters.GO_LIST)} data={todos} />
          : <ListPage
            changeTab={() => goPages(pageFilters.GO_FORM)}
            data={todos}
            isDone={isDone}
            deleteData={this.deleteTask}
          />
        }
      </div>
    );
  }
}

Root.propTypes = {
  goPages: PropTypes.func.isRequired,
  isDone: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

// 构造一个函数来分发action
const mapDispatchToProps = dispatch => ({
  goPages: (pageName) => {
    dispatch(changeTab(pageName));
  },
  isDone: (index) => {
    console.log(index)
    dispatch(toggleTodo(index));
  },
});
// 构造一个函数返回需要的state
const mapStateToProps = (state) => {
  const { filter, todos } = state;
  return {
    filter,
    todos,
  };
};
// 使用connect将state作为props传入root中
export default connect(mapStateToProps, mapDispatchToProps)(Root);
