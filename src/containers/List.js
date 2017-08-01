import React from 'react';
import PropTypes from 'prop-types';

import ListItems from '../components/ListItem/ListItems';

export default function List({ data }) {
  return (
    <div className="lists">
      <span className="mid-header">INBOX</span>
      <ul>
        {data.map((todo, index) => <ListItems todo={todo} key={index} />)}
      </ul>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      },
    ).isRequired,
  ),
};
List.defaultProps = {
  data: [],
};
