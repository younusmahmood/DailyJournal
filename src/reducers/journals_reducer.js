import {
  CREATE_JOURNAL,
  GET_JOURNALS,
  CLEAR,
  ADD_NOTES
} from '../actions/types'
import _ from 'lodash'

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_JOURNAL:
      console.log(state)
      return [...state, { ...action.payload }]
    case GET_JOURNALS:
      return [...state, ...action.payload]
    case ADD_NOTES:
      var index = _.findIndex(state, { _id: action.payload._id })
      state[index].notes = action.payload.notes
      var newState = [...state]
      return newState
    case CLEAR:
      return (state = [])
    default:
      return state
  }
}
