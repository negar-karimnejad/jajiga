import { useCategories } from './useCategories';

const useCategory = (id: number) => {
  const { categories } = useCategories();
  const category = categories.find((category) => category.id === id);

  return { category };
};

export { useCategory };

