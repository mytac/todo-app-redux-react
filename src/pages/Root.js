import React from 'react';

import ListPage from './ListPage';
import AddPage from './AddPage';
import '../less/index.less';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab() {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  }

  render() {
    // 空值处理
    const storageData = JSON.parse(localStorage.getItem('todo-app'));
    const passData = storageData instanceof Array ? storageData : [];
    return (
      <div>
        {this.state.isAdd
          ? <AddPage changeTab={this.changeTab} data={passData} />
          : <ListPage changeTab={this.changeTab} data={passData} />
        }
      </div>
    );
  }
}

