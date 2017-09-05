import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

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
    this.props.login({ email, password })
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
            <p>
              Don't have an account? <Link to={'/signup'}>Signup</Link>!
            </p>
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

export default connect(null, { login })(Login)
