import React from 'react';
import TextInput from '../components/FormItem/TextInput';
import SquareButton from '../components/Button/SquareButton';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
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
      if (Object.keys(this.state).length > 3) {
        // 存入本地
        console.log(this.state);
      } else {
        this.submit();
      }
    }, 0);
  }

  render() {
    return (
      <div>
        <TextInput handleChange={this.handleChange} placeholder="Title" />
        <TextInput handleChange={this.handleChange} placeholder="Description" />
        <TextInput handleChange={this.handleChange} placeholder="Time" />
        <TextInput handleChange={this.handleChange} placeholder="Place" />
        <SquareButton text="ADD YOUR THING" onClick={this.submit} />
      </div>
    );
  }
}
