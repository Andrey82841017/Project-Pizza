import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3100',
});

let accessToken = '';

function setAccessToken(newToken) {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  console.log('interceptors', accessToken);

  // * для передачи куки
  config.withCredentials = true;

  if (!config.headers.Authorization) {
    config.headers.Authorization = `Raccoons ${accessToken}`;
  }
  return config;
});

export { setAccessToken };

export default axiosInstance;
