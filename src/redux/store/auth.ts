import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

interface SupabaseUser {
  id: string;
  email: string;
}

export interface UserProps {
  role?: 'admin' | 'user';
  email: string;
  password: string;
  fullname: string;
}

interface UserState {
  users: SupabaseUser[];
  user: SupabaseUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  user: null,
  isLoading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (credentials: UserProps) => {
    const { email, password, fullname } = credentials;
    const role = password.startsWith('admin') ? 'admin' : 'user';

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullname,
          role,
        },
      },
    });

    if (error) {
      if (error.code === '422') {
        throw Error('این ایمیل قبلا ثبت نام کرده است');
      }
      throw Error('متاسفانه ثبت نام انجام نشد');
    }

    return data.user as SupabaseUser;
  },
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      return data.user as SupabaseUser;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
);

export const fetchUsers = createAsyncThunk(
  'auth/fetchUsers',
  async (): Promise<SupabaseUser[]> => {
    const { data, error } = await supabase.auth.admin.listUsers();
    console.log('Fetch Users Response:', data, error); // Debugging line

    if (error) {
      throw error;
    }

    return data.users as SupabaseUser[];
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
    setUser(state, action: PayloadAction<SupabaseUser | null>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
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
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<SupabaseUser | undefined>) => {
          state.isLoading = false;
          state.error = null;
          state.user = action.payload ?? null; // Handle undefined case
        },
      )
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      })
      // Signin
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        signinUser.fulfilled,
        (state, action: PayloadAction<SupabaseUser | undefined>) => {
          state.isLoading = false;
          state.error = null;
          state.user = action.payload ?? null; // Handle undefined case
        },
      )
      .addCase(signinUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      })
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<SupabaseUser[]>) => {
          state.isLoading = false;
          state.users = action.payload;
        },
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      })
      // Signout
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
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const { setUser, setLoading, setError, clearError } = authSlice.actions;

export default authSlice.reducer;
