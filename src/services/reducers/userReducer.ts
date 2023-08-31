import {  createSlice } from "@reduxjs/toolkit";
import { UserStates } from "../../helpers/models";

const userReducer = createSlice({
  name: "user",
  initialState: {
    AllUsers: [],
    matchedUser: [],
  } as UserStates,

  reducers: {
    onSubmit: (state, action) => {
      state.AllUsers.push(action.payload);
    },

    login: (state, action) => {
      const All = state.AllUsers;
      const userToCheck = action.payload;
      const matched = All.filter(
        (item) =>
          item.email === userToCheck.email &&
          item.password === userToCheck.password
      );
      state.matchedUser = matched;
    },
  },
});

export const { onSubmit, login } = userReducer.actions;
export default userReducer.reducer;
