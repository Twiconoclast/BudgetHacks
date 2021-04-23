import SpendingChart from './spending_chart'
import {connect} from 'react-redux'

const mSTP = state => ({
    transactions: Object.values(state.transactions),
})

export default connect(mSTP)(SpendingChart)