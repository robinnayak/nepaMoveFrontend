import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import {BASEURL} from "../../../services/Baseurl";  

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl:BASEURL}),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => "Driver/",
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

export const { useGetDataQuery } = authApi;
