import { HiOutlineChatAlt2 } from 'react-icons/hi';

function AdminHeader({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <div className="navbar sticky top-5 h-20 z-20 rounded-md bg-white shadow dark:border-b-2 dark:border-b-gray-600 dark:bg-gray-800">
      <div className="navbar-start">
        <div className="">
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
        <label className="input flex items-center gap-2 bg-gray-100 dark:bg-gray-700">
          <input
            type="text"
            className="dark:text-gray-100 grow"
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
        </label>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
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
            className="menu dropdown-content z-[1] w-52 rounded-box bg-white p-2 shadow dark:bg-gray-700 dark:text-white"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ml-3">
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow dark:bg-gray-700 dark:text-white"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow dark:bg-gray-700 dark:text-white"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
