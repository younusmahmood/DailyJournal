import React, { Component } from 'react'
import { connect } from 'react-redux'

import TasksLists from './tasks_list'
import TaskForm from './task_form'
import * as actions from '../actions'

function getDate() {
  var today = new Date()
  var date =
    today.getMonth() + 1 + '.' + today.getDate() + '.' + today.getFullYear()

  return date
}

class App extends Component {

  componentWillMount(){
    this.props.getTasks()
  }

  render() {
    return (
      <div>
        <h3 className="heading">
          {getDate()}
        </h3>
        <TaskForm />
        <TasksLists />
      </div>
    )
  }
}

export default connect(null, actions)(App)

