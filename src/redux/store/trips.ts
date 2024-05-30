import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';
import { Room } from './room';

export interface Trip {
  id: number;
  enter: Date;
  exit: Date;
  nights: number;
  numbers: number;
  cost: number;
  room: Room;
  userId: string;
}

interface RoomState {
  loading: boolean;
  error: string | null;
  trips: Trip[];
}

const initialState: RoomState = {
  loading: false,
  error: null,
  trips: [],
};

export const getTripsFromServer = createAsyncThunk(
  'rooms/getTripsFromServer',
  async () => {
    const { data: trips, error } = await supabase.from('trips').select('*');
    if (error) {
      throw error;
    }
    return trips;
  },
);

export const addTripToServer = createAsyncThunk(
  'rooms/addTripToServer',
  async (trip: Trip) => {
    const { data, error } = await supabase.from('trips').insert(trip).single();

    if (error) {
      throw error;
    }

    return data;
  },
);

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTripsFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTripsFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.trips = action.payload;
      state.error = null;
    });
    builder.addCase(getTripsFromServer.rejected, (state, action) => {
      state.loading = false;
      state.trips = [];
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
    });
    builder.addCase(addTripToServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addTripToServer.fulfilled.type,
      (state, action: PayloadAction<Trip>) => {
        state.loading = false;
        state.error = null;
        state.trips.push(action.payload);
      },
    );
    builder.addCase(addTripToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Something went wrong.';
    });
  },
});
export default tripsSlice.reducer;
