import React from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';

import NormalText from '../components/Content/NormalText';
import CreateTime from '../components/time/CreateTime';
import Folder from '../components/Icon/Folder';
import Deleted from '../components/Icon/Deleted';

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDeleteIcon: false,
    };
    this.onSwipe = this.onSwipe.bind(this);
    this.cancelTap = this.cancelTap.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onSwipe() {
    this.setState({
      isShowDeleteIcon: true,
    });
  }

  cancelTap() {
    this.setState({
      isShowDeleteIcon: false,
    });
  }

  deleteItem() {
    const { deleteData, index } = this.props;
    deleteData(index);
    this.cancelTap();
  }

  render() {
    const { todo, onClick } = this.props;
    const { title, description, completed, time } = todo;
    return (
      <Hammer onSwipe={this.onSwipe} direction="DIRECTION_LEFT">
        <li className="todo">
          <Folder isDone={completed} onClick={onClick} />
          <div className="content" onMouseOut={this.cancelTap}>
            <CreateTime time={time} />
            <NormalText text={title} />
            <NormalText text={description} style={{ color: '#ddd', fontSize: '30px' }} />
          </div>
          <Deleted isShow={this.state.isShowDeleteIcon} onClick={this.deleteItem} />
        </li>
      </Hammer>

    );
  }
}

ListItems.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
