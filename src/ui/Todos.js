import React from 'react';
import {Link} from 'react-router';

import Title from 'ui/Title';
import TodoForm from 'ui/TodoForm';
import TodoList from 'ui/TodoList';
import TodoFilter from 'ui/TodoFilter';

export default React.createClass({
  render: function () {
    return (
      <div>
        <Title>Todos</Title>
        <TodoForm />
        <TodoList filter={this.props.params.filter} />
        <TodoFilter />
      </div>
    )
  }
})  