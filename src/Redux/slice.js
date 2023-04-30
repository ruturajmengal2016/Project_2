import { createSlice } from "@reduxjs/toolkit";

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

export const { tweetData } = tweetSlice.actions;
export const { tweeterUser } = tweetUsers.actions;
