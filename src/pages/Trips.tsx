import { useNavigate } from 'react-router-dom';
import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import TripCard from '../components/trips/TripCard';
import Breadcrumb from '../components/ui/Breadcrumb';
import Loader from '../components/ui/Loader';
import RoomCardSkeleton from '../components/ui/skeleton/RoomCardSkeleton';
import { useAuth } from '../hooks/useAuth';
import useTrips from '../hooks/useTrips';

function Trips() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { trips, loading } = useTrips();

  if (!user) {
    navigate('/');
  }

  // if (loading) return <Loader />;
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
          {trips.length === 0 ? (
            <div>هیچ اقامتگاهی رزرو نشده است.</div>
          ) : loading ? (
            Array.from({ length: trips.length }).map((_, index) => (
              <RoomCardSkeleton key={index} />
            ))
          ) : (
            trips.map((trip) => <TripCard key={trip?.id} trip={trip} />)
          )}
        </div>
      </div>
    </>
  );
}

export default Trips;
