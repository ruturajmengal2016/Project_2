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
    addData: (state, action) => {
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

export const { addData, setData } = userSlice.actions;
