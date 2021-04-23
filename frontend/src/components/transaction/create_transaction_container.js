import CreateTransactionForm from './create_transaction_form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createTransaction} from '../../actions/transaction_actions'
import {fetchUser} from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
  user: state.session.user,
  toggleCreateForm: ownProps.toggleCreateForm
})

const mDTP = dispatch => ({
  createTransaction: (transaction) => dispatch(createTransaction(transaction)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(CreateTransactionForm))