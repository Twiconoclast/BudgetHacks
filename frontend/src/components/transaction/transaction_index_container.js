import TransactionIndex from './transaction_index'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchTransactions, deleteTransaction} from '../../actions/transaction_actions'
import {fetchUser} from '../../actions/user_actions'

const mSTP = state => ({
    user: state.session.user,
    transactions: state.transactions,
    balance: state.user.balance
})

const mDTP = dispatch => ({
    fetchTransactions: (userId) => dispatch(fetchTransactions(userId)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)) ,
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(TransactionIndex))