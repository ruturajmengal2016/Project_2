import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
      password: "",
      phone: "",
      DOB: "",
    },
    data: [],
  },
  reducers: {
    addData: (state) => {
      state.data.push(state.value);
    },
    setData: (state, action) => {
      state.value = {
        ...state.value,
        [action.payload.name]: action.payload.text,
      };
    },
  },
});

export const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    data: [],
  },
  reducers: {
    tweetData: (state, action) => {
      state.data.push(action.payload.data);
    },
  },
});

export const tweetUsers = createSlice({
  name: "tweetUsers",
  initialState: {
    data: [],
  },
  reducers: {
    tweeterUser: (state, action) => {
      state.data.push(action.payload.data);
    },
  },
});

export const { addData, setData } = userSlice.actions;
export const { tweetData } = tweetSlice.actions; 
export const { tweeterUser } = tweetUsers.actions; 
