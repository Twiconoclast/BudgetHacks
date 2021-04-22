import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import NavBar from './navbar';
// import { fetchTransactions, 
//   createTransaction, 
//   updateTransaction, 
//   deleteTransaction, 
//   getTransaction } from '../../actions/transaction_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);