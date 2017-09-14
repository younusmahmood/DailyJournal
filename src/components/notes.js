import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Notes extends Component {
  render() {
    console.log(this.props.notes)
    return (
      <div className="row" id="textarea">
        <div className="col-sm-8 offset-sm-2">
          <label htmlFor="textarea">Notes:</label>
          <textarea
            className="form-control faded"
            rows="10"
            value={this.props.notes}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { notes: state.tasks.notes }
}

export default connect(mapStateToProps, actions)(Notes)
