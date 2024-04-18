function NavSearch() {
  return (
    <form className="w-full flex flex-col items-center justify-center gap-4">
      <div className="input input-bordered flex w-2/3 items-center gap-2 rounded-full pl-1">
        <input type="text" className="grow" placeholder="میخوای کجا بری؟" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-8 w-8 rounded-full p-1 text-gray-800"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </form>
  );
}

export default NavSearch;
