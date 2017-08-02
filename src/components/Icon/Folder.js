import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default function Folder({ onClick, isDone }) {
  return (
    <div className="type-icon" onClick={onClick}>
      <span className={`icon-folder${isDone ? '-open' : ''}`} />
    </div>
  );
}

Folder.propTypes = {
  isDone: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
