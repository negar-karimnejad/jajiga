import { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="absolute right-20 top-5 z-50">
      <div
        onClick={() => setDarkMode((prev) => !prev)}
        className={`relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-tr ${darkMode ? 'from-sky-900 to-sky-100' : 'from-pink-600 to-orange-500'}`}
      >
        <div
          className="absolute h-full w-full bg-white"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        ></div>
        <div
          className="absolute h-full w-full bg-transparent"
          style={{ clipPath: 'polygon(0% 0%, 100% 100%, 50% 0%)' }}
        ></div>
      </div>
    </div>
  );
}

export default DarkMode;
