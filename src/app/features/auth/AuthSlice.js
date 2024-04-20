import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  username: "",
  csrf_token: ""
};

// export const counterSlice = createSlice({
//     name: "count",
//     initialState,
//     reducers:{
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//         incrementByAmount: (state, action) => {
//             state.addbyvalue += action.payload;
//         }
//     }
// })

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log("action.payload", action.payload);
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.csrf_token = action.payload.csrf_token;
    },
    logout: (state) => {
      state.token = "";
      state.username = "";
    },  
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
