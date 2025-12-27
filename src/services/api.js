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

// function for fetching watch by model number
export const fetchWatchByModelNumber = async (modelNumber) => {
  try {
    console.log('Fetching watch with model number:', modelNumber);
    const response = await api.get(`/watches/model/${modelNumber}`);
    return response.data.data[0];
  } catch (error) {
    console.error(`Error fetching watch with model number ${modelNumber}:`, error);
    throw error;
  }
};

//function for placing an order
export const placeOrder = async (orderData) => {
  try {
    const response = await api.post(`/watch-order/${orderData}`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};

export const userAuth = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  register: async (userInfo) => {
    try {
      const response = await api.post('/auth/create-account', userInfo);
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  },

  verifyUser: async (token) => {
    try {
      const response = await api.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error verifying user:', error);
      throw error;
    }
  },
}

export const paymentApi = (token, paymentData) => {
  return api.post('/payments/create-checkout-session', paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}