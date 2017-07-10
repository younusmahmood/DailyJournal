import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { addTask } from '../actions';

const renderInput = field => (
    <div>
        <input {...field.input} type={field.type} className='form-control' />
    </div>
)

class TasksList extends Component {
            
    handleFormSubmit(formProps){
            this.props.addTask(formProps);
    }
        
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
               <div className="row">
                   <div className="col-sm-3">
                      <label htmlFor='time'>Time: </label>
                       <Field name="time" component={renderInput} type='time'></Field>
                   </div>
                   <div className="col-sm-7">
                      <label htmlFor='task'>Task: </label>
                       <Field name="task" component={renderInput} type='text'></Field>
                   </div>
                   <div className="col-sm-2 btn-col">
                       <button action='submit' className='btn btn-outline-primary'>Sign Up!</button>
                   </div>
                </div>
            </form>
            
        )
    }  
}

TasksList = reduxForm({ form: 'tasksList'})(TasksList);

export default connect(null, {addTask})(TasksList);