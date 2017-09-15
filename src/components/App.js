import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import TasksLists from './tasks_list'
import TaskForm from './task_form'
import Header from './header'
import * as actions from '../actions'

function getDate() {
  var today = new Date()
  var date =
    today.getMonth() + 1 + '.' + today.getDate() + '.' + today.getFullYear()

  return date
}

class App extends Component {
  render() {
    var id = _.trim(this.props.location.pathname, '/tasks/')
    return (
      <div>
        <Header />
        <h5 className="heading">
          {getDate()}
        </h5>
        <div className="container-padded">
          <TaskForm id={id} />
          <TasksLists id={id} />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(App)
