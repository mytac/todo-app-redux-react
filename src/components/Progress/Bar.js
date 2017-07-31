import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function ProgressBar({ ratio }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar" style={{ width: `${ratio * 100}%` }} />
    </div>

  );
}

ProgressBar.propTypes = {
  ratio: PropTypes.string.isRequired,
};
