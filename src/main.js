import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import store from 'store';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// UI
import Todos from 'ui/todos';
import Asdf from 'ui/Asdf.js';

const Site = (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/(:filter)" component={Todos} />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));