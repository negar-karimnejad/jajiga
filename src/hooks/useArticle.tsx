import { useArticles } from './useArticles';

const useArticle = (title: string) => {
  const { articles } = useArticles();
  const article = articles.find((article) => article.title === title);

  return { article };
};

export { useArticle };
