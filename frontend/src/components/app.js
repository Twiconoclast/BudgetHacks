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
import '../App.scss';
import BudgetShowContainer from './budget/budget_show_container'
import EditBudgetContainer from './budget/edit_budget_container'
import TransactionIndexContainer from './transaction/transaction_index_container';

import DashboardContainer from './dashboard/dashboard_container';

import PrizeStoreContainer from './prize_store/prize_store_container'


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <ProtectedRoute exact path="/profile" component={} /> */}
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute exact path="/transactions" component={TransactionIndexContainer} />
        <ProtectedRoute exact path="/budget" component={BudgetShowContainer} />
        <ProtectedRoute exact path="/budget/edit" component={EditBudgetContainer} />
        <ProtectedRoute exact path="/prizes" component={PrizeStoreContainer} />
    </Switch>
  </div>
);

export default App;