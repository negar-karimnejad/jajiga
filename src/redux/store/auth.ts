import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

interface SigningParams {
  email: string;
  password: string;
}

interface UserState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (credentials: SigningParams) => {
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
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
);

export const signoutUser = createAsyncThunk('auth/signoutUser', async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
});

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

    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      //   Signin
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      //   Signout
      .addCase(signoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(signoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, setLoading, setError, clearError } = authSlice.actions;

export default authSlice.reducer;
