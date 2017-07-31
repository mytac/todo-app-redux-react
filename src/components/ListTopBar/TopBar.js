import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskNumBoard from '../list/TaskNumBoard';
import ProgressBar from '../Progress/Bar';
import ProgressRing from '../Progress/Ring';
import NormalText from '../Content/NormalText';

const textStyle = {
  position: 'relative',
  bottom: '145px',
  left: '530px',
  color: '#fff',
  fontSize: '25px',
  opacity: 0.8,
};

const getDate = () => {
  const mydate = new Date();
  return mydate.toLocaleDateString().split('/').join(' - ');
};

export default function TopBar({ ratio, taskNumArr }) {
  const [personalTaskNum, BusinessTaskNum] = taskNumArr;
  return (
    <div className="top-bar-wrapper">
      <div className="top-bar">
        <div>
          <div className="title">TODO THINGS</div>
          <div className="date">{getDate()}</div>
        </div>
        <div className="taskNum-block">
          <TaskNumBoard name="Personal" num={personalTaskNum} />
          <TaskNumBoard name="Business" num={BusinessTaskNum} />
        </div>
      </div>
      <ProgressBar ratio={ratio} />
      <ProgressRing ratio={ratio} />
      <NormalText text={`${ratio * 100}%  done`} style={textStyle} />
    </div>

  );
}

TopBar.propTypes = {
  ratio: PropTypes.number.isRequired,
  taskNumArr: PropTypes.array.isRequired,
};

TopBar.defaultProps = {
  taskNumArr: [0, 0],
  ratio: 1,
};
