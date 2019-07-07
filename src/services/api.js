import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://192.168.0.108:3030',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@pizza:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    console.tron.log(err);
  }
  return config;
});

export default api;
