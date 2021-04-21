// import React from 'react'
import BudgetShow from './budget_show'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import {updateUser} from '../../actions/user_actions'

const mSTP = state => ({
    user: state.session.user,
    budget: state.session.user.budget,
    // budgetHeader: state.session.user.budget.income ? "Welcome to your budget!" : "Your Budget",
    // budgetSubHeader: state.session.user.budget.income ? "Click the button to get started" : "Keep up the good work and you'll receive this fabulous prize:",
    // buttonText: state.session.user.budget.income ? "Create your Budget" : "Edit your Budget"
    budgetHeader: state.session.user.income ? "Welcome to your budget!" : "Your Budget",
    budgetSubHeader: state.session.user.income ? "Click the button to get started" : "Keep up the good work and you'll receive this fabulous prize:",
    buttonText: state.session.user.income ? "Create your Budget" : "Edit your Budget"
})

const mDTP = dispatch => ({
    // updateBudget: (id, budget) => dispatch(updateUser(id, budget))
})

export default withRouter(connect(mSTP, mDTP)(BudgetShow))