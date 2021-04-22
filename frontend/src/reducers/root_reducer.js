import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import budget from './budget_reducer';
import user from './users_reducer';
import transactions from './transaction_reducer';

const RootReducer = combineReducers({
  user,
  budget,
  transactions,
  session,
  errors
});

export default RootReducer;