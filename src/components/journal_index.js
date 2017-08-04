import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { Link } from 'react-router-dom'

import * as actions from '../actions'

class JournalIndex extends Component {
  renderJournals() {
    return this.props.journals.map(journal =>
      <Link to={'/' + journal.id} className="journals" key={shortid.generate()}>
        {journal.title}
      </Link>
    )
  }

  getDate() {
    var today = new Date()
    var date =
      today.getMonth() + 1 + '.' + today.getDate() + '.' + today.getFullYear()

    return date
  }

  handleCreate() {
    let title = this.getDate()
    let id = shortid.generate()
    this.props.createJournal({ id, title })
  }

  render() {
    return (
      <div>
        <h3 className="heading">Home</h3>
        <div className="row">
          <div className="col-sm-2 offset-sm-5">
            <button
              onClick={() => this.handleCreate()}
              className="btn btn-outline-primary "
            >
              New Journal
            </button>
          </div>
        </div>
        {this.renderJournals()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { journals: state.journals }
}

export default connect(mapStateToProps, actions)(JournalIndex)
