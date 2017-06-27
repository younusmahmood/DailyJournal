import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TasksReducer from './tasks_reducer';

const rootReducer = combineReducers({
    tasks: TasksReducer
});

export default rootReducer;