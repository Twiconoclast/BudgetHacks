import React from 'react';
import { Link } from 'react-router-dom'
import {BsPersonPlusFill, BsShieldLockFill} from 'react-icons/bs';
import {BiLockOpen} from 'react-icons/bi';
import logo from '../../images/logo_plain.png';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  handleDemo(e) {
      e.preventDefault();
       this.props.login( { username: 'DemoUser', password: '123456'} );
  } 

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

   // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                {/* <Link to={'/tweets'}>All Tweets</Link> */}
                <Link to={'/profile'}>Profile</Link>
                {/* <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
                 <nav className="login-signup">
                <div className='nav-left'>
                    {/* Our Logo on the left */}
                    <Link to="/" className="header-link">
                    <img src={logo} alt="BudgetHacks Logo"/>
                    </Link>
                    {/* <h1>BudgetHacks</h1> */}
                </div>
                <div className='nav-right'>
                    <button>
                    <Link to="/signup">
                    <p className='icon'><BsPersonPlusFill/></p>
                    <div className='button-text'> Sign Up</div>
                    </Link>
                    </button>

                    <button>
                    <Link to="/login">
                    <p className='icon'><BsShieldLockFill/></p>
                    <div className='button-text'> Sign In</div>
                    </Link>
                    </button>
        
                    <button className='demo' onClick={this.handleDemo}>
                    <p className='icon'><BiLockOpen/></p> 
                    <div className='button-text'> Demo Sign In</div> 
                    </button>
                </div>
            </nav>
            // <div>
            //     <Link to={'/signup'}>Sign Up</Link>
            //     <Link to={'/login'}>Login</Link>
            // </div>
        );
      }
    }
    render() {
        return (
            <div>
                { this.getLinks() }
            </div>
        );
    }
}

export default NavBar;

