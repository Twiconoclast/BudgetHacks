import Dashboard from './dashboard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchTransactions, deleteTransaction} from '../../actions/transaction_actions'

const mSTP = state => ({
    user: state.session.user,
    transactions: Object.values(state.transactions),
    balance: state.user.balance
})

const mDTP = dispatch => ({
    fetchTransactions: (userId) => dispatch(fetchTransactions(userId)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)) 
})

export default withRouter(connect(mSTP, mDTP)(Dashboard))