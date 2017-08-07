import React from 'react';

import ListPage from '../components/pages/ListPage';
import AddPage from '../components/pages/AddPage';
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

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    const storageData = getStorage('todo-app');
    this.state = {
      isAdd: false,
      data: storageData instanceof Array ? storageData : [],
    };
    this.changeTab = this.changeTab.bind(this);
    this.isDone = this.isDone.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  changeTab() {
    this.setState({
      isAdd: !this.state.isAdd,
    });
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
    return (
      <div>
        {this.state.isAdd
          ? <AddPage changeTab={this.changeTab} data={this.state.data} />
          : <ListPage
            changeTab={this.changeTab}
            data={this.state.data}
            isDone={this.isDone}
            deleteData={this.deleteTask}
          />
        }
      </div>
    );
  }
}
