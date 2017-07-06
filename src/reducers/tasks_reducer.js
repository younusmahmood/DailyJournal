import { ADD_TASK } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case ADD_TASK: 
            //console.log(state);
            return { ...state, time: action.payload.time, task: action.payload.task };
        default:
            return state;
    }
}