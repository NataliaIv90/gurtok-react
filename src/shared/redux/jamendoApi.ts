import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IGenresResponse, IPlaylistsResponse, JamendoResponse } from '../types/jamendo';

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

export const jamendoApi = createApi({
  reducerPath: 'jamendoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jamendo.com/v3.0/' }),
  endpoints: (builder) => ({
    getTracks: builder.query<JamendoResponse, Record<string, string>>({
      query: ({ genre }) => `tracks/?client_id=${clientId}&format=json&limit=20&tags=${genre}`,
    }),
    getPlaylists: builder.query<IPlaylistsResponse, void>({
      query: () => `playlists/?client_id=${clientSecret}`,
    }),
    getGenres: builder.query<IGenresResponse, void>({
      query: () =>
        `tags?order=featuredRank&limit=40&lang=en&category[]=genre&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`,
    }),
  }),
});

export const { useGetTracksQuery, useGetPlaylistsQuery, useGetGenresQuery } = jamendoApi;
