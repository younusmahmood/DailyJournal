import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class UserIndex extends Component {
  handleClick() {}
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Tasks
        </button>
      </div>
    )
  }
}

export default connect(null, actions)(UserIndex)
