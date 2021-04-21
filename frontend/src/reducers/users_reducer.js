import { RECEIVE_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export default userReducer;