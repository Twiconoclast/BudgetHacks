import EditTransactionForm from './edit_transaction_form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import {updateTransaction} from '../../actions/transaction_actions'

const mSTP = (state, ownProps) => ({
  user: state.session.user,
  toggleEditForm: ownProps.toggleEditForm
})

const mDTP = dispatch => ({
  updateTransaction: (transaction) => dispatch(updateTransaction(transaction))
})

export default withRouter(connect(mSTP, mDTP)(EditTransactionForm))