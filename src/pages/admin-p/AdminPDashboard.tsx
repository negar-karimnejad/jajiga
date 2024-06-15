import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FaShoppingCart } from 'react-icons/fa';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { useAuth } from '../../hooks/useAuth';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const incomesData = {
  labels: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ],
  datasets: [
    {
      label: 'درآمد',
      data: [65, 59, 30, 75, 50, 40, 30, 80, 60, 70, 73, 40],
      fill: false,
      backgroundColor: 'rgba(83, 192, 75, 0.6)',
      borderColor: 'rgba(83, 192, 75, 0.6)',
      tension: 0.1,
    },
  ],
};
const salesData = {
  labels: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ],
  datasets: [
    {
      label: 'فروش',
      data: [15, 20, 30, 50, 40, 32, 55, 80, 28, 60, 80, 40],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 0.6)',
      tension: 0.1,
    },
  ],
};
const costsData = {
  labels: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ],
  datasets: [
    {
      label: 'هزینه',
      data: [55, 40, 10, 50, 80, 70, 82, 50, 65, 30, 20, 40],
      fill: false,
      backgroundColor: 'rgb(192, 75, 75)',
      borderColor: 'rgb(192, 75, 75)',
      tension: 0.1,
    },
  ],
};

function AdminPDashboard() {
  const [isActive, setIsActive] = useState('incomes');
  const { user } = useAuth();

  return (
    <div className="bg-stone-100 px-10 max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <h2 className="my-10 text-xl">
        <span className="font-vazirBold text-xl text-pink-500">
          {user?.user_metadata.fullname}
        </span>{' '}
        عزیز, خوش آمدید
      </h2>
      <div className="grid grid-cols-12 gap-x-5 gap-y-10">
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md max-sm:col-span-12">
          <div className="mt-5 flex h-16 gap-5">
            <span>$1,290</span>
            <span className="font-vazirBold text-green-500">8.5%</span>
          </div>
          <span className="text-stone-400">درآمد در یک ماه گذشته</span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-green-400 text-white shadow-md">
            <GiReceiveMoney size={28} />
          </div>
        </div>
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md max-sm:col-span-12">
          <div className="mt-5 flex h-16 gap-5">
            <span>$4,360</span>
            <span className="font-vazirBold text-blue-500">8.5%</span>
          </div>
          <span className="text-stone-400">فروش در یک ماه گذشته</span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-blue-400 text-white shadow-md">
            <FaShoppingCart size={20} />
          </div>
        </div>
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md max-sm:col-span-12">
          <div className="mt-5 flex h-16 gap-5">
            <span>$2,270</span>
            <span className="font-vazirBold text-red-500">8.5%</span>
          </div>
          <span className="text-stone-400">هزینه در یک ماه گذشته</span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-red-400 text-white shadow-md">
            <GiPayMoney size={28} />
          </div>
        </div>
      </div>
      <div className="my-5 rounded-md bg-white p-2 shadow-md sm:p-10">
        {isActive === 'incomes' && <Bar data={incomesData} />}
        {isActive === 'sales' && <Bar data={salesData} />}
        {isActive === 'costs' && <Bar data={costsData} />}
        <div className="mx-auto mt-5 flex w-fit items-center justify-center gap-1">
          <div
            onClick={() => setIsActive('costs')}
            className={`h-4 cursor-pointer rounded-full border-2 border-stone-700 transition-all duration-500 ${isActive === 'costs' ? 'w-10 bg-stone-700' : 'w-4 bg-transparent'}`}
          ></div>
          <div
            onClick={() => setIsActive('sales')}
            className={`h-4 cursor-pointer rounded-full border-2 border-stone-700 transition-all duration-500 ${isActive === 'sales' ? 'w-10 bg-stone-700' : 'w-4 bg-transparent'}`}
          ></div>
          <div
            onClick={() => setIsActive('incomes')}
            className={`h-4 cursor-pointer rounded-full border-2 border-stone-700 transition-all duration-500 ${isActive === 'incomes' ? 'w-10 bg-stone-700' : 'w-4 bg-transparent'}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AdminPDashboard;
