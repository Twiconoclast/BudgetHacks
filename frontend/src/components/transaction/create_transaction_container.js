import CreateTransactionForm from './transaction_index'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import {createTransaction} from '../../actions/transaction_actions'

const mSTP = state => ({
    transaction: {
      date: "",
      amount: "",
      category: "",
      description: ""
    }
})

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP, mDTP)(TransactionIndex))