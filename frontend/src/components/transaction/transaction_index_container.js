import TransactionIndex from './transaction_index'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import {fetchTransactions, deleteTransaction} from '../../actions/transaction_actions'

const mSTP = state => ({
    user: state.session.user,
    transactions: state.transactions,
    balance: state.session.user.balance
})

const mDTP = dispatch => ({
    // fetchTransactions: (userId) => dispatch(fetchTransactions(userId)),
    // deleteTransaction: (id) => dispatch(deleteTransaction(id)) 
})

export default withRouter(connect(mSTP, mDTP)(TransactionIndex))