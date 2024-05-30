import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  Trip,
  addTripToServer,
  getTripsFromServer,
} from '../redux/store/trips';

function useTrips() {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.trips);
  const { error, loading, trips } = data;

  const addTrip = (tripData: Trip) => {
    dispatch(addTripToServer(tripData));
  };

  useEffect(() => {
    dispatch(getTripsFromServer());
  }, [dispatch]);

  return { error, loading, trips, addTrip };
}

export default useTrips;
