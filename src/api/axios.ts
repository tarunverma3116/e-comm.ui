import axios from 'axios';
import { queryClient } from 'index';

const defaultOptions = {
  baseURL: "https://dummyjson.com/products",
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
export const api = axios.create(defaultOptions);

export default api;