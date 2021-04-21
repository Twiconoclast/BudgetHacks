// import React from 'react'
import BudgetForm from './budget_form'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateBudget, fetchBudget} from '../../actions/budget_actions'

const mSTP = (state, ownProps) => ({
    // user: state.session.user,
    // budget: state.session.user.budget,
    // income: 1000,
    // home: .40,
    // savings: .12,
    // transportation: .08,
    // personalCare: .05,
    // foodAndDining: .15,
    // shopping: .05,
    // entertainment: .05,
    // miscellaneous: .02,
    // debt: .08,
    // formShow: false
    user: state.session.user,
    budget: state.budget,
    income: state.budget.income,
    home: state.budget.income ? state.budget.home : .40,
    savings: state.budget.income ? state.budget.savings : .12,
    transportation: state.budget.income ? state.budget.transportation : .08,
    personalCare: state.budget.income ? state.budget.personalCare : .05,
    foodAndDining: state.budget.income ? state.budget.foodAndDining : .15,
    shopping: state.budget.income ? state.budget.shopping : .05,
    entertainment: state.budget.income ? state.budget.entertainment : .05,
    miscellaneous: state.budget.income ? state.budget.miscellaneous : .02,
    debt: state.budget.income ? state.budget.debt : .08,
    formShow: state.budget.income ? true : false
// })
})

const mDTP = dispatch => ({
    updateBudget: (id, budget) => dispatch(updateBudget(id, budget)),
    fetchBudget: (id) => dispatch(fetchBudget(id)) 
})

export default withRouter(connect(mSTP, mDTP)(BudgetForm))