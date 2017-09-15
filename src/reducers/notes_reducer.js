import { GET_NOTES, CLEAR } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case GET_NOTES:
      return [...state, ...action.payload.notes]
    case CLEAR:
      return (state = [''])
    default:
      return state
  }
}
