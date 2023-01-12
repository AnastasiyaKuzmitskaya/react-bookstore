import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  id: string | null;
  isAuth: boolean;
  password: string;
  name: string;
}

const initialState: UserState = {
  email: "",
  id: "",
  isAuth: false,
  password: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    removeUser(state) {
      state.email = "";
      state.name = "";
      state.id = "";

      state.password = "";
      state.isAuth = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
