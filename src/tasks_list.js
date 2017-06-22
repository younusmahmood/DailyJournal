import React, { Component } from 'react';

export default class TasksList extends Component {
    
    render() {
        return (
            <div>
            <input />
            <button >Enter</button>
                <ul>
                    <li>{this.props.task}</li>
                </ul>
            </div>
        )
    }
}