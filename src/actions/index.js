import axios from 'axios'
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CREATE_JOURNAL,
  GET_TASKS
} from './types'

const ROOT_URL =
  'https://my-daily-journal-api.herokuapp.com' || 'http://localhost:3000'

export function addTask({ task, time, completed, notes }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/taskslist`, { task, time })
      .then(res => {
        task = res.data.task
        time = res.data.time
        completed = res.data.completed
        var _id = res.data._id

        dispatch({
          type: ADD_TASK,
          payload: { task, time, completed, _id }
        })
      })
      .catch(e => console.log('Error: ****', e))
  }
}

export function getTasks() {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/taskslist`)
      .then(res => {
        dispatch({
          type: GET_TASKS,
          payload: res.data.tasks
        })
      })
      .catch(e => console.log('Error: ****', e))
  }
}

export function completeTask(id, completed) {
  return function(dispatch) {
    axios
      .patch(`${ROOT_URL}/taskslist/${id}`, { completed: completed })
      .then(res => {
        var _id = res.data.task._id
        var completed = res.data.task.completed
        dispatch({
          type: COMPLETE_TASK,
          payload: { _id, completed }
        })
      })
  }
}

export function deleteTask(id) {
  return function(dispatch) {
    axios.delete(`${ROOT_URL}/taskslist/${id}`).then(res => {
      var _id = res.data.task._id
      dispatch({
        type: DELETE_TASK,
        payload: _id
      })
    })
  }
}

export function createJournal({ id, title }) {
  return {
    type: CREATE_JOURNAL,
    payload: { id, title }
  }
}
