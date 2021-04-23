import axios from 'axios';

export const fetchUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

export const addPrize = (userId, prize) => {
  return axios.patch(`/api/users/prizes/${userId}`, prize)
}