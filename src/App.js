import React, { Component } from 'react';

import TasksLists from './tasks_list';

class App extends Component {
  render() {
    return (
        <div>
            <h2>To Do List</h2>
            <TasksLists task="hello" />
        </div>
    );
  }
}

export default App;
