import BudgetChart from './budget_chart'
import {connect} from 'react-redux'
import {fetchBudget} from '../../actions/budget_actions'

const mSTP = state => ({
    user: state.session.user,
    budget: state.budget,
    transactions: Object.values(state.transactions),
})

const mDTP = dispatch => ({
    fetchBudget: (id) => dispatch(fetchBudget(id)) 
})

export default connect(mSTP, mDTP)(BudgetChart)