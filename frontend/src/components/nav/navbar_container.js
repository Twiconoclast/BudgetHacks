import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import NavBar from './navbar';
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));