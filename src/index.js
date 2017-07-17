import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reducers from './reducers'

import App from './components/App'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
