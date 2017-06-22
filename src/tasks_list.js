import React, { Component } from 'react';

export default class TasksList extends Component {
    constructor(props){
        super(props);
        
        this.state = { tasks: [] }
        this.handleClick = this.handleClick.bind(this);
    }
    
    renderTasksList() {
        return this.state.tasks.map((tasks) => <li className='list-group-item'>{tasks}</li>);                  
    }
            
    handleClick(){
            this.setState({ tasks: this.state.tasks.concat(this.textInput.value)});
            this.textInput.value = '';
        }
        
    render() {

        return (
            <div>
                <div className="row">
                   <div className='col-sm-3'>
                        <div className="col-10">
                            <input className="form-control" type="time" value="07:00:00" id="" />    
                       </div>
                   </div>
                    <div className="col-sm-7">
                        <input className='form-control' ref={(thisInput) => {this.textInput = thisInput}} />
                    </div>
                    <div className="col-sm-2">
                          <button onClick={this.handleClick} className='btn btn-outline-primary'>Enter</button>
                    </div>
                </div>
                <div className='row'>
                   <div className='col-sm-3'>
                       {/* Time Placeholder */}      
                   </div>
                    <div className="col-sm-7">
                        <ul className='list-group'>
                           {this.renderTasksList()}
                        </ul>
                    </div>
                    <div className='col-sm-2'>
                       {/* Delete button Placeholder */} 
                    </div>
                </div>
            </div>
        )
    }
}