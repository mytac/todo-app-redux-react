import React from 'react';

import TopBar from './../components/ListTopBar/TopBar';
import List from '../containers/List';
import CrossButton from './../components/Button/CrossButton';
import BottomBar from './../components/BottomBar';

import '../less/index.less';

export default function Root() {
  return (
    <div>
      <TopBar />
      <List />
      <CrossButton />
      <BottomBar />
    </div>
  );
}
