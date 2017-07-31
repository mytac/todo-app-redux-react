import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, handleChange } = this.props;
    return (
      <div className="text-input">
        <input type="text" placeholder={placeholder} onMouseOut={handleChange} />
      </div>
    );
  }
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
