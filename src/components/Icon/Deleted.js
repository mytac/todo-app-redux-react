import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default function DeleteIcon({ onClick, isShow }) {
  return isShow
    ? <div className="delete-icon" onClick={onClick}><span className="icon-delete" /></div>
    : <div />;
}

DeleteIcon.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
