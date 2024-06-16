import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface SupabaseUser {
  user_metadata: {
    fullname: string;
    role: string;
  };
  id: string;
  email?: string;
}

export interface UserProps {
  role?: 'admin' | 'user';
  email: string;
  password: string;
  fullname?: string;
}

interface UserState {
  users: SupabaseUser[];
  user: SupabaseUser | null;
  isLoading: boolean;
  isFetched: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  user: null,
  isLoading: false,
  isFetched: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (credentials: UserProps): Promise<SupabaseUser> => {
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

    const user: SupabaseUser = {
      id: data.user?.id || '',
      email: data.user?.email,
      user_metadata: {
        fullname: fullname!,
        role,
      },
    };

    return user;
  },
);

export const signinUser = createAsyncThunk(
  'auth/signinUser',
  async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<SupabaseUser> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw Error('متاسفانه ثبت نام انجام نشد');
    }

    const user: SupabaseUser = {
      id: data.user?.id,
      email: data.user?.email,
      user_metadata: data.user?.user_metadata as {
        fullname: string;
        role: string;
      },
    };

    return user;
  },
);

export const getUsers = createAsyncThunk(
  'auth/getUsers',
  async (): Promise<SupabaseUser[]> => {
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) {
      throw error;
    }

    return data.users as [];
  },
);

export const editUser = createAsyncThunk(
  'auth/editUser',
  async (newUser: SupabaseUser) => {
    const { data, error } = await supabase.auth.updateUser({
      email: newUser.email,
      data: { fullname: newUser.user_metadata.fullname },
    });

    if (error) {
      throw Error('Error updating full name');
    }

    const user: SupabaseUser = {
      id: data.user?.id || '',
      email: data.user?.email,
      user_metadata: {
        fullname: data.user?.user_metadata.fullname || '',
        role: data.user?.user_metadata.role || 'user',
      },
    };

    return user;
  },
);
export const restoreSession = createAsyncThunk(
  'auth/restoreSession',
  async (): Promise<SupabaseUser | null> => {
    const { data } = await supabase.auth.getSession();
    const sessionUser = data.session?.user;

    if (sessionUser) {
      const { id, email, user_metadata } = sessionUser;
      const user: SupabaseUser = {
        id,
        email,
        user_metadata: {
          fullname: user_metadata.fullname,
          role: user_metadata.role,
        },
      };
      return user;
    }
    return null;
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
    setFetched(state, action: PayloadAction<boolean>) {
      state.isFetched = action.payload;
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
      // Update
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        editUser.fulfilled,
        (state, action: PayloadAction<SupabaseUser | undefined>) => {
          state.isLoading = false;
          state.error = null;
          state.user = action.payload ?? null; // Handle undefined case
        },
      )
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      })

      // Get Users
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<SupabaseUser[]>) => {
          state.isLoading = false;
          state.users = action.payload;
        },
      )
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'An error occurred';
      })
      // restoreSession
      .addCase(restoreSession.pending, (state) => {
        state.isLoading = true;
        state.isFetched = false;
        state.error = null;
      })
      .addCase(
        restoreSession.fulfilled,
        (state, action: PayloadAction<SupabaseUser | null>) => {
          state.isLoading = false;
          state.isFetched = true;
          state.user = action.payload;
        },
      )
      .addCase(restoreSession.rejected, (state, action) => {
        state.isLoading = false;
        state.isFetched = true;
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

export const { setUser, setLoading, setError, clearError, setFetched } =
  authSlice.actions;

export default authSlice.reducer;
