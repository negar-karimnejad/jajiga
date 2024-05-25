import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../redux/store/articles';
import { useArticles } from './useArticles';

function useArticlesSearch() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<Article[]>([]);

  const { articles } = useArticles();
  const navigate = useNavigate();

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let results: Article[] = [];
    if (search) {
      results = articles.filter((article) => article.title.includes(search));
    }
    setSearchResult(results);
    navigate(`/mag/?s=${search}`, { state: { results } });
  };

  return { search, setSearch, searchResult, submitSearch };
}

export default useArticlesSearch;
