import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoIosReturnLeft } from 'react-icons/io';
import { IoReturnDownForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function AdminHeader({ toggleMenu }: { toggleMenu: () => void }) {
  const { user, signoutFunc } = useAuth();
  return (
    <div className="navbar sticky top-5 z-20 h-20 rounded-md bg-white shadow dark:border-b-2 dark:border-b-gray-950 dark:bg-gray-800">
      <div className="navbar-start">
        <div>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleMenu}
            className="btn btn-square btn-ghost ml-3 dark:text-white dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </div>
        {/* <label className="input flex items-center gap-2 bg-gray-100 dark:bg-gray-700">
          <input
            type="text"
            className="dark:text-gray-100 max-sm:w-32"
            placeholder="جستجو..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70 dark:text-white"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label> */}
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost dark:hover:bg-gray-700"
          >
            <HiOutlineChatAlt2
              size={22}
              className="text-gray-700 dark:text-white"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu-sm z-[1] mt-3 sm:w-72 w-56 divide-y rounded-box border bg-white p-2 shadow shadow-gray-300 dark:bg-gray-900 dark:text-white"
          >
            <li className="py-4">گفتگوهای اخیر</li>
            <div className="h-64 overflow-y-auto">
              <li className="flex flex-row items-center py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-orange-100 text-orange-500">
                  م م
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>مهرداد موسوی</span>
                    <span className="text-[12px] text-gray-400">الان</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    لطفا اگه آخرین پیام های من رو دریافت کردید، تایید کنید
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-green-100 text-green-500">
                  ف ت
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>فرشید ترنیان</span>
                    <span className="text-[12px] text-gray-400">2خرداد</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    سلام من ترنیان هستم. دنبال رزرو یکی از اقامتگاه های شمام
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="text-violet-500 bg-violet-100 flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full">
                  م ن
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>محمدرضا نیازی</span>
                    <span className="text-[12px] text-gray-400">7 فروردین</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    من به تازگی یک کامپیوتر جدید خریدم اما مشکلی دارم
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-blue-100 text-blue-500">
                  ک گ
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>کامران گودرزی</span>
                    <span className="text-[12px] text-gray-400">2 اسفند</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    Hi Frank,How you doing?
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-orange-100 text-orange-500">
                  م م
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>مهرداد موسوی</span>
                    <span className="text-[12px] text-gray-400">الان</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    لطفا اگه آخرین پیام های من رو دریافت کردید، تایید کنید
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-green-100 text-green-500">
                  ف ت
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>فرشید ترنیان</span>
                    <span className="text-[12px] text-gray-400">2خرداد</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    سلام من ترنیان هستم. دنبال رزرو یکی از اقامتگاه های شمام
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="text-violet-500 bg-violet-100 flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-violet-100">
                  م ن
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>محمدرضا نیازی</span>
                    <span className="text-[12px] text-gray-400">7 فروردین</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    من به تازگی یک کامپیوتر جدید خریدم اما مشکلی دارم
                  </span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-blue-100 text-blue-500">
                  ک گ
                </div>
                <div className="flex w-10/12 shrink-0 flex-col items-start gap-2">
                  <div className="flex w-full justify-between">
                    <span>کامران گودرزی</span>
                    <span className="text-[12px] text-gray-400">2 اسفند</span>
                  </div>
                  <span className="text-[12px] text-gray-400">
                    Hi Frank,How you doing?
                  </span>
                </div>
              </li>
            </div>
            <li className="cursor-pointer py-4 text-center text-gray-400">
              <a>مشاهده همه</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ml-1">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <button className="btn btn-circle btn-ghost dark:text-white dark:hover:bg-gray-700">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge indicator-item badge-error badge-xs"></span>
              </div>
            </button>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu-sm z-[1] mt-3 sm:w-72 w-64 divide-y rounded-box border bg-white p-2 shadow shadow-gray-300 dark:bg-gray-900 dark:text-white"
          >
            <li className="py-4">اطلاع رسانی ها</li>
            <div className="h-64 overflow-y-auto">
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoReturnDownForward
                    size={35}
                    className="rounded-full bg-green-100 p-1 text-green-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>درخواست رزرو کردید</span>
                  <span className="text-[12px] text-gray-400">2 ساعت پیش</span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoIosReturnLeft
                    size={35}
                    className="rounded-full bg-orange-100 p-1 text-orange-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>رزرو شما ثبت شد</span>
                  <span className="text-[12px] text-gray-400">3 ساعت پیش</span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoReturnDownForward
                    size={35}
                    className="rounded-full bg-green-100 p-1 text-green-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>رزرو شما لغو شد</span>
                  <span className="text-[12px] text-gray-400">4 ساعت پیش</span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoIosReturnLeft
                    size={35}
                    className="rounded-full bg-orange-100 p-1 text-orange-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>دیدگاه شما ثبت شد</span>
                  <span className="text-[12px] text-gray-400">3 ساعت پیش</span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoReturnDownForward
                    size={35}
                    className="rounded-full bg-green-100 p-1 text-green-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>درخواست رزرو کردید</span>
                  <span className="text-[12px] text-gray-400">2 ساعت پیش</span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoIosReturnLeft
                    size={35}
                    className="rounded-full bg-orange-100 p-1 text-orange-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>رزرو شما ثبت شد</span>
                  <span className="text-[12px] text-gray-400">3 ساعت پیش</span>
                </div>
              </li>
              <li className="flex flex-row items-center py-4">
                <span>
                  <IoReturnDownForward
                    size={35}
                    className="rounded-full bg-green-100 p-1 text-green-500"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span>رزرو شما لغو شد</span>
                  <span className="text-[12px] text-gray-400">4 ساعت پیش</span>
                </div>
              </li>
            </div>
            <li className="cursor-pointer py-4 text-center text-gray-400">
              <a>مشاهده همه</a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className=""
          >
            <div className="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ccc"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content relative z-[1] mt-3 w-72 overflow-hidden rounded-xl border bg-white shadow dark:bg-gray-900 dark:text-white"
          >
            <li>
              <div className="mb-2 border-b bg-gray-100 dark:bg-gray-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ccc"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></path>
                </svg>
                <div>
                  <div>{user?.user_metadata.fullname}</div>
                  <div className="mt-2 text-sm text-gray-400">
                    {user?.email}
                  </div>
                </div>
              </div>
            </li>
            <li className="px-4 py-1 dark:hover:bg-gray-800">
              <Link to="/profile" className="justify-between">
                مشاهده پروفایل
              </Link>
            </li>
            <li className="px-4 py-1 dark:hover:bg-gray-800">
              <Link to="/finance">کیف پول</Link>
            </li>

            <li
              onClick={() => signoutFunc()}
              className="mt-2 border-t px-4 py-1 dark:hover:bg-gray-800"
            >
              <a>خروج</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
