import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

interface Category {
  en_title: string;
  id: number;
  created_at: Date;
  title: string;
}

interface CategoryState {
  loading: boolean;
  error: null | string;
  categories: Category[];
  category: Category | null;
}

const initialState: CategoryState = {
  loading: true,
  error: null,
  categories: [],
  category: null,
};

export const getCategoriesFromServer = createAsyncThunk(
  'categories/getCategoriesFromServer',
  async () => {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('*');
    if (error) {
      throw error;
    }
    return categories;
  },
);
export const getCategoryById = createAsyncThunk(
  'categories/getCategoryById',
  async (id: number) => {
    const { data: category, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      throw error;
    }
    return category;
  },
);

const categorySlice = createSlice({
  name: 'athors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoriesFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.categories = action.payload;
    });
    builder.addCase(getCategoriesFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.categories = [];
    });
    builder.addCase(getCategoryById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.category = action.payload;
    });
    builder.addCase(getCategoryById.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.category = null;
    });
  },
});

export default categorySlice.reducer;
