import CreateTransactionForm from './create_transaction_form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createTransaction} from '../../actions/transaction_actions'

const mSTP = (state, ownProps) => ({
  user: state.session.user,
  toggleCreateForm: ownProps.toggleCreateForm
})

const mDTP = dispatch => ({
  createTransaction: (transaction) => dispatch(createTransaction(transaction))
})

export default withRouter(connect(mSTP, mDTP)(CreateTransactionForm))