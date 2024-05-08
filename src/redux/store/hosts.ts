import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../services/supabase';

export interface Host {
  id: number;
  fullname: string;
  registery_date: Date;
  active_residences: number;
  response_time: number;
  reservation_confirmation: number;
  profile: string;
}

interface HostState {
  loading: boolean;
  error: string | null;
  hosts: Host[];
}

const initialState: HostState = {
  loading: false,
  error: null,
  hosts: [],
};

export const getHostsFromServer = createAsyncThunk(
  'hosts/getHostsFromServer',
  async () => {
    const { data: hosts, error } = await supabase.from('hosts').select('*');
    if (error) {
      throw error;
    }
    return hosts;
  },
);

const HostsSlice = createSlice({
  name: 'hosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHostsFromServer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHostsFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.hosts = action.payload;
      state.error = null;
    });
    builder.addCase(getHostsFromServer.rejected, (state, action) => {
      state.loading = false;
      state.hosts = [];
      state.error =
        action.error.message ?? 'Something went wrong. Please try again later.';
    });
  },
});

export default HostsSlice.reducer;
