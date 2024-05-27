import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface Article {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  cover: string;
  author_id: number;
  comments: {
    id: number | null | undefined;
    email: string;
    content: string;
    createdAt: Date;
    fullname: string;
  }[];
  category: {
    id: number;
    color: string;
    title: string;
    en_title: string;
  };

  published_at: Date;
  readingMinutes: string;
  keyword: string;
}

interface ArticleState {
  loading: boolean;
  error: string | null;
  articles: Article[];
}

const initialState: ArticleState = {
  loading: true,
  error: null,
  articles: [],
};

export const getArticlesFromServer = createAsyncThunk(
  'articles/getArticlesFromServer',
  async () => {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*');
    if (error) {
      throw error;
    }

    return articles;
  },
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.articles = action.payload;
    });
    builder.addCase(getArticlesFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.articles = [];
    });
  },
});

export default articleSlice.reducer;
