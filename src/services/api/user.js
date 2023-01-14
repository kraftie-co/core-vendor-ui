import api from './index';
import { API_URL } from '../../constants';

async function login(email, password) {
  return api.post(`${API_URL}/login`, {
    email,
    password,
  });
}

async function register(email, password) {
  return api.post(`${API_URL}/register`, {
    email,
    password,
  });
}

function getUserDetails(userId) {
  const token = localStorage.getItem('token');

  return api.get(`${API_URL}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { login, register, getUserDetails };
