import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { OfflineProvider } from './OfflineRedirect .tsx';
import './index.css';
import { WishesProvider } from './context/WishesContext.tsx';
import { CalendarProvider } from './context/CalendarContext.tsx';
import { ReservationProvider } from './context/ReservationContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <OfflineProvider>
    <WishesProvider>
      <ReservationProvider>
        <CalendarProvider>
          <App />
        </CalendarProvider>
      </ReservationProvider>
    </WishesProvider>
  </OfflineProvider>,
  //  </React.StrictMode>,
);
