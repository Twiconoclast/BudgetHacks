import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addPrize} from '../../actions/user_actions'
import PrizeStore from './prize_store'

const mSTP = state => ({
    userId: state.session.user.id,
    user: state.user
})

const mDTP = dispatch => ({
    addPrize: (userId, prize) => dispatch(addPrize(userId, prize))
})

export default withRouter(connect(mSTP, mDTP)(PrizeStore))