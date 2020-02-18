import axios from 'axios'
const errorResponseHandler = (error: any) => {
  // check for errorHandle config
  if (
    error.config.hasOwnProperty('errorHandle') &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }

  // if has response show the error
  if (error.response) {
    console.log('An error occured', error.response.data.message);
  }
}

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiInstance.interceptors.response.use(
  response => response,
  errorResponseHandler
);

apiInstance.interceptors.request.use(
  config => {
    const idToken = window.localStorage.getItem('idToken');
    if (idToken) {
      config.headers['Authorization'] = idToken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default apiInstance;