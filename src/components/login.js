import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { withRouter } from 'react-router'

import { login } from '../actions'

const renderInput = field =>
  <div>
    <input
      {...field.input}
      type={field.type}
      className="form-control"
      placeholder={field.placeholder}
    />
    {field.meta.touched &&
      field.meta.error &&
      <div className="error">
        {field.meta.error}
      </div>}
  </div>

class Login extends Component {
  handleFormSubmit({ email, password }) {
    this.props.login({ email, password }, () => {
      this.props.history.push('/tasks')
    })
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="row">
          <div>
            <Field
              name="email"
              component={renderInput}
              type="text"
              placeholder="email"
            />
            <Field
              name="password"
              component={renderInput}
              type="password"
              placeholder="password"
            />
            <button action="submit" className="btn btn-outline-primary">
              Login
            </button>
            {this.renderAlert()}
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

Login = reduxForm({ form: 'login', validate })(Login)

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default withRouter(connect(mapStateToProps, { login })(Login))
