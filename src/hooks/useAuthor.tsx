import { useAuthors } from "./useAuthors";

const useAuthor = (id: number) => {
  const { authors } = useAuthors();
  const author = authors.find((author) => author.id === id);

  return { author };
};

export { useAuthor };
