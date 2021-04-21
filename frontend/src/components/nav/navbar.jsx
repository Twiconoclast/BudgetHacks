import React from 'react';
import { Link } from 'react-router-dom'
import {BsPersonPlusFill, BsShieldLockFill} from 'react-icons/bs';
import {BiLockOpen} from 'react-icons/bi';
import logo from '../../images/logo_plain.png';
import {ImProfile} from 'react-icons/im';
import {IoMdLogOut} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';


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

    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <nav className="logout">
                <div className='nav-left'>
                    <div className="dropdown">
                        <button onClick={this.myFunction} className="dropbtn"><GiHamburgerMenu/></button>
                        <div id="myDropdown" className="dropdown-content">
                            <a href="#">Budget</a>
                            <a href="#">Transactions</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <Link to="/" className="header-link">
                    <img src={logo} alt="BudgetHacks Logo"/>
                    </Link>
                </div>
                <div className='nav-right'>
                    <button>
                    <Link to={'/profile'}>                    
                    <p className='icon'><ImProfile/></p>
                    <div className='button-text'> Profile </div>
                    </Link>
                    </button>
                    <button onClick={this.logoutUser}>
                        <a href="">
                        <p className='icon'><IoMdLogOut/></p>
                        <div className='button-text'> Logout </div>
                        </a>
                    </button>
                </div>
            </nav>
        );
      } else {
        return (
                <nav className="login-signup">
                <div className='nav-left'>
                    <Link to="/" className="header-link">
                    <img src={logo} alt="BudgetHacks Logo"/>
                    </Link>
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

