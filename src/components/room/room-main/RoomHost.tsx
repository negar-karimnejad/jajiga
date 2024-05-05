import { Link } from 'react-router-dom'

function RoomHost() {
  return (
    <div>
            <h4 className="mb-5 font-vazirBold text-lg">میزبان</h4>
            <div className="mr-2">
              <div className="flex justify-between">
                <div>
                  <h4 className="mb-1 font-vazirBold">محسن</h4>
                  <p className="text-sm text-gray-500">
                    عضو جاجیگا از 18 اسفند 1401
                  </p>
                </div>
                <img
                  alt=""
                  src="https://storage.jajiga.com/public/avatar/large/2303111552071681448.jpg"
                  className="h-16 w-16 rounded-full"
                />
              </div>
              <p className="mb-2 font-persianNums text-sm text-gray-600 dark:text-gray-400">
                <strong className="text-gray-800 dark:text-gray-100">
                  سرعت پاسخ‌گویی:{' '}
                </strong>
                کمتر از 1 دقیقه
              </p>
              <p className="mb-2 font-persianNums text-sm text-gray-600 dark:text-gray-400">
                <strong className="text-gray-800 dark:text-gray-100">
                  میزان تأیید رزرو:{' '}
                </strong>
                95 درصد
              </p>
            </div>
            <div className="mt-3 w-full rounded-full bg-gray-100 py-3 text-center text-sm text-gray-600 transition-all hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">
              <Link to="" className="font-vazirBold">
                مشاهده حساب کاربری میزبان »
              </Link>
            </div>
          </div>
  )
}

export default RoomHost