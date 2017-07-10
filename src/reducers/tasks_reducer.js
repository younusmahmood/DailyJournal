import { ADD_TASK } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case ADD_TASK: 
            return [ ...state, {...action.payload} ];
        default:
            return state;
    }
}