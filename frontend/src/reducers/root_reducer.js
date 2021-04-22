import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import budget from './budget_reducer';
import user from './users_reducer';

const RootReducer = combineReducers({
  user,
  session,
  budget,
  errors
});

export default RootReducer;