import { useAthors } from './useAuthors';

const useAuthor = (id: number) => {
  const { authors } = useAthors();
  const author = authors.find((author) => author.id === id);

  return { author };
};

export { useAuthor };
