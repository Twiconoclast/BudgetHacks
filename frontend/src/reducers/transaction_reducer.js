import {RECEIVE_TRANSACTIONS, 
        RECEIVE_TRANSACTION, 
        DELETE_TRANSACTION} from '../actions/transaction_actions';
import {RECEIVE_USER_LOGOUT} from '../actions/session_actions'

const transactionReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_TRANSACTIONS: {
            newState = action.transactions.data;
            return newState
        }
        case RECEIVE_TRANSACTION: {
            newState[action.transaction.data.id] = action.transaction.data;
            return newState
        }
        case DELETE_TRANSACTION: {
            delete newState[action.transaction.data.id];
            return newState
        }
        case RECEIVE_USER_LOGOUT: {
            newState = {}
            return newState
        }
        default:
            return newState;
    }
}

export default transactionReducer


