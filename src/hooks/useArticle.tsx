import supabase from '../services/supabase';
import { useArticles } from './useArticles';

const useArticle = (title: string) => {
  const { articles } = useArticles();
  const article = articles.find((article) => article.title === title);

  const addComment = async (comment: {
    email: string;
    content: string;
    fullname: string;
  }) => {
    try {
      if (article) {
        const { data: currentData, error: currentError } = await supabase
          .from('articles')
          .select('comments')
          .eq('id', article.id)
          .single();

        if (currentError) {
          console.error(currentError);
          return;
        }

        const newComment = {
          id: Math.floor(Math.random() * 100),
          email: comment.email,
          content: comment.content,
          createdAt: new Date().toISOString(),
          fullname: comment.fullname,
        };

        const updatedComments = currentData.comments
          ? [...currentData.comments, newComment]
          : [newComment];

        const { data, error } = await supabase
          .from('articles')
          .update({ comments: updatedComments })
          .eq('id', article.id);

        if (error) {
          console.error(error);
        }
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { article, addComment };
};

export { useArticle };
