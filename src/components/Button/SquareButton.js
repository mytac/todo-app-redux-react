import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function SquareButton({ text, onClick }) {
  return (
    <div className="square-button" onClick={onClick}>
      {text}
    </div>
  );
}

SquareButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
