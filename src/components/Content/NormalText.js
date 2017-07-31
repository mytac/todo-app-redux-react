import React from 'react';
import propTypes from 'prop-types';
import './style.less';

const NormalText = ({ text, style }) => (
  <div className="normal-text" style={style}>{text}</div>
);

export default NormalText;

NormalText.propTypes = {
  text: propTypes.string.isRequired,
};
NormalText.defaultProps = {
  style: {
    fontSize: '32px',
    color: '#333333',
  },
};
