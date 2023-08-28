import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { coreConfig } from 'common/core/config';
import type {
  IFilms,
  IPeople,
  IPerson,
  IPlanet,
  IPlanets,
  ISpecies,
  IStarship,
  IStarships,
  IVehicles,
} from 'common/models';

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
    getPerson: builder.query<IPerson, string>({
      query: (id) => coreConfig.endpoints.person.format(id),
    }),
    getPlanet: builder.query<IPlanet, string>({
      query: (id) => coreConfig.endpoints.planet.format(id),
    }),
    getStarship: builder.query<IStarship, string>({
      query: (id) => coreConfig.endpoints.starship.format(id),
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
  useGetPersonQuery,
  useGetPlanetQuery,
  useGetStarshipQuery,
} = swapiApi;
