import { ADD_TASK, DELETE_TASK } from './types';

export function addTask(task){
    return {
        type: ADD_TASK,
        task
    }
}