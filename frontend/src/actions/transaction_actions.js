import * as TransactionAPIUtils from '../util/transaction_utils'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';


const receiveTransactions = (transactions) => ({
    type: RECEIVE_TRANSACTIONS,
    transactions
})

const receiveTransaction = (transaction) => ({
    type: RECEIVE_TRANSACTION,
    transaction
})

const removeTransaction = (transactionId) => ({
    type: DELETE_TRANSACTION,
    transactionId
})

export const fetchTransactions = (userId) => (dispatch) => (
    TransactionAPIUtils.fetchTransactions(userId)
    .then((transactions) => dispatch(receiveTransactions(transactions)))
)

export const getTransaction = (transactionId) => (dispatch) => (
    TransactionAPIUtils.getTransaction(transactionId)
    .then((transaction) => dispatch(receiveTransaction(transaction)))
)

export const deleteTransaction = (transactionId) => (dispatch) => (
    TransactionAPIUtils.deleteTransaction(transactionId)
    .then(() => dispatch(removeTransaction(transactionId)))
)

export const createTransaction = (transaction) => (dispatch) => (
    TransactionAPIUtils.createTransaction(transaction)
    .then((transaction) => dispatch(receiveTransaction(transaction)))
)

export const updateTransaction = (transaction) => (dispatch) => {
    return TransactionAPIUtils.updateTransaction(transaction)
    .then((transaction) => dispatch(receiveTransaction(transaction)))
}


