import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthModal } from '../../hooks/useAuthModal';
import useRefHook from '../../hooks/useRefHook';
import Button from '../ui/Button';

function NavLinks({ whiteBg }: { whiteBg?: boolean }) {
  const [showArchive, setShowArchive] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const { openModalHandler } = useAuthModal();
  const { user } = useAuth();
  const { ref, showModal, isShowNotification } = useRefHook();

  useEffect(() => {
    if (!isShowNotification) {
      setShowArchive(false);
    }
  }, [isShowNotification]);

  return (
    <>
      {user ? (
        <Button
          style={`relative font-vazirBold pl-0 py-0 hover:shadow-none text-base ${whiteBg ? 'text-neutral-500 dark:text-white' : 'text-white'}`}
          onClick={showModal}
        >
          اعلانات
          <div
            ref={ref}
            className={`absolute right-0 top-full z-20 w-96 rounded-lg border bg-white p-4 shadow-lg transition-all dark:border-none dark:bg-gray-800 duration-500${isShowNotification ? 'visible opacity-100' : 'invisible opacity-0 hidden'}`}
          >
            <div className="mb-2 flex items-center justify-between border-b pb-3 dark:border-b-gray-600">
              <h4 className="text-gray-900 dark:text-white">اعلانات</h4>
              <div className="form-control w-44">
                <label className="label cursor-pointer">
                  <span className="label-text text-[12px] dark:text-gray-100">
                    نمایش بایگانی شده ها
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-warning"
                    checked={showArchive}
                    onChange={() => {
                      setShowArchive((prev) => !prev);
                      if (!showArchive) {
                        setIsFetching(true);
                        setInterval(() => {
                          setIsFetching(false);
                        }, 5000);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-4">
              {isFetching ? (
                <>
                  <div className="flex w-full flex-col gap-2 rounded-lg border p-2">
                    <div className="skeleton h-4 w-28 dark:bg-gray-600"></div>
                    <div className="skeleton h-4 w-full dark:bg-gray-600"></div>
                  </div>
                  <div className="flex w-full flex-col gap-2 rounded-lg border p-2">
                    <div className="skeleton h-4 w-28 dark:bg-gray-600"></div>
                    <div className="skeleton h-4 w-full dark:bg-gray-600"></div>
                  </div>
                  <div className="flex w-full flex-col gap-2 rounded-lg border p-2">
                    <div className="skeleton h-4 w-28 dark:bg-gray-600"></div>
                    <div className="skeleton h-4 w-full dark:bg-gray-600"></div>
                  </div>
                </>
              ) : (
                <>
                  <svg
                    className="w-24 opacity-60 dark:opacity-20"
                    fill="none"
                    viewBox="0 0 120 131"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M60.475 130.458C57.5914 130.458 54.7754 129.585 52.3974 127.954C50.0194 126.323 48.1907 124.01 47.152 121.32H9.19999C7.99263 121.328 6.79627 121.09 5.684 120.621C4.57174 120.151 3.56693 119.459 2.73099 118.588C1.85959 117.752 1.16794 116.747 0.698359 115.634C0.22878 114.521 -0.00885451 113.325 -5.80614e-06 112.117C2.3293 110.167 4.51558 108.051 6.54199 105.788C8.83867 103.118 10.8843 100.242 12.653 97.197C14.804 93.5798 16.5978 89.7618 18.009 85.797C19.6541 80.9793 20.859 76.0223 21.609 70.987C22.5702 64.8029 23.0384 58.5523 23.009 52.294C23.0066 48.6759 23.7203 45.093 25.109 41.752C26.6459 38.1646 28.779 34.8633 31.418 31.988C34.1727 28.9031 37.4682 26.3477 41.142 24.448C45.0175 22.4911 49.1903 21.1892 53.491 20.595C53.1135 19.7097 52.9179 18.7575 52.916 17.795C52.9011 16.8861 53.0719 15.9837 53.4178 15.143C53.7638 14.3024 54.2777 13.5412 54.928 12.906C56.2282 11.6162 57.9855 10.8924 59.817 10.8924C61.6485 10.8924 63.4058 11.6162 64.706 12.906C65.3555 13.5404 65.8689 14.3005 66.215 15.1398C66.5611 15.9792 66.7326 16.8802 66.719 17.788C66.7167 18.7504 66.5211 19.7026 66.144 20.588C70.4445 21.1831 74.6168 22.4856 78.492 24.443C82.1658 26.3427 85.4613 28.898 88.216 31.983C90.8555 34.8598 92.9886 38.1628 94.525 41.752C95.9137 45.093 96.6274 48.6759 96.625 52.294C96.5956 58.5523 97.0638 64.8029 98.025 70.987C98.7729 76.0222 99.9762 80.9792 101.62 85.797C103.031 89.7621 104.825 93.5802 106.977 97.197C108.744 100.243 110.79 103.119 113.087 105.788C115.113 108.051 117.3 110.166 119.63 112.115C119.596 114.544 118.616 116.865 116.898 118.583C115.18 120.301 112.859 121.281 110.43 121.315H73.8C72.7613 124.005 70.9326 126.318 68.5546 127.949C66.1766 129.58 63.3606 130.453 60.477 130.453L60.475 130.458ZM59.818 29.294C55.6466 29.2434 51.5059 30.0127 47.631 31.558C44.3332 32.8271 41.3531 34.8027 38.9 37.346C36.8561 39.5293 35.1805 42.0302 33.939 44.751C32.8412 47.1186 32.2535 49.6906 32.214 52.3C32.2324 58.3478 31.8314 64.3896 31.014 70.382C30.2726 75.807 29.073 81.1595 27.428 86.382C25.9009 91.2036 23.8991 95.8617 21.452 100.288C19.0985 104.521 16.2932 108.487 13.085 112.115H106.549C103.341 108.487 100.535 104.521 98.182 100.288C95.7345 95.8599 93.7327 91.1997 92.206 86.376C90.561 81.1535 89.3614 75.801 88.62 70.376C87.8026 64.3836 87.4016 58.3418 87.42 52.294C87.3812 49.687 86.7953 47.1171 85.7 44.751C84.4585 42.0299 82.7826 39.5289 80.738 37.346C78.2831 34.8015 75.3005 32.8259 72 31.558C68.1267 30.0133 63.9877 29.244 59.818 29.294Z"
                      fill="#E1E0E1"
                    ></path>
                    <path
                      d="M80.066 65.195L79.268 64.727L78.905 65.578L78.613 66.263C78.1602 67.5129 77.3462 68.6 76.2744 69.3862C75.2025 70.1725 73.9211 70.6225 72.593 70.679C71.2648 70.6226 69.9834 70.1727 68.9115 69.3864C67.8396 68.6001 67.0256 67.5129 66.573 66.263L66.282 65.578L65.92 64.727L65.12 65.195L62.649 66.647L62.032 67.009L62.312 67.667L62.604 68.352C64.495 72.793 68.323 75.552 72.594 75.552C76.865 75.552 80.694 72.793 82.584 68.352L82.876 67.668L83.157 67.009L82.54 66.647L80.066 65.195Z"
                      fill="#9B9B9B"
                    ></path>
                    <path
                      d="M57.823 67.668L58.104 67.009L57.487 66.647L55.013 65.195L54.215 64.727L53.852 65.577L53.56 66.262C53.1073 67.5119 52.2933 68.599 51.2214 69.3852C50.1495 70.1715 48.8681 70.6215 47.54 70.678C46.2119 70.6215 44.9305 70.1715 43.8586 69.3852C42.7868 68.599 41.9728 67.5119 41.52 66.262L41.229 65.578L40.867 64.727L40.067 65.195L37.596 66.647L36.979 67.009L37.259 67.668L37.551 68.353C39.441 72.794 43.27 75.553 47.541 75.553C51.812 75.553 55.641 72.794 57.531 68.353L57.823 67.668Z"
                      fill="#9B9B9B"
                    ></path>
                    <path
                      d="M60.474 89.71C59.708 89.71 58.9592 89.9371 58.3223 90.3627C57.6853 90.7883 57.1889 91.3932 56.8958 92.1009C56.6027 92.8086 56.526 93.5873 56.6754 94.3386C56.8248 95.0899 57.1937 95.78 57.7354 96.3216C58.277 96.8633 58.9671 97.2321 59.7184 97.3816C60.4697 97.531 61.2484 97.4543 61.9561 97.1612C62.6638 96.868 63.2687 96.3716 63.6943 95.7347C64.1198 95.0978 64.347 94.349 64.347 93.583C64.3467 92.5559 63.9386 91.5709 63.2123 90.8447C62.486 90.1184 61.5011 89.7103 60.474 89.71"
                      fill="#9B9B9B"
                    ></path>
                    <path
                      d="M114.652 31.055H104.067V33.792H110.158L103.908 41.183V43.327H114.856V40.59H108.402L114.652 33.199V31.055Z"
                      fill="#9B9B9B"
                    ></path>
                    <path
                      d="M90.852 20.776L109.381 20.768V16.136H98.458L109.029 3.628V0L91.115 0.007V4.639H101.422L90.852 17.148V20.776Z"
                      fill="#9B9B9B"
                    ></path>
                  </svg>
                  <h5 className="font-vazirBold text-gray-700 dark:text-white">
                    اعلان جدیدی وجود ندارد
                  </h5>
                  <Button
                    onClick={() => {
                      setShowArchive(true);
                      setIsFetching(true);
                      setInterval(() => {
                        setIsFetching(false);
                      }, 5000);
                    }}
                    style="rounded-md text-[13px] bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-100"
                  >
                    نمایش اعلان های بایگانی شده
                  </Button>
                </>
              )}
            </div>
          </div>
        </Button>
      ) : (
        <button
          className="px-0 py-0 font-vazirBold text-neutral-500 dark:text-white text-base hover:shadow-none"
          onClick={openModalHandler}
        >
          ورود / ثبت نام
        </button>
      )}

      <Link className="font-vazirBold text-base text-neutral-500 dark:text-white" to="/host">
        میزبان شوید
      </Link>
      <Link className="font-vazirBold text-base text-neutral-500 dark:text-white" to="/wishes">
        علاقه مندی ها
      </Link>
    </>
  );
}

export default NavLinks;
