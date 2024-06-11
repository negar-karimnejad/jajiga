import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
  zone: string;
  residence_type: string;
  bedroom: number;
  share_house: boolean;
  features: string[];
  min_stay: number;
  max_stay: number;
  extra_person_charge: number;
  location: {
    lat: number;
    lng: number;
  };
  discount: {
    day: number;
    off: number;
  }[];
  housing_space: {
    title: string;
    rooms: string[];
  }[];
  cancellation_policy: string;
  residence_policy: string[];
  entrance_hour: number;
  leaving_hour: number;
  host?: {
    id: number;
    fullname: string;
    registery_date: Date;
    response_time: number;
    reservation_confirmation: number;
    profile: string;
  };
  price: number;
  category: string[];
  rating?: {
    total: number;
    truth: number;
    attitude: number;
    clean: number;
    location: number;
    Delivery: number;
    quality: number;
  };
  reviews: number;
  comments?: [
    {
      id: number;
      created_at: Date | null;
      user: string;
      avatar: string;
      comment: string;
      rating: number;
      response: {
        id: number;
        created_at: Date | null;
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

export const addRoomToServer = createAsyncThunk(
  'rooms/addRoomToServer',
  async (room: Room) => {
    console.log(room);

    // if (typeof room.images[0] !== 'string') {
    const imageName = `${Math.random()}-${room.images.name}`.replaceAll(
      '/',
      '',
    );

    const imagePath = `https://yazyhwunsvceubbnfjjo.supabase.co/storage/v1/object/public/rooms/${imageName}`;

    const { data, error } = await supabase
      .from('rooms')
      .insert([{ ...room, images: [imagePath] }]);

    if (error) {
      console.error(error);
      throw new Error('Room could not be created');
    }

    // Upload Image
    const { error: storageError } = await supabase.storage
      .from('rooms')
      .upload(imageName, room.images[0]);

    if (storageError) {
      console.error(storageError);
      throw new Error(
        'Room image could not be uploaded and the room was not created',
      );
    }
    return data;
    // } else {
    //   throw new Error('Cover image must be a file');
    // }
  },
);
export const removeRoomFromServer = createAsyncThunk(
  'rooms/removeRoomFromServer',
  async (roomId: number) => {
    const { error } = await supabase.from('rooms').delete().eq('id', roomId);
    if (error) {
      throw new Error('Room could not be deleted');
    }

    return roomId;
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
    // Add Room
    builder.addCase(addRoomToServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      addRoomToServer.fulfilled.type,
      (state, action: PayloadAction<Room>) => {
        state.loading = false;
        state.error = null;
        state.rooms.push(action.payload);
      },
    );
    builder.addCase(addRoomToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Something went wrong.';
    });
    // Remove Room
    builder.addCase(removeRoomFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      removeRoomFromServer.fulfilled.type,
      (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.error = null;
        state.rooms = state.rooms.filter((room) => room.id !== action.payload);
      },
    );
    builder.addCase(removeRoomFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Something went wrong.';
    });
  },
});
export default roomSlice.reducer;
