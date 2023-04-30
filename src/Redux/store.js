import { configureStore } from "@reduxjs/toolkit";
import { tweetSlice, tweetUsers } from "./slice";

export const store = configureStore({
  reducer: {
    tweet: tweetSlice.reducer,
    tweeterUsers: tweetUsers.reducer,
  },
});
