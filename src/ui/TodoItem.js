import React from 'react';
import { toggleComplete, deleteItem } from 'api/todo';
import ContentDelete from 'material-ui/svg-icons/action/delete'
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

const completedStyle = {
  textDecoration: 'line-through'
}

export default React.createClass({
  primaryText: function () {
    return (
      <span style={this.props.status === 'complete' ? completedStyle : {}}>{this.props.text}</span>
    )
  },
  iconButton: function () {
    return (
      <IconButton touch={true} onTouchTap={this.deleteItem}>
        <ContentDelete />
      </IconButton>
    )
  },
  toggleComplete: function (e) {
    toggleComplete(this.props.id);
  },
  deleteItem: function (e) {
    deleteItem(this.props.id);
  },
  render: function () {
    return (
      <ListItem primaryText={this.primaryText()} onTouchTap={this.toggleComplete} rightIconButton={this.iconButton()} />
    )
  }
});