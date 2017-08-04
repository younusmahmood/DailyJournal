import { CREATE_JOURNAL } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_JOURNAL:
      console.log(state)
      return [...state, { ...action.payload }]
    default:
      return state
  }
}
