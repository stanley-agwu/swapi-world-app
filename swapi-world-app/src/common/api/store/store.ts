import { configureStore } from '@reduxjs/toolkit';

import { peopleApi } from 'common/api/services/people';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});
