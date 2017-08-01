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

export default function AddPage({ changeTab, data }) {
  return (
    <div className="add-page">
      <BackButton onClick={changeTab} />
      <NormalText text="Add new things" style={textStyle} />
      <Form changeTab={changeTab} />
    </div>
  );
}

AddPage.propTypes = {
  changeTab: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
};
