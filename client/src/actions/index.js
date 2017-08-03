import axios from 'axios';
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CREATE_JOURNAL,
  GET_TASKS
} from "./types";

const ROOT_URL = "http://localhost:3000";

export function addTask({ task, time, completed, id, notes }) {

    return function(dispatch) {
        axios.post(`${ROOT_URL}/taskslist`, { task, time })
            .then((res) => {
                task = res.data.task
                time = res.data.time
                completed = res.data.completed
                
                dispatch({
                    type: ADD_TASK,
                    payload: {task, time, completed}
                });

            }).catch(e => console.log('Error: ****',e));
    }

}

export function getTasks() {
    return function(dispatch) {
        axios.get( `${ROOT_URL}/taskslist`)
            .then((res) => {
                dispatch({ 
                    type: GET_TASKS,
                    payload: res.data.tasks
                 });
            }).catch(e => console.log('Error: ****',e));
    }
}

export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export function createJournal({ id, title }) {
    return {
        type: CREATE_JOURNAL,
        payload: { id, title }
    }
}