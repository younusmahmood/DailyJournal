import _ from 'lodash'
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  GET_TASKS,
  USER_LOGOUT
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { ...action.payload }]
    case GET_TASKS:
      return [...state, ...action.payload]
    case COMPLETE_TASK:
      var index = _.findIndex(state, { _id: action.payload._id })
      state[index].completed = action.payload.completed
      var newState = [...state]
      return newState
    case DELETE_TASK:
      index = _.findIndex(state, { _id: action.payload })
      state.splice(index, 1)
      newState = [...state]
      return newState
    case USER_LOGOUT:
      return (state = [])
    default:
      return state
  }
}
