/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';

interface CalendarContextProps {
  dates: (DateObject | null)[];
  setDates: (dates: (DateObject | null)[]) => void;
  calculateNights: () => number;
  isShowCalendar: boolean;
  openCalendarModal: () => void;
  closeCalendarModal: () => void;
  resetShowCost: () => void;
  dateError: boolean;
  numbersError: boolean;
  numbers: number;
  loading: boolean;
  showCost: boolean;
  setNumbers: React.Dispatch<React.SetStateAction<number>>;
  setDateError: React.Dispatch<React.SetStateAction<boolean>>;
  setNumbersError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarContext = createContext<CalendarContextProps | undefined>(
  undefined,
);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dates, setDates] = useState<(DateObject | null)[]>([null, null]);
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false);
  const [dateError, setDateError] = useState(false);
  const [numbersError, setNumbersError] = useState(false);
  const [numbers, setNumbers] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [showCost, setShowCost] = useState(false);

  const calculateNights = (): number => {
    if (!dates[0] || !dates[1]) return 0;

    const start = (dates[0] as DateObject).toDate();
    const end = (dates[1] as DateObject).toDate();

    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;

    return differenceInDays > 0 ? differenceInDays : 0;
  };

  const openCalendarModal = () => setIsShowCalendar(true);
  const closeCalendarModal = () => setIsShowCalendar(false);
  const resetShowCost = () => setShowCost(false);

  useEffect(() => {
    setDates([null, null]);
    setShowCost(false);
    setNumbers(-1);
  }, []);

  useEffect(() => {
    if (!dates[0] || !dates[1] || numbers === -1) {
      setShowCost(false);
    }
  }, [dates, numbers]);

  useEffect(() => {
    if (dates[0] || dates[1]) {
      setDateError(false);
    }

    if (numbers !== -1) {
      setNumbersError(false);
    }

    if (numbers !== -1 && dates[0] && dates[1]) {
      setShowCost(true);
      setLoading(true);
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [dates, numbers]);

  return (
    <CalendarContext.Provider
      value={{
        dates,
        dateError,
        numbersError,
        numbers,
        loading,
        showCost,
        isShowCalendar,
        openCalendarModal,
        closeCalendarModal,
        setDates,
        calculateNights,
        resetShowCost,
        setNumbers,
        setDateError,
        setNumbersError,
      }}
    >
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
