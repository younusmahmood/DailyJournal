import { ADD_TASK, COMPLETE_TASK } from './types'

export function addTask({ task, time, completed, id }) {
  return {
    type: ADD_TASK,
    payload: { task, time, completed, id }
  }
}

export function completeTask(id) {
  return {
    type: COMPLETE_TASK,
    payload: id
  }
}
