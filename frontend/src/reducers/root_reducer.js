import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import budget from './budget_reducer'

const RootReducer = combineReducers({
  session,
  budget,
  errors
});

export default RootReducer;