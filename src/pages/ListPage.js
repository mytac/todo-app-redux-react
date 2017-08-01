import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../components/ListTopBar/TopBar';
import List from '../containers/List';
import CrossButton from '../components/Button/CrossButton';
import BottomBar from '../components/BottomBar/index';

import '../less/index.less';

// 计算完成比率和任务类型分组
const computedPassProps = (datas) => {
  const total = datas.length;
  const doneNum = datas.filter(data => data.completed).length;
  const personalNum = datas.filter(data => data.category === 'Personal').length;
  return {
    ratio: (doneNum / total).toFixed(2) - 0,
    taskNumArr: [personalNum, total - personalNum],
    num: doneNum,
  };
};


export default function Root({ changeTab, data }) {
  const { ratio, taskNumArr, num } = computedPassProps(data);
  return (
    <div>
      <TopBar ratio={ratio} taskNumArr={taskNumArr} />
      <List data={data} />
      <CrossButton onClick={changeTab} />
      <BottomBar num={num} />
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
