import { createSlice } from "@reduxjs/toolkit";



interface UserState {
  email: string | null;
  error: string|null;
  isAuth: boolean;
  password: string;
  name: string;
}


/* type UserInfo = {
  email: string;
  password: string;
}; */

const initialState: UserState = {
  email: "",
  error: null,
  isAuth: false,
  password: "",
  name: "",
};

/* 
const fetchSignUpUser = createAsyncThunk<UserInfo, UserState, {rejectValue: string} >(
  "user/fetchSignUpUser", 
  async ({email, password} : UserInfo, {rejectWithValue}) => {
    const auth = getAuth();
    try {
      
      const response: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

      const userObj: IUser = {
        id: response.user.uid,
        email: response.user.email,
        meta: response.user.metadata,
      };
      return userObj;
    } catch (err) {
      const newError = err as FirebaseError;
      if (newError.code === AUTH_ERROR_CODES.EMAIL_ALLREADY_EXISTS) {
        return rejectWithValue(
          "This email is already occupied. Please sign in or use another email address"
        );
      }
      return rejectWithValue("Unexpected error recieved from server. Please");
    }
  }
);

 */

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    removeUser(state) {
      state.email = "";
      state.name = "";

      state.password = "";
      state.isAuth = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
