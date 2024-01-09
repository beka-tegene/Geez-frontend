import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputRegister: [],
  InputLogin: [],
  InputChangePassword: [],
  InputContactUs: [],
};

const AuthStore = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoginData(state) {},
    setLogin(state, action) {
      const newData = action.payload;
      state.InputLogin.push({
        email: newData.email,
        password: newData.password,
      });
    },
    setRegisterData(state) {},
    setRegister(state, action) {
      const newData = action.payload;
      state.InputRegister.push({
        email: newData.email,
        password: newData.password,
      });
    },
    setChangePasswordData(state) {},
    setChangePassword(state, action) {
      const newData = action.payload;
      state.InputChangePassword.push({
        Id: newData.Id,
        oldPassword: newData.oldPassword,
        newPassword: newData.newPassword,
      });
    },
    setContactUsData(state) {},
    setContactUs(state, action) {
      const newData = action.payload;
      state.InputContactUs.push({
        email: newData.email,
        password: newData.password,
      });
    },
  },
});

export const {
  setRegister,
  setRegisterData,
  setLoginData,
  setLogin,
  setChangePasswordData,
  setChangePassword,
  setContactUsData,
  setContactUs,
} = AuthStore.actions;

export default AuthStore.reducer;
