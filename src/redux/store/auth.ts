import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  email: string;
  password: string;
}

interface UserState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
  isOpenSigningModal: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
  isOpenSigningModal: false,
};

export const signupUser = createAsyncThunk<
  UserState['user'],
  SignupCredentials
>('auth/signupUser', async (credentials, { rejectWithValue }) => {
  try {
    const { email, password } = credentials;
    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return user;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const loginUser = createAsyncThunk<UserState['user'], LoginCredentials>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { email, password } = credentials;
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      return user;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsOpenSigningModal: (state, action) => {
      state.isOpenSigningModal = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<UserState['user']>) => {
          state.isLoading = false;
          state.error = null;
          state.user = action.payload;
        },
      )
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      //   Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserState['user']>) => {
          state.isLoading = false;
          state.error = null;
          state.user = action.payload;
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setUser,
  setLoading,
  setError,
  setIsOpenSigningModal,
  clearError,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
