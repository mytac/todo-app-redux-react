import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import TextInput from '../components/FormItem/TextInput';
import RadioSelection from '../components/FormItem/RadioSelection';
import SquareButton from '../components/Button/SquareButton';

const now = moment();

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.pickeronChange = this.pickeronChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.state = {
      time: now.format('HH:mm'),
    };
  }

  selectItem(e) {
    this.setState({
      category: e.target.value,
      completed: false,
    });
  }

  handleChange(e) {
    const { placeholder, value } = e.target;
    const obj = {};
    obj[placeholder.toLowerCase()] = value;
    setTimeout(() => {
      this.setState(obj);
    }, 0);
  }

  submit() {
    setTimeout(() => {
      if (Object.keys(this.state).length > 5) {
        // 取出本地的存储
        const storageArr = this.props.data;
        storageArr.unshift(this.state);
        // 存入本地
        localStorage.setItem('todo-app', JSON.stringify(storageArr));
        this.props.changeTab();
      }
    }, 0);
  }

  pickeronChange(value) {
    this.handleChange({ target: { value: value && value.format('HH:mm'), placeholder: 'Time' } });
  }

  render() {
    return (
      <div>
        <TimePicker
          showSecond={false}
          className="time-picker"
          defaultValue={now}
          onChange={this.pickeronChange}
          placeholder="chose the Time"
          use12Hours={false}
        />
        <RadioSelection selectItem={this.selectItem} />
        <TextInput handleChange={this.handleChange} placeholder="Title" />
        <TextInput handleChange={this.handleChange} placeholder="Description" />
        <TextInput handleChange={this.handleChange} placeholder="Place" />
        <SquareButton text="ADD YOUR THING" onClick={this.submit} />
      </div>
    );
  }
}

Form.propTypes = {
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
  ),
};
Form.defaultProps = {
  data: [],
};
