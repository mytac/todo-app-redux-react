import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListPage from '../components/pages/ListPage';
import AddPage from '../components/pages/AddPage';
import { changeTab, toggleTodo, deleteTodo, pageFilters } from '../action';
import '../less/index.less';

// 构造一个函数来分发action
const mapDispatchToProps = dispatch => ({
  goPages: (pageName) => {
    dispatch(changeTab(pageName));
  },
  isDone: (index) => {
    dispatch(toggleTodo(index));
  },
  deleteTask: (index) => {
    dispatch(deleteTodo(index));
  },
});
// 构造一个函数返回需要的state
const mapStateToProps = (state) => {
  const { filter, todos } = state;
  return {
    filter,
    todos,
  };
};

const Root = ({ goPages, filter, todos, isDone, deleteTask }) => (
  <div>
    {filter === pageFilters.GO_FORM
      ? <AddPage changeTab={() => goPages(pageFilters.GO_LIST)} data={todos} />
      : <ListPage
        changeTab={() => goPages(pageFilters.GO_FORM)}
        data={todos}
        isDone={isDone}
        deleteData={deleteTask}
      />
    }
  </div>
);

Root.propTypes = {
  goPages: PropTypes.func.isRequired,
  isDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
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

// 使用connect将state作为props传入root中
export default connect(mapStateToProps, mapDispatchToProps)(Root);
