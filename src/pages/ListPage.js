import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../components/ListTopBar/TopBar';
import List from '../containers/List';
import CrossButton from '../components/Button/CrossButton';
import BottomBar from '../components/BottomBar/index';

import '../less/index.less';

export default function Root({ changeTab, data }) {
  return (
    <div>
      <TopBar />
      <List />
      <CrossButton onClick={changeTab} />
      <BottomBar />
    </div>
  );
}

Root.propTypes = {
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
