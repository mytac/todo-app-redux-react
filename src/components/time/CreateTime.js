import React from 'react';
import PropTypes from 'prop-types';

import NormalText from '../Content/NormalText';
import './style.less';

export default function CreateTime({ time, style }) {
  return (
    <div className="time">
      <NormalText text={time} style={style} />
    </div>
  );
}

/* eslint-disable react/forbid-prop-types */
CreateTime.propTypes = {
  time: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

CreateTime.defaultProps = {
  style: {
    fontSize: '20px',
    color: '#ccc',
  },
};
