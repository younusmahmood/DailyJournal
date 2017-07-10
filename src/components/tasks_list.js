import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'

class TasksList extends Component {
  convertTime(time) {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time]

    if (time.length > 1) {
      time = time.slice(1)
      time[5] = +time[0] < 12 ? '  AM' : '  PM'
      time[0] = +time[0] % 12 || 12
    }

    return time.join('')
  }

  renderTasksList() {
    return this.props.tasks.map(tasks =>
      <div className="row" key={shortid.generate()}>
        <div className="col-sm-3">
          <li className="list-group-item">
            {' '}{this.convertTime(tasks.time)}
          </li>
        </div>
        <div className="col-sm-7">
          <li className="list-group-item">
            {tasks.task}
          </li>
        </div>
        <div className="col-sm-2">
          <button action="#" className="btn btn-outline-success">
            Done
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="list-group" id="tasks">
        {this.renderTasksList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}

export default connect(mapStateToProps)(TasksList)
