// src/config.js

// Check if we are running in development mode (local) or production
const isDevelopment = import.meta.env.MODE === 'development';

// If development, use localhost. If production, use your real URL.
export const API_BASE_URL = isDevelopment 
  ? "http://127.0.0.1:8000" 
  : "https://nourishlaredo.com"; // <-- REPLACE THIS with your actual backend URL