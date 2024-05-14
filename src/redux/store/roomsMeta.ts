import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface RoomsMeta {
  id: number;
  title: string;
  description: string;
  name: string;
  canonical: string;
}

interface RoomsMetaState {
  loading: boolean;
  error: string | null;
  roomsMeta: RoomsMeta[];
}

const initialState: RoomsMetaState = {
  loading: false,
  error: null,
  roomsMeta: [],
};

export const getRoomsMetaFromServer = createAsyncThunk(
  'roomsMeta/getRoomsMetaFromServer',
  async () => {
    const { data: roomsMeta, error } = await supabase
      .from('roomsMeta')
      .select('*');
    if (error) {
      throw error;
    }
    return roomsMeta;
  },
);

const roomsMetaSlice = createSlice({
  name: 'roomsMeta',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomsMetaFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRoomsMetaFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.roomsMeta = action.payload;
      state.error = null;
    });
    builder.addCase(getRoomsMetaFromServer.rejected, (state, action) => {
      state.loading = false;
      state.roomsMeta = [];
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
    });
  },
});
export default roomsMetaSlice.reducer;
