import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    user: {
      username: "raya",
      email: "raya@email.com",
      phone_number: "",
      is_driver: true,
    },
    license_number: "",
    phone_number: "",
    address: "",
    date_of_birth: null,
    driving_experience: 1,
    rating: "0.0",
    total_rides: 0,
    earnings: "0.00",
    availability_status: true,
    last_updated_location: "2024-04-14T11:00:12.626471+05:45",
  },
  vehicle_data: {
    registration_number: "",
    vehicle_type: "",
    company_made: "",
    model: "",
    age: 0,
    color: "",
    seating_capacity: 0,
    license_plate_number: "",
    available_seat: 0,
  },
  no_of_vehicles: 4,
  vehicles: [],
  tripPrice : "",
};

export const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    setDriverData: (state, action) => {
      state.user = action.payload;
    },
    setVehicleData: (state, action) => {
      state.vehicle_data = action.payload;
      // console.log("state vehicle data", state.vehicle_data);
    },
    setNoOfVehicles: (state, action) => {
      // console.log("no of redux vehicles", action.payload);
      state.no_of_vehicles = action.payload;
    },
    setvehicles: (state, action) => {
      // console.log("license plate num", action.payload);
      state.vehicles = action.payload;
    },
    setStoreTripPrice: (state, action) => {
      console.log("trip price payload: ", action.payload);
      state.tripPrice = action.payload;
    },
  },
});

export const {
  setDriverData,
  setVehicleData,
  setNoOfVehicles,
  setvehicles,
  setStoreTripPrice,
} = driverSlice.actions;
export default driverSlice.reducer;
