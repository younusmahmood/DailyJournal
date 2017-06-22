import React, { Component } from 'react';

import TasksLists from './tasks_list';

class App extends Component {
  render() {
    return (
        <div>
            <h2 className="heading" >PowerList</h2>
            <TasksLists />
        </div>
    );
  }
}

export default App;
