import React from 'react';
import PropTypes from 'prop-types';

import BackButton from '../components/Icon/LeftArrow';
import NormalText from '../components/Content/NormalText';
import Form from '../containers/Form';

import '../less/addPage.less';

const textStyle = {
  color: '#fff',
  fontSize: '32px',
  margin: '50px auto',
  textAlign: 'center',
};

export default function AddPage({ changeTab }) {
  return (
    <div className="add-page">
      <BackButton onClick={changeTab} />
      <NormalText text="Add new things" style={textStyle} />
      <Form />
    </div>
  );
}

AddPage.propTypes = {
  changeTab: PropTypes.func.isRequired,
};
