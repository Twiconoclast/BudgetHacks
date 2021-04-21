// import React from 'react'
import BudgetForm from './budget_form'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateBudget} from '../../actions/budget_actions'

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
    user: state.user,
    budget: state.user.budget,
    income: state.user.budget.income,
    home: state.user.budget.income ? state.user.budget.home : .40,
    savings: state.user.budget.income ? state.user.budget.savings : .12,
    transportation: state.user.budget.income ? state.user.budget.transportation : .08,
    personalCare: state.user.budget.income ? state.user.budget.personalCare : .05,
    foodAndDining: state.user.budget.income ? state.user.budget.foodAndDining : .15,
    shopping: state.user.budget.income ? state.user.budget.shopping : .05,
    entertainment: state.user.budget.income ? state.user.budget.entertainment : .05,
    miscellaneous: state.user.budget.income ? state.user.budget.miscellaneous : .02,
    debt: state.user.budget.income ? state.user.budget.debt : .08,
    formShow: state.user.budget.income ? true : false
// })
})

const mDTP = dispatch => ({
    updateBudget: (id, budget) => dispatch(updateBudget(id, budget))
})

export default withRouter(connect(mSTP, mDTP)(BudgetForm))