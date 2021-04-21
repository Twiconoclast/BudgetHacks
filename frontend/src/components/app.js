import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
// Main Navigation
import NavBarContainer from './nav/navbar_container';
// Homepage
import MainPage from './main/main_page.jsx'; 
// Login Form
import LoginFormContainer from './session/login_form_container';
// Sign Up Form
import SignupFormContainer from './session/signup_form_container';
// import '../App.scss' from '';
import BudgetShowContainer from './budget/budget_show_container'
import EditBudgetContainer from './budget/edit_budget_container'


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <ProtectedRoute exact path="/profile" component={} /> */}
        {/* <ProtectedRoute exact path="/dashboard" component={} /> */}
        <ProtectedRoute exact path="/budget" component={BudgetShowContainer} />
        <ProtectedRoute exact path="/budget/edit" component={EditBudgetContainer} />
    </Switch>
  </div>
);

export default App;