import axios from 'axios';

export const fetchBudget = (id) => {
  return axios.get(`/api/budget/${id}`);
}

export const updateBudget = (id, budget) => {
  return axios.patch(`/api/budget/${id}`, budget);
};
