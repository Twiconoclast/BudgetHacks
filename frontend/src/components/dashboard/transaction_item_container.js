import TransactionItem from './transaction_item';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getTransaction} from '../../actions/transaction_actions';

const mSTP = (state, ownProps) => ({
    user: state.session.user,
    transactionId: ownProps.transaction.id,
    transaction: ownProps.transaction,
})

const mDTP = dispatch => ({
    getTransaction: (transactionId) => dispatch(getTransaction(transactionId)), 
})

export default withRouter(connect(mSTP, mDTP)(TransactionItem))