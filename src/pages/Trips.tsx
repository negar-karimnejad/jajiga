import Application from '../components/home/Application';
import WhiteBgNavbar from '../components/navbar/WhiteBgNavbar';
import TripCard from '../components/trips/TripCard';
import Breadcrumb from '../components/ui/Breadcrumb';
import useTrips from '../hooks/useTrips';

function Trips() {
  const { trips } = useTrips();

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
          {trips?.map((trip, index) => <TripCard key={index} trip={trip} />)}
        </div>
      </div>
    </>
  );
}

export default Trips;
