import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import TripCard from '../components/trips/TripCard';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import RoomCardSkeleton from '../components/ui/skeleton/RoomCardSkeleton';
import { useAuth } from '../hooks/useAuth';
import useTrips from '../hooks/useTrips';

function Trips() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { trips, loading, removeTrip } = useTrips();

  if (!user) {
    navigate(-1);
  }

  // if (loading) return <Loader />;

  const deleteHandler = (id: number) => {
    Swal.fire({
      title: 'آیا از حذف رزرو مطمئنید؟',
      toast: false,
      position: 'center',
      showConfirmButton: true,
      showCancelButton: true,
      icon: 'warning',
      customClass: { icon: 'm-auto mt-4' },
      confirmButtonText: 'بله',
      cancelButtonText: 'انصراف',
    }).then((result) => {
      if (result.isConfirmed) {
        removeTrip(id);
        Swal.fire({
          title: 'رزرو با موفقیت حذف شد',
          toast: false,
          position: 'center',
          icon: 'success',
          customClass: { icon: 'm-auto mt-4' },
        });
      }
    });
  };

  return (
    <>
      <Application style="h-12" />
      <div className="mx-auto w-full border-b bg-white py-2 dark:border-0 dark:bg-gray-800 lg:gap-x-10">
        <div className="container flex items-center justify-between gap-x-3">
          <WhiteBgNavbar />
        </div>
      </div>
      <div className="relative">
        <div className="h-24 w-full bg-yellow-400">
          <div className="h-full w-full bg-[url(/images/patterns/pattern.png)]">
            <Breadcrumb pageLink="سفرها" />
          </div>
        </div>
        <div className="container mt-5 grid grid-cols-1 gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {trips?.length === 0 ? (
            <div className="col-span-12 flex flex-col items-center justify-center gap-3">
              <svg
                className="h-36 w-36"
                fill="none"
                viewBox="0 0 140 140"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clipPath="url(#clip0_9651:92866)">
                  <path
                    d="M140 43.5V46.3H128.5V44.1L135 36.6H128.6V33.8H139.7V36L133.2 43.5H140ZM134 18.5V23.3H114.6V19.5L125.7 6.5H114.9V1.7H133.7V5.5L122.6 18.5H134ZM73.1 86.7C68.7 86.7 64.7 83.8 62.8 79.1L62.5 78.4L62.2001 77.7L62.8 77.3L65.4001 75.8L66.2 75.3L66.6 76.2L66.9001 76.9C68.1001 79.8 70.5 81.6 73.1 81.6C75.7 81.6 78.1001 79.8 79.3001 76.9L79.6 76.2L80 75.3L80.8001 75.8L83.4001 77.3L84 77.7L83.7 78.4L83.4001 79.1C81.5001 83.8 77.5 86.7 73.1 86.7V86.7ZM47.2001 86.7C42.8001 86.7 38.8001 83.8 36.9001 79.1L36.6 78.4L36.3 77.7L36.9001 77.3L39.5 75.8L40.3 75.3L40.7001 76.2L41 76.9C42.2 79.8 44.6001 81.6 47.2001 81.6C49.8001 81.6 52.2001 79.8 53.4001 76.9L53.7001 76.2L54.1 75.3L54.9001 75.8L57.5 77.3L58.1 77.7L57.8 78.4L57.5 79.1C55.6 83.8 51.6001 86.7 47.2001 86.7V86.7ZM61.1 101C59.6 101 58.2 101.9 57.6 103.4C56.8 105.3 57.7001 107.6 59.7001 108.4C59.9001 108.5 60.2001 108.6 60.4001 108.6C62.5001 109 64.5001 107.7 64.9001 105.6C65.1001 104.4 64.8001 103.1 63.9001 102.2C63.1001 101.4 62.1 101 61.1 101"
                    fill="#9B9B9B"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.2 15.7V35.2H15.7C7.6 35.2 0.9 41.4 0.1 49.3C0 49.8 0 50.4 0 50.9V113.7C0 122.4 7 129.4 15.7 129.4C15.7 135.4 20.6 140.2 26.5 140.2C32.5 140.2 37.3 135.3 37.3 129.4H84.3C84.3 133.7 86.9 137.6 90.9 139.3C92.1983 139.845 93.5921 140.125 95 140.125C96.4079 140.125 97.8017 139.845 99.1 139.3C103.1 137.7 105.7 133.8 105.7 129.4H106.7C115.4 129.4 122.4 122.4 122.4 113.7V51C122.4 42.3 115.4 35.3 106.7 35.3H85.2V15.7C85.2 7 78.2 0 69.5 0H52.9C44.2 0 37.2 7 37.2 15.7ZM8.8 51C8.8 47.2 11.9 44.1 15.7 44.1H106.7C110.5 44.1 113.6 47.2 113.6 51V56.9H8.8V51ZM113.6 65.6V113.6C113.6 117.4 110.5 120.4 106.7 120.5H15.7C11.9 120.5 8.8 117.4 8.8 113.6V65.6H113.6ZM54 9C49.5817 9 46 12.5817 46 17V35H76V17C76 12.5817 72.4183 9 68 9H54Z"
                    fill="#E1E0E1"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_9651:92866">
                    <rect width="140" height="140" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="font-vazirMedium text-lg">
                در حال حاضر سفری ندارید.
              </p>

              <Button style="rounded-md mt-3 bg-gray-100 px-3 py-2 transition-all hover:bg-gray-300 dark:text-black">
                <Link className="flex items-center gap-2" to="/s">
                  جستجو
                </Link>
              </Button>
            </div>
          ) : loading ? (
            Array.from({ length: trips?.length }).map((_, index) => (
              <RoomCardSkeleton key={index} />
            ))
          ) : (
            trips?.map((trip) => (
              <TripCard
                deleteHandler={deleteHandler}
                key={trip?.id}
                trip={trip}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Trips;
