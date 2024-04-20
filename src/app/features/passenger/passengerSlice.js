import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    passenger_data: "",
};



export const passengerSlice = createSlice({
    name: "passenger",
    initialState,
    reducers: {
        setPassengerData: (state, action) => {
            state.passenger_data = action.payload;
        },
    },
});

export const { setPassengerData } = passengerSlice.actions;
export default passengerSlice.reducer;
