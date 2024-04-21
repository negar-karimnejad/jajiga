import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

interface Article {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  cover: string;
  author_id: number;
  category_id: number;
  published_at: Date;
  readingMinutes: string;
  keyword: string;
}

export const getArticlesFromServer = createAsyncThunk<Article[], void>(
  'articles/getArticlesFromServer',
  async () => {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*');
    if (error) {
      throw error;
    }

    return articles || [];
  },
);

const slice = createSlice({
  name: 'articles',
  initialState: [] as Article[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromServer.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});
export default slice.reducer;
