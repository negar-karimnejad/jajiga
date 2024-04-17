function Application() {
  return (
    <div className="">
      <div className=" -top-5 right-0  w-full rounded-t-2xl bg-blue-950 bg-[url('/images/patterns/pattern.svg')]">
        <div className="container flex h-14 justify-between pt-3 text-[12px] text-white">
          <p>نصب اپلیکیشن جاجیگا</p>
          <button className="flex h-6 cursor-pointer items-center gap-1 rounded-full bg-gray-50 px-4 text-gray-800 transition-all hover:bg-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-3 w-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            مشاهده
          </button>
        </div>
      </div>
    </div>
  );
}

export default Application;
