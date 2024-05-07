import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { NetworkProvider } from './OfflineRedirect .tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <NetworkProvider>
    <App />
  </NetworkProvider>,
  //  </React.StrictMode>,
);
