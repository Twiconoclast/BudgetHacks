import axios from 'axios';

export const updateBudget = (id, budget) => {
  return axios.post(`/api/budget/${id}`, budget);
};
