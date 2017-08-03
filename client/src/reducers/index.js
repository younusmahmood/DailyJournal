import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import TasksReducer from './tasks_reducer';
import JournalsReducer from './journals_reducer'

const rootReducer = combineReducers({
    form,
    tasks: TasksReducer,
    journals: JournalsReducer
});

export default rootReducer;