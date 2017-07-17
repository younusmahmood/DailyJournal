import React, { Component } from 'react'

import TasksLists from './tasks_list'
import TaskForm from './task_form'

function getDate() {
  var today = new Date()
  var date =
    today.getMonth() + 1 + '.' + today.getDate() + '.' + today.getFullYear()

  return date
}

class App extends Component {
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

export default App
