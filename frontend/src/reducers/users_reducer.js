import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import { RECEIVE_USER} from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user.data;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default userReducer;