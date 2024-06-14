import { jsonAxios } from "../api.base.url"

export const AUTH_LOGIN = async (formLogin) => {
  const response = await jsonAxios.post('/api/v1/auth/login', formLogin);
  return response;
}

export const AUTH_REGISTER = async (formRegister) => {
  const response = await jsonAxios.post('/api/v1/auth/register', formRegister);
  return response;
}