import React, { Component } from 'react';

import TasksLists from './tasks_list';
import TaskForm from './task_form';

class App extends Component {
  render() {
    return (
        <div>
            <h3 className="heading" >Daily Journal</h3>
            <TaskForm />
            <TasksLists />
        </div>
    );
  }
}

export default App;
