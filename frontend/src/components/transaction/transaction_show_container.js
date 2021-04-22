import TransactionShow from './transaction_show'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchTransaction} from '../../actions/transaction_actions'

const mSTP = (state, ownProps) => ({
    user: state.session.user,
    transactionId: ownProps.transaction.id,
    transaction: ownProps.transaction,
})

const mDTP = dispatch => ({
    fetchTransaction: (transactionId) => dispatch(fetchTransaction(transactionId)), 
})

export default withRouter(connect(mSTP, mDTP)(TransactionShow))