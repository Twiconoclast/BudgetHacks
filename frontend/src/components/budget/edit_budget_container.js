// import React from 'react'
import BudgetForm from './budget_form'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import {updateBudget} from '../../actions/budget_actions'

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
    budget: state.session.user.budget,
    income: state.session.user.budget.income,
    home: state.session.user.budget.home ? state.session.user.budget.home : .40,
    savings: state.session.user.budget.savings ? state.session.user.budget.savings : .12,
    transportation: state.session.user.budget.transportation ? state.session.user.budget.transportation : .08,
    personalCare: state.session.user.budget.personalCare ? state.session.user.budget.personalCare : .05,
    foodAndDining: state.session.user.budget.foodAndDining ? state.session.user.budget.foodAndDining : .15,
    shopping: state.session.user.budget.shopping ? state.session.user.budget.shopping : .05,
    entertainment: state.session.user.budget.entertainment ? state.session.user.budget.entertainment : .05,
    miscellaneous: state.session.user.budget.miscellaneous ? state.session.user.budget.miscellaneous : .02,
    debt: state.session.user.budget.debt ? state.session.user.budget.debt : .08,
    formShow: state.session.user.budget.income ? true : false
// })
})

const mDTP = dispatch => ({
    // updateBudget: (id, budget) => dispatch(updateUser(id, budget))
})

export default withRouter(connect(mSTP, mDTP)(BudgetForm))