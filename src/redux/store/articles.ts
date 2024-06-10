import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface Article {
  id: number;
  created_at: Date;
  title: string;
  description: string;
  cover: string | File;
  author_id: number | null;
  comments?: {
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

export const addArticleToServer = createAsyncThunk(
  'rooms/addArticleToServer',
  async (article: Article) => {
    if (typeof article.cover !== 'string') {
      const imageName = `${Math.random()}-${article.cover.name}`.replaceAll(
        '/',
        '',
      );

      const imagePath = `https://yazyhwunsvceubbnfjjo.supabase.co/storage/v1/object/public/articles/${imageName}`;

      const { data, error } = await supabase
        .from('articles')
        .insert([{ ...article, cover: imagePath }]);

      if (error) {
        console.error(error);
        throw new Error('Article could not be created');
      }

      // Upload Image
      const { error: storageError } = await supabase.storage
        .from('articles')
        .upload(imageName, article.cover);

      if (storageError) {
        console.error(storageError);
        throw new Error(
          'Article image could not be uploaded and the article was not created',
        );
      }
      return data;
    } else {
      throw new Error('Cover image must be a file');
    }
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
    // Add Article
    builder.addCase(addArticleToServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addArticleToServer.fulfilled.type,
      (state, action: PayloadAction<Article>) => {
        state.loading = false;
        state.error = null;
        state.articles.push(action.payload);
      },
    );
    builder.addCase(addArticleToServer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.articles = [];
    });
  },
});

export default articleSlice.reducer;
