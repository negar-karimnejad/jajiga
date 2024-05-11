import { useEffect, useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar, Value } from 'react-multi-date-picker';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import Button from './Button';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoTrashOutline } from 'react-icons/io5';

function CalendarFunc() {
  const [value, setValue] = useState<Value>(new Date());

  const handleChange = (dates: Value) => {
    setValue(dates);
  };

  const [numberOfMonths, setNumberOfMonths] = useState(() => {
    return window.innerWidth > 1100 ? 2 : 1; // Initial value based on window width
  });

  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth > 1100 ? 2 : 1); // Update numberOfMonths based on window width
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  // const holidays = ['2024-05-06', '2024-05-07', '2024-05-08'];

  return (
    <>
      <Calendar
        value={value}
        onChange={handleChange}
        className="custom-calendar mt-5 !w-full !border-0 dark:bg-white"
        numberOfMonths={numberOfMonths}
        locale={persian_fa}
        calendar={persian}
        shadow={false}
        zIndex={0}
        range
        plugins={[weekends()]}
        weekDays={weekDays}
        minDate={new Date()}
        maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 2)}
      />
      <div className="mb-5 mt-2 flex items-center justify-between">
        <Button
          style="bg-gray-100 font-vazirMedium rounded-md text-[12px] flex gap-2 items-center"
          type="button"
        >
          <CiCircleQuestion size={20} />
          راهنمای تقویم
        </Button>
        <Button
          style="border-2 border-gray-300 hover:shadow-none dark:text-gray-300 dark:border-gray-400 dark:hover:border-gray-200 hover:border-gray-400 border-dashed font-vazirMedium rounded-md text-sm flex gap-2 items-center"
          type="button"
        >
          <IoTrashOutline size={20} />
          پاک کردن
        </Button>
      </div>
    </>
  );
}

export default CalendarFunc;
