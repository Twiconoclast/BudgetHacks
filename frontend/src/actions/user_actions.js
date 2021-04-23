import * as UserAPIUtil from '../util/user_util'
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = (userId) => dispatch => (
    UserAPIUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)))
)

export const addPrize = (userId, prize) => dispatch => (
    UserAPIUtil.addPrize(userId, prize).then((user) => dispatch(receiveUser(user)))
)