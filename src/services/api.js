import axios from 'axios';

// Import meta for environment variable
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance with default config
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT ? parseInt(process.env.REACT_APP_API_TIMEOUT) : 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// function for watch data fetching
export const fetchWatches = async () => {
  try {
    const response = await api.get('/watches');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching watches:', error);
    throw error;
  }
};

// function for placing an order
// export const placeOrder = async (orderData) => {
//   try {
//     const response = await api.post('/orders', orderData);
//     return response.data;
//   } catch (error) {
//     console.error('Error placing order:', error);
//     throw error;
//   }
// };
