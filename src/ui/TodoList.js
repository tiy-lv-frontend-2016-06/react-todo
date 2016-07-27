import React from 'react';
import { connect } from 'react-redux';
import TodoItem from 'ui/TodoItem';
import { List } from 'material-ui/List';

const TodoList = (props) => {
  return (
    <List>
      {props.todos.map(function(todo){
        return <TodoItem key={todo.id} id={todo.id} status={todo.status} text={todo.text} />
      })}
    </List>
  )
}

const stateToProps = (state, ownProps) => {
  if (ownProps.filter) {
    return {
      todos: state.todoReducer.todos.filter(todo => {
        if (ownProps.filter === 'all') {
          return true;
        } else {
          return todo.status === ownProps.filter
        }
      })
    }
  } else {
    return {
      todos: state.todoReducer.todos
    }
  }
}

export default connect(stateToProps)(TodoList)