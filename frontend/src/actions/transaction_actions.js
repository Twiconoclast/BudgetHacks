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

const deleteTransaction = (transactionId) => ({
    type: DELETE_TRANSACTION,
    transactionId
})

export const fetchTransactions = (userId) => (dispatch) => (
    TransactionAPIUtils.fetchTransactions(userId)
    .then((transactions) => dispatch(receiveTransactions(transactions)))
)

export const getTransaction = (userId) => (dispatch) => (
    TransactionAPIUtils.getTransaction(userId)
    .then((transaction) => dispatch(receiveTransaction(transaction)))
)

export const deleteTransaction = (transactionId) => (dispatch) => (
    TransactionAPIUtils.deleteTransaction(transactionId)
    .then((transaction) => dispatch(deleteTransaction(transaction.id)))
)

export const createTransaction = (transaction) => (dispatch) => (
    TransactionAPIUtils.createTransaction(transaction)
    .then((transaction) => dispatch(receiveTransaction(transaction)))
)

export const updateTransaction = (id, transaction) => (dispatch) => (
    TransactionAPIUtils.updateTransaction(id, transaction)
    .then((transaction) => dispatch(receiveTransaction(transaction)))
)

