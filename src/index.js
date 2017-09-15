import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import { AUTH_USER } from './actions/types'

import App from './components/App'
import Home from './components/home'
import Journals from './components/journals'
import RequireAuth from './components/require_auth'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('x-auth')

if (token) {
  store.dispatch({
    type: AUTH_USER
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/tasks" component={RequireAuth(App)} />
          <Route path="/journals" component={RequireAuth(Journals)} />
          <Route path="/journals/:id" component={RequireAuth(App)} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
