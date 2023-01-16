import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirm: string;
  newPassword: string;
}

interface ISignInValues {
  email: string;
  password: string;
}

interface SignUpValues {
  email: string;
  password: string;
  confirm: string;
}

interface IEmailForReset {
  email: string;
}

interface IUserData {
  userName: string;
  userEmail: string;
}
interface UserState {
  email: string;
  name: string;
  error: string | null;
  isAuth: boolean;
  isLoading: boolean;
  emailForReset: string;
}

const initialState: UserState = {
  email: "",
  error: null,
  isAuth: false,
  isLoading: false,
  name: "",
  emailForReset: "",
};

export const fetchSignInUser = createAsyncThunk<
  IUserData,
  ISignInValues,
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    const userName = response.user.displayName as string;
    const userEmail = response.user.email as string;
    return { userName, userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };

    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignUpUser = createAsyncThunk<
  IUserData,
  SignUpValues,
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password);
    const userName = response.user.displayName as string;
    const userEmail = response.user.email as string;
    return { userName, userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };

    return rejectWithValue(firebaseError.code);
  }
});

export const fetchSignOut = createAsyncThunk<void, undefined, { rejectValue: FirebaseError }>(
  "user/fetchSignOut",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await auth.signOut;
    } catch (error) {
      const firebaseError = error as { code: FirebaseError };

      return rejectWithValue(firebaseError.code);
    }
  },
);

export const fetchResetPassword = createAsyncThunk<
  string,
  IEmailForReset,
  { rejectValue: FirebaseError }
>("user/fetchResetPassword", async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    return email;
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };
    return rejectWithValue(firebaseError.code);
  }
});

export const fetchUpdateUser = createAsyncThunk<
  void,
  IRegisterUser,
  { rejectValue: FirebaseError }
>("user/fetchUpdateUser", async ({ name, password, email, confirm }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    user && (await updateEmail(user, email));
    user && (await updatePassword(user, password));
    user && (await updateProfile(user, { displayName: name }));
  } catch (error) {
    const firebaseError = error as { code: FirebaseError };
    return rejectWithValue(firebaseError.code);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<IRegisterUser>) {
      state.email = payload.email;
      state.name = payload.name;
      state.isAuth = true;
      state.error = null;
    },
    removeUser(state) {
      state.email = "";
      state.name = "";
      state.isAuth = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
      state.name = payload.userName;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.isAuth = true;
      state.error = null;
    });

    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
      state.name = payload.userName;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = null;
    });

    builder.addCase(fetchSignOut.pending, (state) => {
      state.isLoading = true;
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = null;
    });

    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isAuth = true;
        state.error = payload.code;
      }
    });

    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.emailForReset = payload;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;

        state.error = payload.code;
      }
    });

    builder.addCase(fetchUpdateUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchUpdateUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchUpdateUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;

        state.error = payload.code;
      }
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
