import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { OfflineProvider } from './OfflineRedirect .tsx';
import './index.css';
import { WishesProvider } from './context/WishesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <OfflineProvider>
    <WishesProvider>
      <App />
    </WishesProvider>
  </OfflineProvider>,
  //  </React.StrictMode>,
);
