import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { coreConfig } from 'common/core/config';
import type { IFilms, IPeople, IPlanets, ISpecies, IStarships, IVehicles } from 'common/models';

// Define a service using a base URL and expected endpoints
export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: coreConfig.endpoints.root }),
  endpoints: (builder) => ({
    getPeople: builder.query<IPeople, string>({
      query: (pageNumber = '1') => coreConfig.endpoints.people.format(pageNumber),
    }),
    getPlanets: builder.query<IPlanets, string>({
      query: (pageNumber = '1') => coreConfig.endpoints.planets.format(pageNumber),
    }),
    getFilms: builder.query<IFilms, string>({
      query: (pageNumber = '1') => coreConfig.endpoints.films.format(pageNumber),
    }),
    getSpecies: builder.query<ISpecies, string>({
      query: (pageNumber = '1') => coreConfig.endpoints.species.format(pageNumber),
    }),
    getVehicles: builder.query<IVehicles, string>({
      query: (pageNumber = '1') => coreConfig.endpoints.vehicles.format(pageNumber),
    }),
    getStarships: builder.query<IStarships, string>({
      query: (pageNumber = '1') => coreConfig.endpoints.starships.format(pageNumber),
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
