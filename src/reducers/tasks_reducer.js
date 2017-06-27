import { ADD_TASK, DELETE_TASK } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case ADD_TASK:
            return [ ...state, action.task ]
    } 
    return state;
}