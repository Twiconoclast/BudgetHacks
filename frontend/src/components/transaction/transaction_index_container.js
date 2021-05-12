import TransactionIndex from './transaction_index'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchTransactions, deleteTransaction} from '../../actions/transaction_actions'
import {fetchUser} from '../../actions/user_actions'

const starter = (a,b) => {
    return a.date > b.date ? -1 : a.date < b.date ? 1 : 0 }

const mSTP = state => ({
    user: state.session.user,
    transactions: Object.values(state.transactions).sort(starter),
    balance: state.user.balance,
    selectedCategory: 'all',
    selectedDate: "yyyy-MM-dd"
})

const mDTP = dispatch => ({
    fetchTransactions: (userId) => dispatch(fetchTransactions(userId)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)) ,
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(TransactionIndex))