import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { coreConfig } from 'common/core/config';
import type { People } from 'common/types';

// Define a service using a base URL and expected endpoints
export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: coreConfig.endpoints.people }),
  endpoints: (builder) => ({
    getPeople: builder.query<People, string>({
      query: (pageNumber) => `?page=${pageNumber}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPeopleQuery } = peopleApi;
