
const isDevelopment = import.meta.env.MODE === 'development';

export const API_BASE_URL = isDevelopment 
  ? "http://127.0.0.1:8000" 
  : "https://nourishlaredo.com"; 