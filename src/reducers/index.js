import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import TasksReducer from './tasks_reducer'
import JournalsReducer from './journals_reducer'
import AuthReducer from './auth_reducer'

const rootReducer = combineReducers({
  form,
  tasks: TasksReducer,
  journals: JournalsReducer,
  auth: AuthReducer
})

export default rootReducer
