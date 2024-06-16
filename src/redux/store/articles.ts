import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase, { supabaseUrl } from '../../services/supabase';

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
  readingMinutes: number | null;
  keyword: string;
}

interface ArticleState {
  loading: boolean;
  error: string | null;
  articles: Article[];
}

// export interface EditedArticleProps {
//   id: number;
//   title: string;
//   description: string;
//   cover: string | File;
//   author_id: number;
//   readingMinutes: number;
//   keyword: string;
// }

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

      const imagePath = `${supabaseUrl}/storage/v1/object/public/articles/${imageName}`;

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

export const editArticlesFromServer = createAsyncThunk(
  'articles/editArticlesFromServer',
  async (article: Article) => {
    if (typeof article.cover !== 'string') {
      const imageName = `${Math.random()}-${article.cover.name}`.replaceAll(
        '/',
        '',
      );

      const imagePath = `https://yazyhwunsvceubbnfjjo.supabase.co/storage/v1/object/public/articles/${imageName}`;

      const { error } = await supabase
        .from('articles')
        .update({ ...article, cover: imagePath })
        .eq('id', article.id);

      if (error) {
        console.error(error);
        throw new Error('Article could not be updated');
      }

      // Upload Image
      const { error: storageError } = await supabase.storage
        .from('articles')
        .upload(imageName, article.cover, { upsert: true });

      if (storageError) {
        console.error(storageError);
        throw new Error('Article image could not be uploaded');
      }

      return { ...article, cover: imagePath };
    } else {
      const { error } = await supabase
        .from('articles')
        .update({
          author_id: article.author_id,
          cover: article.cover,
          description: article.description,
          keyword: article.keyword,
          readingMinutes: article.readingMinutes,
          title: article.title,
        })
        .eq('id', article.id);

      if (error) {
        console.error(error);
        throw new Error('Article could not be updated');
      }

      return article;
    }
  },
);

export const removeArticlesFromServer = createAsyncThunk(
  'articles/removeArticlesFromServer',
  async (articleId: number) => {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', articleId);
    if (error) {
      throw new Error('Article could not be deleted');
    }

    return articleId;
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
    // Edit Article
    builder.addCase(editArticlesFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editArticlesFromServer.fulfilled.type,
      (state, action: PayloadAction<Article>) => {
        state.loading = false;
        state.error = null;

        const index = state.articles.findIndex(
          (article) => article.id === action.payload.id,
        );
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      },
    );
    builder.addCase(editArticlesFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.articles = [];
    });
    // Remove Article
    builder.addCase(removeArticlesFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      removeArticlesFromServer.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.error = null;
        state.articles = state.articles.filter(
          (article) => article.id !== action.payload,
        );
      },
    );
    builder.addCase(removeArticlesFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
      state.articles = [];
    });
  },
});

export default articleSlice.reducer;
