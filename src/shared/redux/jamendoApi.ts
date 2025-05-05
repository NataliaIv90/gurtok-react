// api/jamendoApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jamendoApi = createApi({
  reducerPath: 'jamendoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jamendo.com/v3.0/' }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: (params) =>
        `tracks/?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&${new URLSearchParams(params)}`,
    }),
  }),
});

export const { useGetTracksQuery } = jamendoApi;
