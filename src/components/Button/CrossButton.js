import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function CrossButton({ onClick, size, color }) {
  const style = {
    width: size,
    height: size || 100,
    lineHeight: size,
    backgroundColor: color,
  };

  return (
    <div className="cross-button" onClick={onClick} style={style}>
      <span className="icon-cross" />
    </div>
  );
}

CrossButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
CrossButton.defaultProps = {
  size: '100px',
  color: '#3fa1ef',
};
