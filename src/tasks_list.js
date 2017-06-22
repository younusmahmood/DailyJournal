import React, { Component } from 'react';

export default class TasksList extends Component {
    constructor(props){
        super(props);
        
        this.state = { tasks: ['Build To Do List', 'Eat Brownies'] }
    }
    
    renderTasksList() {
        return (
            this.state.tasks.map((tasks) => <li>{tasks}</li>)
        )
    }
        
    render() {

        return (
            <div>
            <input />
            <button >Enter</button>
                <ul>
                   {this.renderTasksList()}
                </ul>
            </div>
        )
    }
}