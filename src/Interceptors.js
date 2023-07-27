import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace this with your API base URL
});

// Request interceptor: Executes before each HTTP request is sent
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config if needed (e.g., adding headers, authentication token)
    // For example:
    // config.headers['Authorization'] = 'Bearer ' + getAuthToken();

    return config;
  },
  (error) => {
    // Handle request error (e.g., network error)
    return Promise.reject(error);
  }
);

// Response interceptor: Executes before each HTTP response is resolved or rejected
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data if needed before it is resolved
    return response;
  },
  (error) => {
    // Handle response error (e.g., unauthorized, server error)
    // For example:
    // if (error.response.status === 401) {
    //   // Redirect to login page or refresh token
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;