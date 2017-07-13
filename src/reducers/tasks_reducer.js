import _ from 'lodash'
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { ...action.payload }]
    case COMPLETE_TASK:
      var index = _.findIndex(state, { id: action.payload })
      state[index].completed = !state[index].completed
      var newState = [...state]
      return newState
    case DELETE_TASK:
      index = _.findIndex(state, { id: action.payload })
      state.splice(index, 1)
      newState = [...state]
      return newState
    default:
      return state
  }
}
