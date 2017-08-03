import React from 'react';
import PropTypes from 'prop-types';

import ListItems from './ListItems';

export default function List({ data, isDone, deleteData }) {
  return (
    <div className="lists">
      <span className="mid-header">INBOX</span>
      <ul>
        {data.map((todo, index) => (<ListItems
          todo={todo}
          key={index}
          index={index}
          onClick={() => isDone(index)}
          deleteData={deleteData}
        />))}
      </ul>
    </div>
  );
}

List.propTypes = {
  isDone: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
