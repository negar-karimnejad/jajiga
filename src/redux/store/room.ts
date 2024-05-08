import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface Room {
  id: number;
  title: string;
  description: string;
  code: number;
  reserved: number;
  images: string[];
  capacity: number;
  max_capacity: number;
  foundation_meterage: number;
  area_meterage: number;
  zone?: string;
  residence_type?: string;
  bedroom: number;
  share_house?: boolean;
  features?: string[];
  min_stay?: number;
  max_stay?: number;
  extra_person_charge?: number;
  discount?: {
    day: number;
    off: number;
  }[];
  housing_space?: {
    title: string;
    rooms: string[];
  }[];
  cancellation_policy: string;
  residence_policy?: string[];
  entrance_hour: number;
  leaving_hour: number;
  host_id: number;
  price: number;
  category: string[];
  rating: {
    total: number;
    truth: number;
    attitude: number;
    clean: number;
    location: number;
    Delivery: number;
    quality: number;
  };
  reviews: number;
  comments: [
    {
      id: number;
      created_at: Date;
      user: string;
      avatar: string;
      comment: string;
      rating: number;
      response: {
        id: number;
        created_at: Date;
        comment: string;
      };
    },
  ];
}

interface RoomState {
  loading: boolean;
  error: string | null;
  rooms: Room[];
}

const initialState: RoomState = {
  loading: false,
  error: null,
  rooms: [],
};

export const getRoomsFromServer = createAsyncThunk(
  'rooms/getRoomsFromServer',
  async () => {
    const { data: rooms, error } = await supabase.from('rooms').select('*');
    if (error) {
      throw error;
    }
    return rooms;
  },
);

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomsFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRoomsFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
      state.error = null;
    });
    builder.addCase(getRoomsFromServer.rejected, (state, action) => {
      state.loading = false;
      state.rooms = [];
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
    });
  },
});

export default roomSlice.reducer;
