import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import { driveApi } from "./features/driver/driverApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./features/pokemon/pokemon";
import driverReducer from "./features/driver/driverSlice";
import passengerReducer from "./features/passenger/passengerSlice"; 
export const store = configureStore({
  reducer: {
    auth: authReducer,
    driver: driverReducer,
    passenger: passengerReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [driveApi.reducerPath]: driveApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, driveApi.middleware), 

}); 


setupListeners(store.dispatch);