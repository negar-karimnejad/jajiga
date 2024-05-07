import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { OfflineProvider } from './OfflineRedirect .tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <OfflineProvider>
    <App />
  </OfflineProvider>,
  //  </React.StrictMode>,
);
