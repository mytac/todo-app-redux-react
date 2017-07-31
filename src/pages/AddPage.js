import React from 'react';
import PropTypes from 'prop-types';

import BackButton from '../components/Icon/LeftArrow';
import Form from '../containers/Form';

import '../less/addPage.less';

export default function AddPage({ changeTab }) {
  return (
    <div className="add-page">
      <BackButton onClick={changeTab} />
      <Form />
    </div>
  );
}

AddPage.propTypes = {
  changeTab: PropTypes.func.isRequired,
};
