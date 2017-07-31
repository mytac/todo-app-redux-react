import React from 'react';
import TextInput from '../components/FormItem/TextInput';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '1',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { placeholder, value } = e.target;
    const obj = {};
    obj[placeholder] = value;
    setTimeout(() => {
      this.setState(obj);
    }, 0);
  }

  render() {
    return (
      <div>
        <TextInput handleChange={this.handleChange} placeholder="Title" />
        <TextInput handleChange={this.handleChange} placeholder="Description" />
        <TextInput handleChange={this.handleChange} placeholder="Time" />
        <TextInput handleChange={this.handleChange} placeholder="Place" />
      </div>
    );
  }
}
