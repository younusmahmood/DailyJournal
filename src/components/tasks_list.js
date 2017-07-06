import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import shortid from 'shortid';

import { addTask } from '../actions';

const renderInput = field => (
    <div>
        <input { ...field.input } type={ field.type } value={ field.value } className='form-control' />
    </div>
)

class TasksList extends Component {
    renderTasksList() {
//        return _.map(this.props.tasks, task => {
//                return (<li className='list-group-item tasks' key={shortid.generate()}>{task.task}{task.time}</li>)
//        }); 
        
    }
            
    handleFormSubmit({ task, time }){
            console.log({ task, time });
            this.props.addTask({ task, time });
    }
        
    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <div>
               <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="row">
                   <div className='col-sm-3'>
                        <div className="col-10">
                            <Field name='time' component={renderInput} type='time' value="07:00:00" />   
                       </div>
                   </div>
                    <div className="col-sm-7">
                        <Field name='task' component={renderInput} type="text" value="" />
                    </div>
                    <div className="col-sm-2">
                          <button action='submit' className='btn btn-outline-primary' onClick={reset}>Enter</button>
                    </div>
                </div>
               </form>

                <div className='row'>
                   <div className='col-sm-3'>
                       {/* Time Placeholder */}      
                   </div>
                    <div className="col-sm-7">
                        <ul className='list-group tasks'>
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

TasksList = reduxForm({ form: 'tasksList'})(TasksList);

function mapStateToProps(state){
    return { tasks: state.tasks }
}

export default connect(mapStateToProps, { addTask })(TasksList);