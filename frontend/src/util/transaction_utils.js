import axios from 'axios';

export const fetchTransactions = (userId) => {
  return axios.get(`/api/transactions/user/${userId}`);
}

export const getTransaction = (transactionId) => {
  return axios.get(`/api/transactions/${transactionId}`);
};

export const deleteTransaction = (transactionId) => {
  return axios.delete(`/api/transactions/${transactionId}`);
};

export const createTransaction = (transaction) => {
  return axios.post('/api/transactions/', transaction);
};

export const updateTransaction = (id, transaction) => {
  return axios.patch(`/api/transactions/${id}`, transaction);
};

