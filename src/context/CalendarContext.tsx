/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';

interface CalendarContextProps {
  dates: (DateObject | null)[];
  setDates: (dates: (DateObject | null)[]) => void;
  calculateNights: () => number;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(
  undefined,
);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dates, setDates] = useState<(DateObject | null)[]>([null, null]);

  const calculateNights = (): number => {
    if (!dates[0] || !dates[1]) return 0;

    const start = (dates[0] as DateObject).toDate();
    const end = (dates[1] as DateObject).toDate();

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
