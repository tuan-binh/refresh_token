import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataLogin: {},
  dataRegister: {},
  errorLogin: {},
  errorRegister: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDataLogin: () => {

    },
    resetDataLogin: () => {

    },
    setDataRegister: () => {

    },
    resetDataRegister: () => {

    },
    setErrorLogin: () => {

    },
    setErrorRegister: () => {

    }
  }
})

export const { setDataLogin, setDataRegister, resetDataLogin, resetDataRegister, setErrorLogin, setErrorRegister } = authSlice.actions;
export default authSlice.reducer;