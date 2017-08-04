import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk';

import reducers from './reducers'

import App from './components/App'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/tasks" component={App} />
          <Route path="/:id" component={App} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
