import React from 'react'
import BudgetShow from './budget_form'
import {updateUser} from '../../actions/user_actions'

const mSTP = state => ({
    user: state.session.user
})

const mDTP = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
})

export default withRouter(connect(mSTP, mDTP)(BudgetShow))