import * as BudgetAPIUtils from '../util/budget_utils'
export const RECEIVE_BUDGET = 'RECEIVE_BUDGET'


const receiveBudget = (budget) => ({
    type: RECEIVE_BUDGET,
    budget
})

export const fetchBudget = (id) => (dispatch) => (
    BudgetAPIUtils.fetchBudget(id).then((budget) => dispatch(receiveBudget(budget)))
)

export const updateBudget = (id, budget) => (dispatch) => {
    return BudgetAPIUtils.updateBudget(id, budget)
    .then((budget) => {
        return dispatch(receiveBudget(budget))})
}

