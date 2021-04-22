import EditTransactionForm from './edit_transaction_form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {updateTransaction, deleteTransaction, getTransaction} from '../../actions/transaction_actions'

const mSTP = (state, ownProps) => ({
  user: state.session.user,
  toggleEditForm: ownProps.toggleEditForm,
  transaction: ownProps.transaction
})

const mDTP = dispatch => ({
  updateTransaction: (transaction) => dispatch(updateTransaction(transaction)),
  deleteTransaction: (transactionId) => dispatch(deleteTransaction(transactionId)),
  getTransaction: (transactionId) => dispatch(getTransaction(transactionId))
})

export default withRouter(connect(mSTP, mDTP)(EditTransactionForm))