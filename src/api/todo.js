import store from 'store';
import { v4 } from 'uuid';
import { saveState } from 'api/localStorage';
import axios from 'axios';

//saveState();

fetchTodos();

export function fetchTodos() {
  return axios.get("http://localhost:8001/todos").then(function(response){
    store.dispatch({
      type:'FETCH_TODOS',
      todos: response.data
    })
  })
}

export function addItem(todo) {
  return axios.post("http://localhost:8001/todos/", {id:v4(), text: todo, status:'active'}).then(function(response){
    store.dispatch({
      type: 'ADD_TODO',
      todo: response.data
    });
  });
}

export function markComplete(id) {
  return axios.patch(`http://localhost:8001/todos/${id}`, {status:'complete'}).then(function(response){
    store.dispatch({
      type: 'MARK_COMPLETE',
      id: id
    })
  })
}

export function deleteItem(id) {
  return axios.delete(`http://localhost:8001/todos/${id}`).then(function(response){
    store.dispatch({
      type: 'DELETE_TODO',
      id: id
    })
  });
}

export function deleteCompleted() {
  let todos = store.getState().todoReducer.todos.filter(todo=>todo.status==='complete');
  axios.all(todos.map(todo=>axios.delete(`http://localhost:8001/todos/${todo.id}`))).then(function(){
    store.dispatch({
      type: 'DELETE_COMPLETED'
    })  
  })
}