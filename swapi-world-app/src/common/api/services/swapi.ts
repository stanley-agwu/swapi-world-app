import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { coreConfig } from 'common/core/config';
import type { People } from 'common/models';

// Define a service using a base URL and expected endpoints
export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: coreConfig.endpoints.root }),
  endpoints: (builder) => ({
    getPeople: builder.query<People, string>({
      query: (pageNumber) => coreConfig.endpoints.people.format(pageNumber),
    }),
    getPlanets: builder.query<People, string>({
      query: (pageNumber) => coreConfig.endpoints.people.format(pageNumber),
    }),
    getFilms: builder.query<People, string>({
      query: (pageNumber) => coreConfig.endpoints.people.format(pageNumber),
    }),
    getSpecies: builder.query<People, string>({
      query: (pageNumber) => coreConfig.endpoints.people.format(pageNumber),
    }),
    getVehicles: builder.query<People, string>({
      query: (pageNumber) => coreConfig.endpoints.people.format(pageNumber),
    }),
    getStarships: builder.query<People, string>({
      query: (pageNumber) => coreConfig.endpoints.people.format(pageNumber),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPeopleQuery,
  useGetPlanetsQuery,
  useGetFilmsQuery,
  useGetSpeciesQuery,
  useGetVehiclesQuery,
  useGetStarshipsQuery,
} = swapiApi;
