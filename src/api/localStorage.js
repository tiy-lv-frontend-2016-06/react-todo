import store from 'store';

export function getState() {
  try {
    let state = JSON.parse(localStorage.getItem('state'));
    if (!state) {
      return {
        todoReducer: {todos:[]}
      }
    } else {
      return state;
    }
  } catch (err) {
    return {
      todoReducer: {todos:[]}
    }
  }
}

export function saveState() {
  store.subscribe(function(){
    try {
      let state = store.getState();
      localStorage.setItem('state', JSON.stringify(state));
    } catch (err) {
      // Ignore
    }
  })
}