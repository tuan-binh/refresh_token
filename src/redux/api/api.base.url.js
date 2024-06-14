import { Cookies } from "react-cookie";
import axios from "axios";

const baseURL = import.meta.env.VITE_URL_SERVER;

export const jsonAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const formAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

const getAccessToken = new Cookies().get('accessToken');

const addInterceptorAxios = (instance) => {
  // interceptor request
  instance.interceptors.request.use(
    (config) => {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => console.log(error)
  );
  // interceptor response
  instance.interceptors.response.use(
    (resp) => resp,
    (err) => err.response
  );
}

addInterceptorAxios(jsonAxios);
addInterceptorAxios(formAxios);