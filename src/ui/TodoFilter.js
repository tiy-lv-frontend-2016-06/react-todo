import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { changeFilter, deleteCompleted } from 'api/todo';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

const Filter = React.createClass({
  goToHome: function () {
    browserHistory.push('/')
  },
  goToActive: function () {
    browserHistory.push('/active')
  },
  goToComplete: function () {
    browserHistory.push('/complete')
  },
  render: function () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle style={{marginLeft:20}} text={this.props.count + " item" + (this.props.count !== 1 ? 's' : '') + " left"} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton onTouchTap={this.goToHome} label="All" />
          <FlatButton onTouchTap={this.goToActive} label="Active" />
          <FlatButton onTouchTap={this.goToComplete} label="Completed" />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton onTouchTap={deleteCompleted} label="Clear Completed" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
})

const stateToProps = function (state) {
  return {
    count: state.todoReducer.todos.filter(todo => todo.status === 'active').length
  }
}

export default connect(stateToProps)(Filter)