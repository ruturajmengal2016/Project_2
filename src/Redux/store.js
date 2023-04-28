import { configureStore } from "@reduxjs/toolkit";
import { userSlice, tweetSlice, tweetUsers } from "./slice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    tweet: tweetSlice.reducer,
    tweeterUsers: tweetUsers.reducer,
  },
});
