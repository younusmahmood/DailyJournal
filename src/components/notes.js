import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import axios from 'axios'

import * as actions from '../actions'

class Notes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: ''
    }
    this.loadNotesFromServer = this.loadNotesFromServer.bind(this)
  }

  loadNotesFromServer() {
    //var url = 'http://localhost:3000'
    var url = 'https://my-daily-journal-api.herokuapp.com'
    axios
      .get(`${url}/notes/${this.props.id}`, {
        headers: { 'x-auth': localStorage.getItem('x-auth') }
      })
      .then(res => {
        this.setState({ notes: _.join(res.data.notes, '') })
      })
      .catch(e => console.log('Error: **** NOTES', e))
  }

  componentDidMount() {
    this.loadNotesFromServer()
  }

  onInputChange(notes) {
    var text = notes
    var id = this.props.id

    this.setState({ notes })
    this.props.editNote({ text, id })
  }

  render() {
    return (
      <div className="row" id="textarea">
        <div className="col-sm-8 offset-sm-2">
          <label htmlFor="textarea">Notes:</label>
          <textarea
            ref="_notes"
            className="form-control faded"
            rows="10"
            value={this.state.notes}
            onChange={e => this.onInputChange(e.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Notes)
