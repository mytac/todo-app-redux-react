import React from 'react';
import TextInput from '../components/FormItem/TextInput';
import RadioSelection from '../components/FormItem/RadioSelection';
import SquareButton from '../components/Button/SquareButton';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(e) {
    this.setState({
      category: e.target.value,
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
      if (Object.keys(this.state).length > 4) {
        // 存入本地
        console.log(this.state);
      }
    }, 0);
  }

  render() {
    return (
      <div>
        <RadioSelection selectItem={this.selectItem} />
        <TextInput handleChange={this.handleChange} placeholder="Title" />
        <TextInput handleChange={this.handleChange} placeholder="Description" />
        <TextInput handleChange={this.handleChange} placeholder="Time" />
        <TextInput handleChange={this.handleChange} placeholder="Place" />
        <SquareButton text="ADD YOUR THING" onClick={this.submit} />
      </div>
    );
  }
}
