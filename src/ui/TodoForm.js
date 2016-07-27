import React from 'react';
import TextField from 'material-ui/TextField';
import { addItem } from 'api/todo';

export default React.createClass({
  getInitialState: function () {
    return {
      value:''
    }
  },
  handleChange: function (e) {
    var value = e.target.value;
    this.setState({value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    addItem(this.state.value);
    this.setState({value:''})
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField hintText="New Todo" value={this.state.value} onChange={this.handleChange} fullWidth={true} />
      </form>
    )
  }
})