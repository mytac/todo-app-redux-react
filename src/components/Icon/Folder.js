import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default function Folder({ isDone }) {
  return (
    <div className="type-icon">
      <span className={`icon-folder${isDone ? '-open' : ''}`} />
    </div>
  );
}

Folder.propTypes = {
  isDone: PropTypes.bool.isRequired,
};
