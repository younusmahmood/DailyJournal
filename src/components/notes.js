import React, { Component } from 'react'
import _ from 'lodash'

class Notes extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var note = _.join(this.props.notes, '')
    return (
      <div className="row" id="textarea">
        <div className="col-sm-8 offset-sm-2">
          <label htmlFor="textarea">Notes:</label>
          <textarea
            className="form-control faded"
            rows="10"
            value={note}
            onChange
          />
        </div>
      </div>
    )
  }
}

export default Notes
