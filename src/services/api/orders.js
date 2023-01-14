import api from './index';
import { API_URL } from '../../constants';

function getOrders(userId) {
  const token = localStorage.getItem('token');

  return api.get(`${API_URL}/orders/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function updateOrderStatus(userId, orderId, orderStatus) {
  const token = localStorage.getItem('token');

  return api.put(
    `${API_URL}/orders/${userId}/${orderId}`,
    {
      orderStatus,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export { getOrders, updateOrderStatus };
