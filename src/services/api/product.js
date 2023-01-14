import api from './index';
import { API_URL } from '../../constants';

function getProducts(userId) {
  const token = localStorage.getItem('token');

  return api.get(`${API_URL}/products/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function addProduct(userId, product) {
  const token = localStorage.getItem('token');

  return api.post(`${API_URL}/products/${userId}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function updateProduct(userId, productId, product) {
  const token = localStorage.getItem('token');

  return api.put(`${API_URL}/products/${userId}/${productId}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function deleteProduct(userId, productId) {
  const token = localStorage.getItem('token');

  return api.delete(`${API_URL}/products/${userId}/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { getProducts, addProduct, updateProduct, deleteProduct };
