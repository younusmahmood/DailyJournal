import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import TasksReducer from './tasks_reducer';

const rootReducer = combineReducers({
    form,
    tasks: TasksReducer
});

export default rootReducer;