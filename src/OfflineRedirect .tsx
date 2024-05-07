import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import OfflinePage from './pages/OfflinePage';

interface OfflineContextType {
  isOnline: boolean;
}

const OfflineContext = createContext<OfflineContextType | null>(null);

export function OfflineProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <OfflineContext.Provider value={{ isOnline }}>
      {!isOnline && <OfflinePage />}
      {isOnline && children}
    </OfflineContext.Provider>
  );
}

export const useOfflineCheck = () => {
  const context = useContext(OfflineContext);
  if (!context) {
    throw Error('useOfflineCheck must be inside of OfflineProvider');
  }
  return context;
};
