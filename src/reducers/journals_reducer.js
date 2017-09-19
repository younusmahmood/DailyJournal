import _ from 'lodash'

import {
  CREATE_JOURNAL,
  GET_JOURNALS,
  DELETE_JOURNAL,
  CLEAR
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_JOURNAL:
      return [...state, { ...action.payload }]
    case GET_JOURNALS:
      return [...state, ...action.payload]
    case DELETE_JOURNAL:
      var index = _.findIndex(state, { _id: action.payload })
      state.splice(index, 1)
      var newState = [...state]
      return newState
    case CLEAR:
      return (state = [])
    default:
      return state
  }
}
