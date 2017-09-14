import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { connect } from 'react-redux'

import * as actions from '../actions'

const renderInput = field =>
  <div>
    <input
      {...field.input}
      type={field.type}
      className="form-control faded"
      placeholder={field.placeholder}
    />
    {field.meta.touched &&
      field.meta.error &&
      <div className="error">
        {field.meta.error}
      </div>}
  </div>

class JournalForm extends Component {
  handleFormSubmit({ title }) {
    console.log('called')
    this.props.createJournal({ title })
    this.props.dispatch(reset('journals'))
  }

  clicked() {
    console.log('cliclked')
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="row journals-form">
          <div className="col-sm-10">
            <Field
              name="title"
              component={renderInput}
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="col-sm-2">
            <button
              action="submit"
              className="btn btn-outline-primary btnAddJournal"
            >
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

  if (!formProps.title) {
    errors.title = '  '
  }

  return errors
}

JournalForm = reduxForm({ form: 'journals', validate })(JournalForm)

export default connect(null, actions)(JournalForm)
