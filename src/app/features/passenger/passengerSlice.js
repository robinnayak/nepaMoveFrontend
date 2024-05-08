import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passenger_data: "",
  map_location: {
    origin: {
      latitude: 0,
      longitude: 0,
    },
    destination: {
      latitude: 0,
      longitude: 0,
    },
    travel_time:""
  },
};

export const passengerSlice = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    setPassengerData: (state, action) => {
      state.passenger_data = action.payload;
    },
    setOrigin: (state, action) => {
      state.map_location.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.map_location.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.map_location.travel_time = action.payload;
    },
    
  },
});

export const { setPassengerData, setOrigin, setTravelTime,setDestination } = passengerSlice.actions;
export default passengerSlice.reducer;
