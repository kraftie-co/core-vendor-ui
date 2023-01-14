import axios from 'axios';

let isRedirectingToLogin = false;

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !isRedirectingToLogin) {
      isRedirectingToLogin = true;
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default instance;
