import React from 'react';

import ListPage from './ListPage';
import AddPage from './AddPage';
import '../less/index.less';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: true,
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab() {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  }

  render() {
    return (
      <div>
        {this.state.isAdd
          ? <AddPage changeTab={this.changeTab} />
          : <ListPage changeTab={this.changeTab} />
        }
      </div>
    );
  }
}
