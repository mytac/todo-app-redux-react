import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../components/Icon/LeftArrow';

import '../less/addPage.less';

export default function AddPage({ changeTab }) {
  return (
    <div className="add-page">
      <BackButton onClick={changeTab} />
    </div>
  );
}

AddPage.propTypes = {
  changeTab: PropTypes.func.isRequired,
};
