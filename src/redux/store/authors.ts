import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface Author {
  id: number;
  created_at: Date;
  fullname: string;
  profile: string;
}

interface AuthorState {
  loading: boolean;
  error: null | string;
  authors: Author[];
}

const initialState: AuthorState = {
  loading: true,
  error: null,
  authors: [],
};

export const getAuthorsFromServer = createAsyncThunk(
  'authors/getAuthorsFromServer',
  async () => {
    const { data: authors, error } = await supabase.from('authors').select('*');
    if (error) {
      throw error;
    }
    return authors;
  },
);

const authorSlice = createSlice({
  name: 'athors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuthorsFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAuthorsFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.authors = action.payload;
    });
    builder.addCase(getAuthorsFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.authors = [];
    });
  },
});

export default authorSlice.reducer;
