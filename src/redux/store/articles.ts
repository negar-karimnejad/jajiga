import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface Article {
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

interface ArticleState {
  loading: boolean;
  error: string | null;
  articles: Article[];
  article: Article | null;
}

const initialState: ArticleState = {
  loading: true,
  error: null,
  articles: [],
  article: null,
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

export const getArticleById = createAsyncThunk(
  'articles/getArticleById',
  async (articleTitle: string) => {
    const { data: article, error } = await supabase
      .from('articles')
      .select('*')
      .eq('title', articleTitle)
      .single();
    if (error) {
      throw error;
    }

    return article;
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
    builder.addCase(getArticleById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getArticleById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.article = action.payload;
    });
    builder.addCase(getArticleById.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.article = null;
    });
  },
});

export default articleSlice.reducer;
