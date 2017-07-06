import { ADD_TASK } from './types';

export function addTask({ task, time }){
    //console.log({task, time});
    return {
        type: ADD_TASK,
        payload: {task, time}
    }
}