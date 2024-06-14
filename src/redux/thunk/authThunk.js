import { AUTH_LOGIN, AUTH_REGISTER } from "../api/services/authService"

export const authLoginThunk = (formLogin) => {
  return async () => {
    const resp = await AUTH_LOGIN(formLogin);
    if (resp.status === 200) {
      console.log(resp);
    } else {
      console.log(resp);
    }
  }
}

export const authRegisterThunk = (formRegister) => {
  return async () => {
    const resp = await AUTH_REGISTER(formRegister);
    if (resp.status === 200) {
      console.log(resp)
    } else {
      console.log(resp);
    }
  }
}