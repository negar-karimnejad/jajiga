import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  Trip,
  addTripToServer,
  getTripsFromServer,
  removeTripToServer,
} from '../redux/store/trips';

function useTrips() {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.trips);
  const { error, loading, trips } = data;

  const addTrip = (tripData: Trip) => {
    dispatch(addTripToServer(tripData));
  };
  const removeTrip = (id: number) => {
    dispatch(removeTripToServer(id));
  };

  useEffect(() => {
    dispatch(getTripsFromServer());
  }, [dispatch]);

  return { error, loading, trips, addTrip, removeTrip };
}

export default useTrips;
