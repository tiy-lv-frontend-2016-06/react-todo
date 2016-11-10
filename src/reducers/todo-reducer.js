const todoInitialState = {
  todos:[]
}

export default function(state = todoInitialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {...state, todos:[...state.todos, ...action.todos]}

    case 'ADD_TODO':
      return {...state, todos:[...state.todos, action.todo]}

    case 'TOGGLE_COMPLETE':
      return {...state, todos:state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            status: action.status,
            text: todo.text
          }
        } else {
          return todo;
        }
      })}

    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(todo => {
        return todo.id !== action.id
      })}

    case 'DELETE_COMPLETED':
      return {...state, todos: state.todos.filter(todo => todo.status === 'active')};

    default:
      return state;
  }
}