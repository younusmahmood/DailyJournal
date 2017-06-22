import React, { Component } from 'react';

export default class TasksList extends Component {
    constructor(props){
        super(props);
        
        this.state = { tasks: [] }
        this.handleClick = this.handleClick.bind(this);
    }
    
    renderTasksList() {
        return this.state.tasks.map((tasks) => <li>{tasks}</li>);                  
    }
            
    handleClick(){
            this.setState({ tasks: this.state.tasks.concat(this.textInput.value)});
            this.textInput.value = '';
        }
        
    render() {

        return (
            <div>
            <input ref={(thisInput) => {this.textInput = thisInput}} />
            <button onClick={this.handleClick} >Enter</button>
                <ul>
                   {this.renderTasksList()}
                </ul>
            </div>
        )
    }
}