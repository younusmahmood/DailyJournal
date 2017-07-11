import React, { Component } from 'react'

export default class Notes extends Component {
  render() {
    return (
      <div className="row" id="textarea">
        <div className="col-sm-8 offset-sm-2">
          <label htmlFor="textarea">Notes:</label>
          <textarea className="form-control" rows="10" />
        </div>
      </div>
    )
  }
}
