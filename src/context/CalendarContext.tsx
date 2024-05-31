import { createContext, useContext, useState } from 'react';
import { Value } from 'react-multi-date-picker';

interface CalendarContextProps {
  dates: Value;
  setDates: (dates: Value) => void;
  calculateNights: () => number;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(
  undefined,
);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dates, setDates] = useState<Value>([]);

  const calculateNights = (): number => {
    if (dates.length < 2) return 0;

    const start = new Date(dates[0]);
    const end = new Date(dates[1]);

    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;

    return differenceInDays > 0 ? differenceInDays : 0;
  };

  return (
    <CalendarContext.Provider value={{ dates, setDates, calculateNights }}>
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
