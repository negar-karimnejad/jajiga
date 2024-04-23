import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  const handleToggle = () => {
    setTheme(colorTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [colorTheme, theme]);

  return { theme, handleToggle };
}

export default useDarkMode;
