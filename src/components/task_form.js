import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset } from 'redux-form'
import shortid from 'shortid'

import { addTask } from '../actions'

const renderInput = field =>
  <div>
    <input {...field.input} type={field.type} className="form-control" />
    {field.meta.touched &&
      field.meta.error &&
      <div className="error">
        {field.meta.error}
      </div>}
  </div>

class TasksList extends Component {
  handleFormSubmit({ task, time }) {
    let completed = false
    let id = shortid.generate()
    let notes = ''
    this.props.addTask({ task, time, completed, id, notes })
    this.props.dispatch(reset('tasksList'))
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="row">
          <div className="col-sm-3">
            <label htmlFor="time">Time: </label>
            <Field name="time" component={renderInput} type="time" />
          </div>
          <div className="col-sm-7">
            <label htmlFor="task">Task: </label>
            <Field name="task" component={renderInput} type="text" />
          </div>
          <div className="col-sm-2 btn-col">
            <button action="submit" className="btn btn-outline-primary btnAdd">
              <span className="fa fa-plus" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    )
  }
}

function validate(formProps) {
  const errors = {}

  if (!formProps.task) {
    errors.task = '  '
  }

  return errors
}

TasksList = reduxForm({ form: 'tasksList', validate })(TasksList)

export default connect(null, { addTask })(TasksList)
