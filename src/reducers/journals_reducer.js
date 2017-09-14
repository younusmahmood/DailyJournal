import { CREATE_JOURNAL, GET_JOURNALS, CLEAR } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_JOURNAL:
      console.log(state)
      return [...state, { ...action.payload }]
    case GET_JOURNALS:
      return [...state, ...action.payload]
    case CLEAR:
      return (state = [])
    default:
      return state
  }
}
