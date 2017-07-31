import React from 'react';
import PropTypes from 'prop-types';
import NormalText from '../Content/NormalText';
import CreateTime from '../time/CreateTime';
import Folder from '../Icon/Folder';

export default function ListItems({ todo }) {
  const { title, content, completed, time } = todo;
  return (
    <li className="todo">
      <Folder isDone={completed} />
      <div className="content">
        <CreateTime time={time} />
        <NormalText text={title} />
        <NormalText text={content} style={{ color: '#ddd', fontSize: '30px' }} />
      </div>
    </li>
  );
}

ListItems.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};
