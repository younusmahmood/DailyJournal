import { ADD_TASK } from './types'

export function addTask({ task, time }) {
  return {
    type: ADD_TASK,
    payload: { task, time }
  }
}
