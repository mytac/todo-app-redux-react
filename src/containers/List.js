import React from 'react';
import PropTypes from 'prop-types';

import ListItems from '../components/ListItem/ListItems';

export default function List({ data, isDone }) {
  return (
    <div className="lists">
      <span className="mid-header">INBOX</span>
      <ul>
        {data.map((todo, index) => (<ListItems
          todo={todo}
          key={index}
          onClick={() => isDone(index)}
        />))}
      </ul>
    </div>
  );
}

List.propTypes = {
  isDone: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
