import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../components/ListTopBar/TopBar';
import List from '../containers/List';
import CrossButton from '../components/Button/CrossButton';
import BottomBar from '../components/BottomBar/index';

import '../less/index.less';

export default function Root({ changeTab }) {
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
};
