import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import shortid from 'shortid'

import * as actions from '../actions'
import Header from './header'
import JournalForm from './journals_form'

class Journals extends Component {
  componentWillMount() {
    this.props.getJournals()
  }

  // componentWillUnmount() {
  //   this.props.clear()
  // }

  renderJournals() {
    return this.props.journals.map(journal => {
      return (
        <div key={shortid.generate()}>
          <div className="row">
            <div className="col-sm-10">
              <li className="list-group-item list-journal">
                <Link
                  to={`/tasks/${journal._id}`}
                  className="list-group-item list-journal"
                >
                  {journal.title}
                </Link>
              </li>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-outline-danger fa-trash">
                <span
                  className="fa fa-times-circle-o fa-2x"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Header />
        <JournalForm />
        <ul className="list-group">
          {this.renderJournals()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { journals: state.journals }
}

export default connect(mapStateToProps, actions)(Journals)
