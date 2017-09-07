import axios from 'axios'
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CREATE_JOURNAL,
  GET_TASKS,
  AUTH_USER,
  UNAUTH_USER,
  USER_LOGOUT,
  AUTH_ERROR
} from './types'

const ROOT_URL = 'http://localhost:3000'

//const ROOT_URL = 'https://my-daily-journal-api.herokuapp.com'

export function addTask({ task, time, completed, notes }) {
  return function(dispatch) {
    axios
      .post(
        `${ROOT_URL}/taskslist`,
        { task, time },
        { headers: { 'x-auth': localStorage.getItem('x-auth') } }
      )
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
      .get(`${ROOT_URL}/taskslist`, {
        headers: { 'x-auth': localStorage.getItem('x-auth') }
      })
      .then(res => {
        dispatch({ type: GET_TASKS, payload: res.data.tasks })
      })
      .catch(e => console.log('Error: ****', e))
  }
}

export function completeTask(id, completed) {
  return function(dispatch) {
    axios
      .patch(
        `${ROOT_URL}/taskslist/${id}`,
        { completed: completed },
        { headers: { 'x-auth': localStorage.getItem('x-auth') } }
      )
      .then(res => {
        var _id = res.data.task._id
        var completed = res.data.task.completed
        dispatch({ type: COMPLETE_TASK, payload: { _id, completed } })
      })
  }
}

export function deleteTask(id) {
  return function(dispatch) {
    axios
      .delete(`${ROOT_URL}/taskslist/${id}`, {
        headers: { 'x-auth': localStorage.getItem('x-auth') }
      })
      .then(res => {
        var _id = res.data.task._id
        dispatch({ type: DELETE_TASK, payload: _id })
      })
  }
}

export function createJournal({ id, title }) {
  return {
    type: CREATE_JOURNAL,
    payload: { id, title }
  }
}

export function login({ email, password }, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/users/login`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('x-auth', res.headers['x-auth'])
        callback()
      })
      .catch(e => {
        dispatch({ type: AUTH_ERROR, payload: e.response.data })
      })
  }
}

export function signup({ email, password }, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/users`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('x-auth', res.headers['x-auth'])
        callback()
      })
      .catch(e => {
        dispatch({ type: AUTH_ERROR, payload: e.response.data })
      })
  }
}

export function logout(callback) {
  return function(dispatch) {
    axios
      .delete(`${ROOT_URL}/users/me/token`, {
        headers: { 'x-auth': localStorage.getItem('x-auth') }
      })
      .then(res => {
        dispatch({ type: UNAUTH_USER })
        dispatch({ type: USER_LOGOUT })
        localStorage.removeItem('x-auth', res.headers['x-auth'])
        callback()
      })
      .catch(e => {
        dispatch({ type: AUTH_ERROR, payload: e.response.data })
      })
  }
}
