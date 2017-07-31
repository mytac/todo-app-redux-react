import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default function BackButton({ onClick }) {
  return (
    <div className="back-icon" onClick={onClick}>
      <span className="icon-left-arrow" />
    </div>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
