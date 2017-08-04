import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'

import * as actions from '../actions'

class TasksList extends Component {
  convertTime(time) {
    if (!time) return time

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
    return this.props.tasks
      .sort((a, b) => a.time > b.time)
      .map(tasks =>
        <div key={shortid.generate()}>
          <div className="row">
            <div className="col-sm-3">
              <li className="list-group-item">
                {" "}{this.convertTime(tasks.time)}
              </li>
            </div>
            <div className="col-sm-7">
              <li className="list-group-item">
                {tasks.completed
                  ? <s>
                      {tasks.task}
                    </s>
                  : tasks.task}
              </li>
            </div>
            <div className="col-sm-2">
              <button
                onClick={() =>
                  this.props.completeTask(tasks._id.toString(), tasks.completed)}
                className={
                  tasks.completed
                    ? "btn btn-outline-warning completed"
                    : "btn btn-outline-success open"
                }
              >
                <span
                  className={tasks.completed ? "fa fa-undo" : "fa fa-check"}
                  aria-hidden="true"
                />
              </button>
              <button
                onClick={() => this.props.deleteTask(tasks.id)}
                className="btn btn-outline-danger delete"
              >
                <span className="fa fa-trash-o" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      );
  }

  render() {
    return (
      <div className="list-group" id="tasks">
        {this.renderTasksList()}

        <div className="row" id="textarea">
          <div className="col-sm-8 offset-sm-2">
            <label htmlFor="textarea">Notes:</label>
            <textarea className="form-control" rows="10" />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}

export default connect(mapStateToProps, actions)(TasksList)
