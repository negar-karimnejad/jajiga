import { createContext, useContext, useEffect, useState } from 'react';
interface WishesContextProps {
  wishes: number[];
  toggleWish: (id: number) => void;
}

const WishesContext = createContext<WishesContextProps | undefined>(undefined);

const WishesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishes, setWishes] = useState<number[]>(() => {
    const storedValue = localStorage.getItem('wishes');
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  const toggleWish = (id: number) => {
    setWishes((prevWishes) =>
      prevWishes.includes(id)
        ? prevWishes.filter((item) => item !== id)
        : [...prevWishes, id],
    );
  };

  return (
    <WishesContext.Provider value={{ wishes, toggleWish }}>
      {children}
    </WishesContext.Provider>
  );
};

const useWishes = () => {
  const context = useContext(WishesContext);
  if (!context) {
    throw new Error('useWishes must be used within a WishesProvider');
  }
  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export { WishesProvider, useWishes };
