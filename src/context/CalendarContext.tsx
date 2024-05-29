import { createContext, useContext, useState } from 'react';
import { Value } from 'react-multi-date-picker';

interface CalendarContextProps {
  dates: Value;
  setDates: (dates: Value) => void;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(
  undefined,
);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dates, setDates] = useState<Value>([]);
  return (
    <CalendarContext.Provider value={{ dates, setDates }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      'useCalendarContext must be used within a CalendarProvider',
    );
  }
  return context;
};
