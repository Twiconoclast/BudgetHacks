import {RECEIVE_BUDGET} from '../actions/budget_actions'
import {RECEIVE_USER_LOGOUT} from '../actions/session_actions'

const budgetReducer = (state={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_BUDGET: {
            newState = action.budget
            return newState
        }
        case RECEIVE_USER_LOGOUT: {
            newState = {}
            return newState
        }
        default:
        return newState
    }
}

export default budgetReducer