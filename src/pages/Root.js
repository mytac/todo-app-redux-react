import React from 'react';

import ListPage from './ListPage';
import AddPage from './AddPage';
import '../less/index.less';

import { reassignStorage, getStorage } from '../utils/storageOpreation';

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
      data: tempData,
    });
    reassignStorage('todo-app', tempData);
  }

  render() {
    return (
      <div>
        {this.state.isAdd
          ? <AddPage changeTab={this.changeTab} data={this.state.data} />
          : <ListPage changeTab={this.changeTab} data={this.state.data} isDone={this.isDone} />
        }
      </div>
    );
  }
}

