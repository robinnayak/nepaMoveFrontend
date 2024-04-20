// const {createApi,fetchBaseQuery} = require("@reduxjs/toolkit/query/react");
import {BASEURL,Driver} from "../../../services/Baseurl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const driveApi = createApi({
    reducerPath: "driveApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8000/"}),
    endpoints: (builder) => ({
        getDriverData: builder.query({
            query: () => `driver/`,
        }),
        // login: builder.mutation({
        //     query: (body) => ({
        //         url: "login/",
        //         method: "POST",
        //         body,
        //     }),
        // }),
        // register: builder.mutation({
        //     query: (body) => ({
        //         url: "register/",
        //         method: "POST",
        //         body,
        //     }),
        // }),
    }),
});

export const { useGetDriverDataQuery } = driveApi;
