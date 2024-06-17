import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PolarAreaController,
  RadialLinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { FaShoppingCart } from 'react-icons/fa';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PolarAreaController,
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
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(83, 192, 75, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgb(192, 75, 75, 0.6)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(83, 192, 75, 1)',
        'rgba(75, 192, 192, 1)',
        'rgb(192, 75, 75, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
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
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(83, 192, 75, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgb(192, 75, 75, 0.6)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(83, 192, 75, 1)',
        'rgba(75, 192, 192, 1)',
        'rgb(192, 75, 75, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
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
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(83, 192, 75, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgb(192, 75, 75, 0.6)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(83, 192, 75, 1)',
        'rgba(75, 192, 192, 1)',
        'rgb(192, 75, 75, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function AdminPDashboard() {
  const [isActive, setIsActive] = useState('incomes');

  // const chartOptions = {
  //   plugins: {
  //     legend: {
  //       labels: {
  //         color: isDarkMode ? '#fff' : '#000',
  //       },
  //     },
  //   },
  //   scales: {
  //     r: {
  //       grid: {
  //         color: isDarkMode ? '#444' : '#99999947',
  //       },
  //       angleLines: {
  //         color: isDarkMode
  //           ? 'rgba(255, 255, 255, 0.2)'
  //           : 'rgba(255, 255, 255, 0.2)',
  //       },
  //       pointLabels: {
  //         color: isDarkMode ? 'white' : 'black',
  //       },
  //     },
  //   },
  // };

  return (
    <div className="bg-transparent  max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <div className="rounded-md bg-white p-2 shadow-md dark:bg-gray-50 sm:p-10">
        {isActive === 'incomes' && (
          <PolarArea data={incomesData}  />
        )}
        {isActive === 'sales' && (
          <PolarArea data={salesData}  />
        )}
        {isActive === 'costs' && (
          <PolarArea data={costsData}  />
        )}
        <div className="mx-auto mt-5 flex w-fit items-center justify-center gap-1">
          <div
            onClick={() => setIsActive('costs')}
            className={`h-4 cursor-pointer rounded-full border-2 border-gray-700 transition-all duration-500 ${
              isActive === 'costs' ? 'w-10 bg-gray-700' : 'w-4 bg-transparent'
            }`}
          ></div>
          <div
            onClick={() => setIsActive('sales')}
            className={`h-4 cursor-pointer rounded-full border-2 border-gray-700 transition-all duration-500 ${
              isActive === 'sales' ? 'w-10 bg-gray-700' : 'w-4 bg-transparent'
            }`}
          ></div>
          <div
            onClick={() => setIsActive('incomes')}
            className={`h-4 cursor-pointer rounded-full border-2 border-gray-700 transition-all duration-500 ${
              isActive === 'incomes' ? 'w-10 bg-gray-700' : 'w-4 bg-transparent'
            }`}
          ></div>
        </div>
      </div>
      <div className="my-10 grid grid-cols-12 gap-x-5 gap-y-10">
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md dark:bg-gray-950 max-sm:col-span-12">
          <div className="mt-5 flex h-16 gap-5">
            <span className="dark:text-white">$1,290</span>
            <span className="font-vazirBold text-green-500">8.5%</span>
          </div>
          <span className="text-gray-400 dark:text-white">
            {' '}
            درآمد در یک ماه گذشته{' '}
          </span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-green-400 text-white shadow-md">
            <GiReceiveMoney size={28} />
          </div>
        </div>
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md dark:bg-gray-950 max-sm:col-span-12">
          <div className="mt-5 flex h-16 gap-5">
            <span className="dark:text-white">$4,360</span>
            <span className="font-vazirBold text-blue-500">8.5%</span>
          </div>
          <span className="text-gray-400 dark:text-white">
            {' '}
            فروش در یک ماه گذشته{' '}
          </span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-blue-400 text-white shadow-md">
            <FaShoppingCart size={20} />
          </div>
        </div>
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md dark:bg-gray-950 max-sm:col-span-12">
          <div className="mt-5 flex h-16 gap-5">
            <span className="dark:text-white">$2,270</span>
            <span className="font-vazirBold text-red-500">8.5%</span>
          </div>
          <span className="text-gray-400 dark:text-white">
            {' '}
            هزینه در یک ماه گذشته{' '}
          </span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-red-400 text-white shadow-md">
            <GiPayMoney size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPDashboard;
