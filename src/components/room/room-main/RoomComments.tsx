import { BsStar, BsStarFill } from 'react-icons/bs';

function RoomComments() {
  return (
    <div className="mt-5">
      <h4 className="mb-3 font-vazirBold text-lg">
        <span className="font-vazirBold text-lg">
          نظر مهمانان{' '}
          <small className="font-persianNums text-sm">(8 نظر)</small>
        </span>
      </h4>
      <div className="my-5" id="hostRef">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <img
              alt=""
              src="https://storage.jajiga.com/public/avatar/small/2204092311001456388.jpg"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <div className="font-vazirBold text-base">حمید</div>
              <span className="font-persianNums text-[12px] text-gray-400">
                27 فروردین 1403
              </span>
            </div>
          </div>
          <div className="flex gap-0.5">
            <BsStar className="text-yellow-400" size={12} />
            <BsStarFill className="text-yellow-400" size={12} />
            <BsStarFill className="text-yellow-400" size={12} />
            <BsStarFill className="text-yellow-400" size={12} />
            <BsStarFill className="text-yellow-400" size={12} />
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-gray-700 dark:text-gray-400">
          بهترین ویلا و زیباترین شهر که خستگی راه رو ازتون میگیره حتما پیشنهاد
          میکنم تو مسیرتون از شهر زیبای بسطام.و شاهرود دیدن فرمائید و این ویلا
          رو رزرو کنید
        </p>
        <div className="mr-5 mt-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                alt=""
                src="https://storage.jajiga.com/public/avatar/small/2204092311001456388.jpg"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-vazirMedium">پاسخ میزبان</div>
                <span className="font-persianNums text-[12px] text-gray-400">
                  27 فروردین 1403
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-200">
            پیشنهاد میکنم تو مسیرتون از شهر زیبای بسطام.و شاهرود دیدن فرمائید و
            این ویلا رو رزرو کنید
          </p>
        </div>
        <div className="my-5 h-[1px] w-full bg-gray-100"></div>
      </div>
    </div>
  );
}

export default RoomComments;
